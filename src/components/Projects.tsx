"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-4"
            >
                <h2 className="text-slate-500 text-sm tracking-widest uppercase font-medium">
                    Projets sélectionnés
                </h2>
                <span className="text-slate-700 text-sm font-mono">
          {String(portfolioData.projects.length).padStart(2, "0")}
        </span>
            </motion.div>

            {/* Projects list */}
            <div>
                {portfolioData.projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group border-t border-slate-800 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                    >
                        {/* Left — number + title */}
                        <div className="flex items-start gap-8">
              <span className="text-slate-700 font-mono text-sm pt-2 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                                    {project.name}
                                    <ArrowUpRight
                                        size={20}
                                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-blue-400"
                                    />
                                </h3>
                                <p className="text-slate-600 text-sm mt-1">
                                    {project.period} &nbsp;·&nbsp;
                                    <span className="text-slate-500">{project.type}</span>
                                </p>
                                <p className="text-slate-500 text-sm mt-3 max-w-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        {/* Right — tech stack */}
                        <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end shrink-0 pl-16 md:pl-0">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs text-slate-500 border border-slate-800 group-hover:border-slate-700 px-3 py-1 rounded-full transition-colors"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Bottom border */}
                <div className="border-t border-slate-800" />
            </div>
        </section>
    );
}
