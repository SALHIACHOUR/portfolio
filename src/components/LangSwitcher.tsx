"use client";

import Link from "next/link";
import type { Locale } from "@/data/translations";

export default function LangSwitcher({ currentLang }: { currentLang: Locale }) {
    return (
        <div className="flex items-center gap-1">
            <Link
                href="/fr"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    currentLang === "fr"
                        ? "text-white bg-slate-800"
                        : "text-slate-500 hover:text-slate-300"
                }`}
            >
                FR
            </Link>
            <span className="text-slate-600">/</span>
            <Link
                href="/en"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    currentLang === "en"
                        ? "text-white bg-slate-800"
                        : "text-slate-500 hover:text-slate-300"
                }`}
            >
                EN
            </Link>
        </div>
    );
}
