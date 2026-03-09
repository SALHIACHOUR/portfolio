"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { getTranslations } from "@/data/translations";
import type { Locale } from "@/data/translations";

const sentence = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
};

export default function Hero({ lang }: { lang: Locale }) {
    const { portfolio, ui } = getTranslations(lang);
    const { name, email, linkedin, github } = portfolio;
    const words = ui.heroHeadline;
    const highlightWords = ["backend", "scale."];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-12 max-w-7xl mx-auto"
        >
            {/* Top block */}
            <div className="flex items-start justify-between">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-500 text-sm tracking-widest uppercase font-medium"
                >
                    {ui.heroTagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-sm text-slate-400 border border-slate-800 rounded-full px-4 py-2"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {ui.heroOpenToWork}
                </motion.div>
            </div>

            {/* Center — Big headline */}
            <div className="mt-20 md:mt-0 flex-1 flex flex-col justify-center">
                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[1.0] tracking-tight text-white"
                >
                    {words.map((w, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3 + i * 0.08,
                            }}
                            className={`inline-block mr-[0.25em] ${
                                highlightWords.some((hw) => w.toLowerCase().includes(hw))
                                    ? "text-blue-400"
                                    : "text-white"
                            }`}
                        >
                            {w}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-slate-500 text-lg md:text-xl mt-8 max-w-xl leading-relaxed"
                >
                    {ui.heroSubline}
                    <br />
                    <span className="text-slate-600 text-base">{ui.heroSublineLocation}</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex items-center gap-4 mt-10 flex-wrap"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-white text-slate-950 font-semibold px-6 py-3 rounded-full hover:bg-blue-400 transition-all duration-300"
                    >
                        {ui.heroSeeProjects}
                        <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 font-medium px-6 py-3 rounded-full transition-all duration-300"
                    >
                        {ui.heroContactMe}
                    </a>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex items-center justify-between mt-16 pt-6 border-t border-slate-800"
            >
                <p className="text-slate-600 text-sm font-medium">{name}</p>

                <div className="flex items-center gap-6">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 text-sm transition-colors"
                    >
                        <Linkedin size={15} /> LinkedIn
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 text-sm transition-colors"
                    >
                        <Github size={15} /> GitHub
                    </a>
                </div>

                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-slate-700 text-sm hidden md:block"
                >
                    {ui.heroScroll}
                </motion.div>
            </motion.div>
        </section>
    );
}
