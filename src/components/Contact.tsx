"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    const { email, phone, linkedin, github } = portfolioData;

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
                    <div className="w-12 h-1 bg-blue-500 rounded mb-6 mx-auto" />
                    <p className="text-slate-400 mb-10">
                        Disponible pour des missions freelance ou des opportunités full-time. N'hésitez pas à me contacter !
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group"
                        >
                            <Mail size={20} className="text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs text-slate-500">Email</p>
                                <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors">{email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${phone}`}
                            className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group"
                        >
                            <Phone size={20} className="text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs text-slate-500">Téléphone</p>
                                <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors">{phone}</p>
                            </div>
                        </a>

                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group"
                        >
                            <Linkedin size={20} className="text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs text-slate-500">LinkedIn</p>
                                <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors">achour-salhi</p>
                            </div>
                        </a>

                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group"
                        >
                            <Github size={20} className="text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs text-slate-500">GitHub</p>
                                <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors">SALHIACHOUR</p>
                            </div>
                        </a>
                    </div>

                    <p className="text-slate-600 text-sm">
                        © 2026 Achour Salhi — Built with Next.js & Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
