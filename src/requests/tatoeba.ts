import { TatoebaSentences } from "./tatoeba.types";

// Tatoeba API: https://en.wiki.tatoeba.org/articles/show/api
export const getTatoebaSentences = async (
  term: string
): Promise<TatoebaSentences[]> => {
  const response = await fetch(
    `https://tatoeba.org/eng/api_v0/search?from=jpn&to=eng&query=${term}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch sentences");
  }

  const { results } = await response.json();

  return results;
};
