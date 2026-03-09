"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-slate-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Expérience</h2>
                    <div className="w-12 h-1 bg-blue-500 rounded mb-12" />
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />

                    <div className="space-y-10">
                        {portfolioData.experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative pl-16"
                            >
                                {/* Dot */}
                                <div
                                    className={`absolute left-4 top-1 w-4 h-4 rounded-full border-2 ${
                                        exp.current
                                            ? "bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/30"
                                            : "bg-slate-700 border-slate-600"
                                    }`}
                                />

                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                                            <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-blue-400 text-sm font-medium">
                          <Briefcase size={13} /> {exp.company}
                        </span>
                                                <span className="flex items-center gap-1 text-slate-500 text-sm">
                          <MapPin size={13} /> {exp.location}
                        </span>
                                            </div>
                                        </div>
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${
                                                exp.current
                                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                    : "bg-slate-800 text-slate-400"
                                            }`}
                                        >
                      {exp.period}
                    </span>
                                    </div>

                                    <ul className="space-y-1 mb-4">
                                        {exp.description.map((d, j) => (
                                            <li key={j} className="text-slate-400 text-sm flex gap-2">
                                                <span className="text-blue-500 mt-1">▸</span>
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
