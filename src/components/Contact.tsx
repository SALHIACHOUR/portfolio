"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    const { email, phone, linkedin, github, name } = portfolioData;

    return (
        <section id="contact" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
            {/* Big CTA headline */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-t border-slate-800 pt-16 pb-20"
            >
                <p className="text-slate-500 text-sm tracking-widest uppercase font-medium mb-8">
                    Contact
                </p>

                <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold text-white leading-tight mb-10 max-w-4xl">
                    Vous avez un projet ?<br />
                    <span className="text-blue-400">Travaillons ensemble.</span>
                </h2>

                <a
                    href={`mailto:${email}`}
                    className="group inline-flex items-center gap-3 bg-white text-slate-950 font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-400 transition-all duration-300"
                >
                    {email}
                    <ArrowUpRight
                        size={20}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </a>
            </motion.div>

            {/* Footer bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
                {/* Name + copyright */}
                <div>
                    <p className="text-white font-semibold">{name}</p>
                    <p className="text-slate-600 text-sm mt-1">
                        © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
                    </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-6">
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors"
                    >
                        <Mail size={14} /> Email
                    </a>
                    <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors"
                    >
                        <Phone size={14} /> Téléphone
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 text-sm transition-colors"
                    >
                        <Linkedin size={14} /> LinkedIn
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 text-sm transition-colors"
                    >
                        <Github size={14} /> GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
