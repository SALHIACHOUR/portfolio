"use client";

import { useEffect } from "react";
import type { Locale } from "@/data/translations";

export default function HtmlLang({ lang }: { lang: Locale }) {
    useEffect(() => {
        document.documentElement.lang = lang === "fr" ? "fr" : "en";
    }, [lang]);
    return null;
}
