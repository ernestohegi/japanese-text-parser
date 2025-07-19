"use client";

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  return (
    <section>
      <article>
        <h1>Yochimu</h1>
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

          <button
            onClick={() => {
              if (!searchQuery) return false;
              // translate(searchText);

              console.log(searchQuery);
            }}
          >
            Search
          </button>
        </div>
      </article>
    </section>
  );
}
