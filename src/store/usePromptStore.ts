
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type page = "create" | "create-ai" | "create-scratch"

type PromptStore ={
    page:page,
    setPage :(page:page)=>void
}

export const usePromptStore = create<PromptStore>()(devtools(persist<PromptStore>(
    (set)=>({
        page:"create",
        setPage:(page:page)=>set({page})
    }),{
        name:"Prompt-store"
    }
)))