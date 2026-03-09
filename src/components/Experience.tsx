"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "@/data/translations";
import type { Locale } from "@/data/translations";

export default function Experience({ lang }: { lang: Locale }) {
    const { portfolio, ui } = getTranslations(lang);
    return (
        <section id="experience" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-4"
            >
                <h2 className="text-slate-500 text-sm tracking-widest uppercase font-medium">
                    {ui.sectionExperience}
                </h2>
                <span className="text-slate-700 text-sm font-mono">
          {String(portfolio.experiences.length).padStart(2, "0")}
        </span>
            </motion.div>

            {/* Experience list */}
            <div>
                {portfolio.experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group border-t border-slate-800 py-10 grid md:grid-cols-[1fr_2fr] gap-8 hover:border-blue-500/40 transition-all duration-300"
                    >
                        {/* Left — meta */}
                        <div className="flex md:flex-col gap-4 md:gap-3">
                            {/* Number + company */}
                            <div className="flex items-start gap-4">
                <span className="text-slate-700 font-mono text-sm pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                                <div>
                                    <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                                        {exp.company}
                                    </p>
                                    <p className="text-slate-600 text-xs mt-1">{exp.location}</p>
                                </div>
                            </div>

                            {/* Period */}
                            <span
                                className={`self-start text-xs px-3 py-1 rounded-full border ${
                                    exp.current
                                        ? "border-green-500/30 text-green-400 bg-green-500/10"
                                        : "border-slate-800 text-slate-500 bg-slate-900"
                                }`}
                            >
                {exp.period}
              </span>
                        </div>

                        {/* Right — content */}
                        <div>
                            {/* Title */}
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-5 flex items-center gap-2">
                                {exp.title}
                                {exp.current && (
                                    <ArrowUpRight
                                        size={18}
                                        className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                            </h3>

                            {/* Description bullets */}
                            <ul className="space-y-3 mb-6">
                                {exp.description.map((d, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + j * 0.05 }}
                                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                                    >
                                        <span className="text-blue-500 shrink-0 mt-1">▸</span>
                                        <span>{d}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs text-slate-500 border border-slate-800 group-hover:border-slate-700 px-3 py-1 rounded-full transition-colors"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Bottom border */}
                <div className="border-t border-slate-800" />
            </div>
        </section>
    );
}
