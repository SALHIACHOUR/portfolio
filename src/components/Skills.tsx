"use client";

import { motion } from "framer-motion";
import { getTranslations } from "@/data/translations";
import type { Locale } from "@/data/translations";

const colorMap: Record<string, string> = {
    blue:   "text-blue-400 border-blue-500/20 bg-blue-500/5",
    purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    green:  "text-green-400 border-green-500/20 bg-green-500/5",
    orange: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    red:    "text-red-400 border-red-500/20 bg-red-500/5",
    yellow: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
};

export default function Skills({ lang }: { lang: Locale }) {
    const { portfolio, ui } = getTranslations(lang);
    return (
        <section id="skills" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-500 text-sm tracking-widest uppercase font-medium mb-4"
            >
                {ui.sectionSkills}
            </motion.h2>

            {/* Skills grid rows */}
            <div>
                {portfolio.skills.map((group, i) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="border-t border-slate-800 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 group hover:border-slate-700 transition-colors"
                    >
                        {/* Category label */}
                        <span className="text-slate-600 text-xs uppercase tracking-widest font-medium w-32 shrink-0 group-hover:text-slate-400 transition-colors">
              {group.category}
            </span>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className={`text-xs px-3 py-1.5 rounded-full border ${colorMap[group.color]} transition-all hover:scale-105`}
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
                <div className="border-t border-slate-800" />
            </div>
        </section>
    );
}
