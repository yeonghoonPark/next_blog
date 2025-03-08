/**
 * Restricts the given number within the specified range.
 * If the number is less than the minimum value, it will return the minimum value.
 * If the number is greater than the maximum value, it will return the maximum value.
 * Otherwise, it will return the number itself.
 *
 * @param number - The number to be restricted within the range.
 * @param min - The minimum boundary of the range.
 * @param max - The maximum boundary of the range.
 * @returns The number restricted within the range [min, max].
 */
export const restrictToRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
