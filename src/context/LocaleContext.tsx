"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/data/translations";

const LocaleContext = createContext<Locale>("fr");

export function LocaleProvider({
    children,
    locale,
}: {
    children: React.ReactNode;
    locale: Locale;
}) {
    return (
        <LocaleContext.Provider value={locale}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const locale = useContext(LocaleContext);
    if (!locale) {
        throw new Error("useLocale must be used within LocaleProvider");
    }
    return locale;
}
