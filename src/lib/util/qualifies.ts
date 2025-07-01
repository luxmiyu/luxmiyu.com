/**
 * Checks if the given object `match` contains all the words in the `query` string.
 *
 * The function concatenates all values of the `match` object into a single string,
 * then verifies that every word in the `query` is included in that string (case-insensitive).
 *
 * @param {Record<string, any>} match - The object whose values will be searched.
 * @param {string} query - The search string containing words to match.
 * @returns {boolean} Returns `true` if all words in the query are found in the concatenated object values; otherwise, `false`.
 */
export default function qualifies(match: Record<string, any>, query: string): boolean {
  const matchString = Object.values(match)
    .map((value) => String(value).toLowerCase())
    .join(' ')

  const queryWords = query.toLowerCase().split(/\s+/).filter(Boolean)
  return queryWords.every((word) => matchString.includes(word))
}
