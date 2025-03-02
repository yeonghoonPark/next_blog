import { create } from "zustand";
import { NavigationState } from "@/app/models/navigation";

type NavigationActions = {
  toggleNavigation: () => void;
};
type NavigationStore = {
  navigationState: NavigationState;
  actions: NavigationActions;
};

const initialState = {
  navigationState: "hidden" as NavigationState,
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  ...initialState,
  actions: {
    toggleNavigation: () =>
      set((state) => ({
        navigationState: state.navigationState === "display" ? "hidden" : "display",
      })),
  },
}));
