import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import HtmlLang from "@/components/HtmlLang";
import { locales, defaultLocale, getTranslations } from "@/data/translations";
import type { Locale } from "@/data/translations";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = lang === "fr" || lang === "en" ? (lang as Locale) : defaultLocale;
    const { portfolio } = getTranslations(locale);

    const descriptions: Record<Locale, string> = {
        fr: `Portfolio de ${portfolio.name}, Senior Java Software & Cloud Engineer spécialisé en Spring Boot, microservices et CI/CD.`,
        en: `${portfolio.name}'s portfolio - Senior Java Software & Cloud Engineer specialized in Spring Boot, microservices and CI/CD.`,
    };

    return {
        title: `${portfolio.name} - ${portfolio.title}`,
        description: descriptions[locale],
        keywords: ["Java", "Spring Boot", "Microservices", "Cloud", "Backend Engineer"],
        alternates: {
            languages: {
                fr: "/fr",
                en: "/en",
            },
        },
    };
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (lang !== "fr" && lang !== "en") {
        notFound();
    }

    return (
        <LocaleProvider locale={lang}>
            <HtmlLang lang={lang} />
            {children}
        </LocaleProvider>
    );
}
