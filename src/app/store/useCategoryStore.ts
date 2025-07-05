import { create } from "zustand";

import { Category } from "@/app/models";

type CategoryActions = {
  resetCategory: () => void;
  setCategory: (category: Category) => void;
};
type CategoryStore = {
  category: Category;
  actions: CategoryActions;
};

const initialState = {
  category: "All" as Category,
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  ...initialState,
  actions: {
    resetCategory: () => set(initialState),
    setCategory: (category) => set(() => ({ category })),
  },
}));
