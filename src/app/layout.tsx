import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Achour Salhi — Senior Java & Cloud Engineer",
    description:
        "Portfolio de Achour Salhi, Senior Java Software & Cloud Engineer spécialisé en Spring Boot, microservices et CI/CD.",
    keywords: ["Java", "Spring Boot", "Microservices", "Cloud", "Backend Engineer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className={`${geist.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
        </body>
        </html>
    );
}
