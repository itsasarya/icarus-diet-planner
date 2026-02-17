import { createContext, useContext, useState } from "react";

type SearchContextType = {
    query: string;
    setQuery: (value: string) => void;
    clear:()=>void
}

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
    const [query, setQuery] = useState("");

    return (
        <SearchContext.Provider value={{ query, setQuery, clear: () => setQuery("") }}>{children}</SearchContext.Provider>
    )
}

export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useSearch must be inside SearchProvider")
    return ctx;
}