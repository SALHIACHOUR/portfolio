"use client";

import { motion } from "framer-motion";
import { getTranslations } from "@/data/translations";
import type { Locale } from "@/data/translations";

const statsConfig = [
    { value: "4+", labelKey: "statYears" as const },
    { value: "3", labelKey: "statCompanies" as const },
    { value: "10+", labelKey: "statTech" as const },
    { value: "2", labelKey: "statProjects" as const },
];

export default function Stats({ lang }: { lang: Locale }) {
    const { ui } = getTranslations(lang);
    return (
        <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden"
            >
                {statsConfig.map((s, i) => (
                    <motion.div
                        key={s.labelKey}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="bg-slate-950 px-8 py-10 flex flex-col gap-2 hover:bg-slate-900 transition-colors"
                    >
                        <span className="text-5xl font-bold text-white">{s.value}</span>
                        <span className="text-slate-500 text-sm">{ui[s.labelKey]}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
