"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    const { name, title, summary, email, linkedin, github, location } = portfolioData;

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-2 rounded-full mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Disponible pour de nouvelles opportunités
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white">{name.split(" ")[0]} </span>
                        <span className="text-blue-400">{name.split(" ")[1]}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6">{title}</p>
                    <p className="text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed">{summary}</p>

                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10">
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
                        >
                            <Github size={18} /> GitHub
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-xl font-medium transition-all"
                        >
                            <Mail size={18} /> Email
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 text-slate-600 animate-bounce text-2xl"
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
}
