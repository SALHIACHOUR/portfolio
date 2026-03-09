"use client";
import { useState, useEffect } from "react";

const links = [
    { label: "À propos", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Expérience", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-slate-950/90 backdrop-blur border-b border-slate-800" : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-blue-400 text-lg">AS</span>
                <ul className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href="mailto:salhiachour98@gmail.com"
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                >
                    Me contacter
                </a>
            </div>
        </nav>
    );
}
