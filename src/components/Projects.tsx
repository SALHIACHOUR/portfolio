"use client";
import { motion } from "framer-motion";
import { FolderCode, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Projets</h2>
                    <div className="w-12 h-1 bg-blue-500 rounded mb-12" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <FolderCode
                                    size={36}
                                    className="text-blue-400 group-hover:text-blue-300 transition-colors"
                                />
                                <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                  {project.type}
                </span>
                            </div>

                            <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>

                            <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                                <Calendar size={12} /> {project.period}
                            </div>

                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md">
                    {t}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
