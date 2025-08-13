/**
 * Checks whether two arrays contain the same elements with the same frequencies,
 * ignoring order.
 *
 * @template T The type of array elements.
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {boolean} True if both arrays are equivalent, false otherwise.
 */
function arraysEquivalent<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false

  const countMap = (arr: T[]) => {
    const map = new Map<T, number>()
    for (const item of arr) {
      map.set(item, (map.get(item) || 0) + 1)
    }
    return map
  }

  const mapA = countMap(a)
  const mapB = countMap(b)

  if (mapA.size !== mapB.size) return false

  for (const [key, count] of mapA.entries()) {
    if (mapB.get(key) !== count) return false
  }

  return true
}

export default arraysEquivalent
