"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { NormalisedSentence } from "./api/translate/route";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [sentences, setSentences] = useState<NormalisedSentence[] | null>(null);
  const [isPending, setIsPending] = useState(false);

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

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold underline">Yochimu</h1>
          <h2>Japanese Text Parser</h2>
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
        <div className="flex gap-2">
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
            className="cursor-pointer"
          >
            {isPending ? "Searching..." : "Search"}
          </button>
        </div>
      </article>
      {sentences?.map(([term, definitions]) => (
        <div className="flex flex-col gap-4 border p-4 rounded" key={term}>
          <h4 className="font-bold text-3xl">{term}</h4>
          {definitions?.map(({ text, translation }) => (
            <div
              className="flex flex-col gap-4 border p-4 rounded cursor-pointer"
              key={`${text}:${translation}`}
            >
              <h5 className="font-bold">{text}</h5>
              <p>{translation}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
