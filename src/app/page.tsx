"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import crypto from "crypto";
import FileSaver from "file-saver";

import { Definition, NormalisedSentence } from "./api/translate/route";
import { Sentence } from "@/components/Sentence";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [sentences, setSentences] = useState<NormalisedSentence[] | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [selectedSentences, setSelectedSentences] = useState<
    Map<string, Definition>
  >(new Map());

  const queryClient = useQueryClient();

  const translateTerm = async (term = "") => {
    if (!term) return false;

    setIsPending(true);

    const searchQuerySentences = await queryClient.fetchQuery({
      queryKey: ["translate", term],
      queryFn: async () => {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ term }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch translation");
        }

        return await response.json();
      },
    });

    setSentences(searchQuerySentences);
    setIsPending(false);
  };

  const handleSearch = async () => {
    if (!searchQuery) return false;

    setSentences(null);

    await translateTerm(searchQuery);
  };

  const handleSaveSentence = useCallback(
    ({ text, translation }: Definition) => {
      if (!text || !translation) return;

      setSelectedSentences((prev) => {
        const newMap = new Map(prev);

        const uniqueKey = `${text}:${translation}`;

        if (newMap.has(uniqueKey)) {
          newMap.delete(uniqueKey);
        } else {
          newMap.set(uniqueKey, { text, translation });
        }

        return newMap;
      });
    },
    []
  );

  const handleDownloadSentences = useCallback(async () => {
    if (selectedSentences.size === 0) return;

    let tsvContent = "";

    selectedSentences.forEach(({ text, translation }) => {
      tsvContent += `${text}\t${translation}\n`;
    });

    const blob = new Blob([tsvContent], {
      type: "text/tab-separated-values;charset=utf-8",
    });

    await FileSaver.saveAs(
      blob,
      `yochimu-sentences-${crypto.randomBytes(4).toString("hex")}.tsv`
    );
  }, [selectedSentences]);

  return (
    <section className="flex flex-col gap-8">
      <article className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold">よちむ Yochimu</h1>
          <h2 className="text-2xl font-bold">Japanese Text Parser</h2>
          <p>日本語の語彙を効率的かつコンテキストで学ぶためのツールです。</p>
        </div>
        <ul className="list-disc pl-5">
          <li>
            Enter a Japanese word or phrase below to get definitions and example
            sentences.
          </li>
          <li>
            Click on sentences to save them, then export to create Anki
            flashcards!
          </li>
        </ul>
      </article>
      <article className="flex flex-col gap-2">
        <h3>Enter a word or phrase in Japanese</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            onChange={(event) => setSearchQuery(event.target.value)}
            autoFocus
            placeholder="予知夢"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSearch}
            disabled={isPending}
            className="cursor-pointer border p-2"
          >
            {isPending ? "Searching..." : "Search"}
          </button>
        </div>
      </article>
      {isPending && <p>少々お待ち下さい...</p>}
      {!!sentences?.length && (
        <div className="flex flex-col gap-4">
          {sentences?.map(([term, definitions]) => (
            <div className="flex flex-col gap-4 border p-4 rounded" key={term}>
              <h4 className="font-bold text-3xl">{term}</h4>
              <div className="flex flex-col md:grid md:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-12 gap-4">
                {definitions?.map(({ text, translation }) => (
                  <Sentence
                    key={`${text}:${translation}`}
                    text={text}
                    translation={translation}
                    handleOnClick={handleSaveSentence}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedSentences.size > 0 && (
        <button
          onClick={handleDownloadSentences}
          className="fixed right-10 bottom-10 z-50 p-5 border bg-white text-black cursor-pointer"
        >
          Export {selectedSentences.size} Sentences
        </button>
      )}
    </section>
  );
}
