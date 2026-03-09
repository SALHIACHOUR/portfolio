"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "4+", label: "Années d'expérience" },
    { value: "3", label: "Entreprises" },
    { value: "10+", label: "Technologies maîtrisées" },
    { value: "2", label: "Projets freelance livrés" },
];

export default function Stats() {
    return (
        <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden"
            >
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="bg-slate-950 px-8 py-10 flex flex-col gap-2 hover:bg-slate-900 transition-colors"
                    >
                        <span className="text-5xl font-bold text-white">{s.value}</span>
                        <span className="text-slate-500 text-sm">{s.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
