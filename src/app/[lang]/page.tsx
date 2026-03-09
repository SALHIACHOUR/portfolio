import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default async function LangPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <>
            <Navbar lang={lang as "fr" | "en"} />
            <main>
                <Hero lang={lang as "fr" | "en"} />
                <Stats lang={lang as "fr" | "en"} />
                <Projects lang={lang as "fr" | "en"} />
                <Experience lang={lang as "fr" | "en"} />
                <Skills lang={lang as "fr" | "en"} />
                <Education lang={lang as "fr" | "en"} />
                <Contact lang={lang as "fr" | "en"} />
            </main>
        </>
    );
}
