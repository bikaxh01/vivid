import { Slide } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SlideState {
  slides: Slide[];
  setSlide: (slides: Slide[]) => void;
}

export const useSlideStore = create(
  persist<SlideState>(
    (set) => ({
      slides: [],
      setSlide: (slides: Slide[]) => set({ slides }),
    }),
    {
      name: "slide-store",
    }
  )
);
