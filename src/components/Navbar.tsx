"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTranslations } from "@/data/translations";
import LangSwitcher from "./LangSwitcher";
import type { Locale } from "@/data/translations";

export default function Navbar({ lang }: { lang: Locale }) {
    const { portfolio, ui } = getTranslations(lang);
    const links = [
        { label: ui.navWork, href: "#projects" },
        { label: ui.navAbout, href: "#experience" },
        { label: ui.navContact, href: "#contact" },
    ];
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href={`/${lang}`}
                        className="text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors"
                    >
                        {portfolio.name.split(" ").map(w => w[0]).join("")}
                        <span className="text-blue-400">.</span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-10">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Lang switcher */}
                    <div className="hidden md:flex items-center gap-4">
                        <LangSwitcher currentLang={lang} />
                        <a
                            href={`mailto:${portfolio.email}`}
                            className="group flex items-center gap-1.5 bg-white text-slate-950 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-400 transition-all duration-300"
                        >
                            {ui.navHireMe}
                            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-10 md:hidden"
                    >
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-4xl font-bold hover:text-blue-400 transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                        <div className="flex mt-4" onClick={(e) => e.stopPropagation()}>
                            <LangSwitcher currentLang={lang} />
                        </div>
                        <a
                            href={`mailto:${portfolio.email}`}
                            className="text-slate-500 text-sm mt-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            {portfolio.email}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
