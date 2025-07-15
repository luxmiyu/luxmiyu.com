/**
 * Format a date as a string in the format "Month Day, Year".
 *
 * @param {Date} date The date to format
 * @returns {string} The formatted date string
 *
 * @example
 * formatDate(new Date('2020-06-20')) // "June 20, 2020"
 */
export default function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
