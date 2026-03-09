"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Left — Formation */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm tracking-widest uppercase font-medium mb-4"
                    >
                        Formation
                    </motion.h2>

                    {portfolioData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-t border-slate-800 py-8 hover:border-slate-700 transition-colors group"
                        >
                            <p className="text-slate-600 text-xs font-mono mb-3">{edu.period}</p>
                            <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-slate-500 text-sm mt-1">{edu.school}</p>
                            <p className="text-slate-700 text-xs mt-1">{edu.location}</p>
                        </motion.div>
                    ))}
                    <div className="border-t border-slate-800" />
                </div>

                {/* Right — Certifications + Languages */}
                <div>
                    {/* Certifications */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm tracking-widest uppercase font-medium mb-4"
                    >
                        Certifications
                    </motion.h2>

                    {portfolioData.certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="border-t border-slate-800 py-5 flex items-center gap-4 group hover:border-slate-700 transition-colors"
                        >
              <span className="text-slate-700 font-mono text-xs shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
                            <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                {cert}
              </span>
                        </motion.div>
                    ))}
                    <div className="border-t border-slate-800 mb-12" />

                    {/* Languages */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm tracking-widest uppercase font-medium mb-4"
                    >
                        Langues
                    </motion.h2>

                    {portfolioData.languages.map((l, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="border-t border-slate-800 py-5 flex items-center justify-between group hover:border-slate-700 transition-colors"
                        >
                            <span className="text-white font-medium text-sm">{l.lang}</span>
                            <span className="text-slate-600 text-xs">{l.level}</span>
                        </motion.div>
                    ))}
                    <div className="border-t border-slate-800" />
                </div>
            </div>
        </section>
    );
}
