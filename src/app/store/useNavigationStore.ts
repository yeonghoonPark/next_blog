import { create } from "zustand";

type NavigationActions = {
  toggleNavigation: () => void;
};
type NavigationStatus = "display" | "hidden";
type NavigationStore = {
  navigationState: NavigationStatus;
  actions: NavigationActions;
};

const initialState = {
  navigationState: "hidden" as NavigationStatus,
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  ...initialState,
  actions: {
    toggleNavigation: () =>
      set(({ navigationState }) => ({
        navigationState: navigationState === "display" ? "hidden" : "display",
      })),
  },
}));
