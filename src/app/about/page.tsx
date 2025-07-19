export default function About() {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold underline">About Yochimu</h1>
        <p>
          {`よちむ (Yochimu) means "prophetic dream" in Japanese. This tool was
            created to help Japanese language learners efficiently study
            vocabulary in context.`}
        </p>
        <p>
          Unlike traditional vocabulary lists or flashcards, Yochimu allows you
          to work with real Japanese sentences, preserving the context that is
          so important for proper language acquisition.
        </p>
      </article>
      <article className="flex flex-col gap-2">
        <h2>Features</h2>
        <div>
          <div>
            <h3>Search in Japanese</h3>
            <p>
              Enter any Japanese word or phrase and get detailed translations
              and example sentences.
            </p>
          </div>
          <div>
            <h3>Save Your Favorites</h3>
            <p>
              Collect useful sentences by clicking on them, building your
              personalized study list.
            </p>
          </div>
          <div>
            <h3>Export to Anki</h3>
            <p>
              Download your saved sentences as a TSV file that can be easily
              imported into Anki for spaced repetition practice.
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-2">
        <h2>Why Context Matters</h2>
        <p>
          {`Learning words in isolation makes it difficult to understand how
            they're actually used in real Japanese. Yochimu focuses on providing
            complete sentences so you can learn:`}
        </p>
        <ul>
          <li>Natural word usage</li>
          <li>Common collocations (words that often appear together)</li>
          <li>Grammatical patterns</li>
          <li>Cultural context</li>
        </ul>
        <p>
          This approach leads to better retention and more natural Japanese
          expression.
        </p>
      </article>
      <article className="flex flex-col gap-2">
        <h2>Built With</h2>
        <p>Yochimu is built with modern web technologies:</p>
        <ul>
          <li>React.js and Next.js for the frontend</li>
          <li>Node.js for the backend services</li>
          <li>Integration with Japanese dictionary APIs</li>
        </ul>
        <p>
          The project is open-source and available on{" "}
          <a
            href="https://github.com/ernestohegi/japanese-text-parser"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </article>
    </section>
  );
}
