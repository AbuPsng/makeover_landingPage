// src/store/useWidthStore.ts
import { create } from "zustand";

type WidthState = {
	width: number;
	setWidth: (newWidth: number) => void;
};

export const useWidthStore = create<WidthState>((set) => ({
	width: typeof window !== "undefined" ? window.innerWidth : 0,
	setWidth: (newWidth) => set({ width: newWidth }),
}));
