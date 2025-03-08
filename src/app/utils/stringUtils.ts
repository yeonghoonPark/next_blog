/**
 * Capitalizes the first letter of a given string and makes the rest of the string lowercase.
 * @param string - The string to be capitalized.
 * @returns The string with the first letter capitalized and the rest in lowercase.
 */
export const capitalizeFirstLetter = (string: string): string => {
  if (string.length === 0) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
