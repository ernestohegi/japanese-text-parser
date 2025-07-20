export default function Help() {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-4 border-b pb-4">
        <h1 className="text-6xl font-bold">How to use Yochimu</h1>
        <p>
          {`Yochimu is designed to be simple and intuitive. Here's a quick guide
          to get you started.`}
        </p>
      </article>
      <article className="flex flex-col gap-2 border-b pb-4">
        <h2 className="text-2xl font-bold">Basic Usage</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">1. Enter a Japanese Word or Phrase</h3>
            <p>
              In the search box on the home page, type any Japanese word,
              phrase, or sentence you want to learn more about.
            </p>
            <p>Examples:</p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold">単語</span> (word)
              </li>
              <li>
                <span className="font-bold">日本語</span> (Japanese language)
              </li>
              <li>
                <span className="font-bold">勉強する</span> (to study)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">2. Review the Results</h3>
            <p>
              Yochimu will display definitions and example sentences containing
              your search term. The results come from Tatoeba, but we are
              planning to expand the amount of sources in the future.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">3. Save Sentences You Want to Study</h3>
            <p>
              {`Click on any sentence to add it to your study list. The sentence
              will be highlighted to show it's been selected.`}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">4. Export Your Study List</h3>
            <p>
              {`Once you've collected some sentences, click the "Export sentences"
              button to download your list as a TSV (Tab-Separated Values) file.`}
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-2 border-b pb-4">
        <h2 className="text-2xl font-bold">Importing to Anki</h2>
        <p>
          The TSV files from Yochimu are formatted for easy import into Anki, a
          popular spaced repetition flashcard program.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">1. Open Anki</h3>
            <p>Start Anki on your computer.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">2. Create or Select a Deck</h3>
            <p>
              Create a new deck for your Japanese study or select an existing
              one.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">3. Import File</h3>
            <p>
              {`Click "File" → "Import" and select the TSV file you downloaded
              from Yochimu.`}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">4. Configure Import Settings</h3>
            <p>
              Make sure the field mapping is correct. The first field should be
              for Japanese and the second for English.
            </p>
          </div>
          <div>
            <h3 className="font-bold">5. Begin Studying</h3>
            <p>
              {`Once imported, you can begin studying your new cards using Anki's
              spaced repetition system.`}
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-2 border-b pb-4">
        <h2 className="text-2xl font-bold">Tips for Effective Study</h2>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            Choose sentences that are at or slightly above your current level
          </li>
          <li>
            Focus on natural, everyday expressions rather than literary or
            extremely formal Japanese
          </li>
          <li>Try to understand the grammar patterns in each sentence</li>
          <li>Read sentences aloud to practice pronunciation</li>
          <li>Create a consistent study routine with Anki</li>
        </ul>
      </article>
      <article className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Need More Help?</h2>
        <p>
          If you have questions or need assistance, please visit the{" "}
          <a
            href="https://github.com/ernestohegi/japanese-text-parser/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold italic"
          >
            GitHub issues page
          </a>{" "}
          to report problems or request features.
        </p>
      </article>
    </section>
  );
}
