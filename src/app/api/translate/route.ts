import { NextResponse } from "next/server";
import { tokenize, isJapanese } from "wanakana";

import { getTatoebaSentences } from "@/requests/tatoeba";

const MAIN_LANGUAGE_INDEX = 0;

export type Definition = { text: string; translation: string | undefined };

export type NormalisedSentence = [string, Definition[]];

type SentenceDefinitions = Map<string, Definition>;

type Token = {
  type: string;
  value: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  const { term } = await request.json();

  const tokens: (string | Token)[] = tokenize(term, {
    compact: false,
    detailed: false,
  });

  const sentences = new Map<string, SentenceDefinitions>();

  const stringTokens = tokens.filter((token) => typeof token === "string");

  const japaneseTokens = [
    ...new Set(stringTokens.filter((token) => isJapanese(token))),
  ];

  for (const token of japaneseTokens) {
    const results = await getTatoebaSentences(token);

    const definitions: SentenceDefinitions = new Map();

    results.forEach(({ text, translations }) => {
      translations[MAIN_LANGUAGE_INDEX].forEach((translation) => {
        const uniqueKey = `${text}:${translation?.text}`;

        definitions.set(uniqueKey, {
          text,
          translation: translation?.text,
        });
      });
    });

    sentences.set(token, definitions);
  }

  const normalisedSentences: NormalisedSentence[] = Array.from(
    sentences.entries()
  ).map(([term, definitions]) => [term, Array.from(definitions.values())]);

  return NextResponse.json(normalisedSentences, { status: 200 });
}
