/**
 * Returns a specified number of random items from the given array.
 * @param array - The array from which the random items will be selected.
 * @param count - The number of items to select.
 * @returns A list of randomly selected items.
 */
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
};
