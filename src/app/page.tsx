import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Projects />
                <Experience />
                <Skills />
                <Education />
                <Contact />
            </main>
        </>
    );
}
