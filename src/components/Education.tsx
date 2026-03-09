"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
    return (
        <section className="py-24 px-6 bg-slate-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Formation & Certifications</h2>
                    <div className="w-12 h-1 bg-blue-500 rounded mb-12" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                        <h3 className="text-slate-400 uppercase text-xs tracking-widest font-semibold mb-6 flex items-center gap-2">
                            <GraduationCap size={14} /> Formation
                        </h3>
                        <div className="space-y-4">
                            {portfolioData.education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900 border border-slate-800 rounded-xl p-4"
                                >
                                    <p className="text-white font-semibold">{edu.degree}</p>
                                    <p className="text-blue-400 text-sm mt-1">{edu.school}</p>
                                    <p className="text-slate-500 text-xs mt-1">
                                        {edu.period} · {edu.location}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-slate-400 uppercase text-xs tracking-widest font-semibold mb-6 flex items-center gap-2">
                            <Award size={14} /> Certifications
                        </h3>
                        <div className="space-y-3">
                            {portfolioData.certifications.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-slate-300 text-sm">{cert}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Languages */}
                        <h3 className="text-slate-400 uppercase text-xs tracking-widest font-semibold mt-8 mb-4">
                            Langues
                        </h3>
                        <div className="space-y-2">
                            {portfolioData.languages.map((l, i) => (
                                <div key={i} className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
                                    <span className="text-white text-sm font-medium">{l.lang}</span>
                                    <span className="text-slate-500 text-xs">{l.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
