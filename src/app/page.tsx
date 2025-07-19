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
    <section>
      <article>
        <h1 className="text-3xl font-bold underline">Yochimu</h1>
        <h2>Japanese Text Parser</h2>
        <p>日本語の語彙を効率的かつコンテキストで学ぶためのツールです。</p>
        <p>
          Enter a Japanese word or phrase below to get definitions and example
          sentences. Click on sentences to save them, then export to create Anki
          flashcards.
        </p>
      </article>
      <article>
        <h3>Enter a word or phrase in Japanese to begin your search</h3>
        <div>
          <input
            type="text"
            onChange={(event) => setSearchQuery(event.target.value)}
            autoFocus
            placeholder="予知夢"
          />
          <button onClick={handleSearch} disabled={isPending}>
            {isPending ? "Searching..." : "Search"}
          </button>
        </div>
      </article>
      {sentences?.map(([term, definitions]) => (
        <div className="flex flex-col gap-4" key={term}>
          <h4>{term}</h4>
          {definitions?.map(({ text, translation }) => (
            <div className="flex flex-col gap-4" key={`${text}:${translation}`}>
              <p>{text}</p>
              <p>{translation}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
