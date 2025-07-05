import { useContext } from "react";

import { ThemeContext } from "@/app/contexts";

export const useTheme = () => {
  return useContext(ThemeContext);
};
