export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];

export const defaultLocale: Locale = "en";

export type PortfolioData = {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
    skills: { category: string; color: string; items: string[] }[];
    experiences: {
        title: string;
        company: string;
        period: string;
        location: string;
        current: boolean;
        description: string[];
        tech: string[];
    }[];
    projects: {
        name: string;
        type: string;
        period: string;
        description: string;
        tech: string[];
    }[];
    education: {
        degree: string;
        school: string;
        period: string;
        location: string;
    }[];
    certifications: string[];
    languages: { lang: string; level: string }[];
};

export type UIStrings = {
    navWork: string;
    navAbout: string;
    navContact: string;
    navHireMe: string;
    heroTagline: string;
    heroOpenToWork: string;
    heroHeadline: string[];
    heroSubline: string;
    heroSublineLocation: string;
    heroSeeProjects: string;
    heroContactMe: string;
    heroScroll: string;
    statYears: string;
    statCompanies: string;
    statTech: string;
    statProjects: string;
    sectionProjects: string;
    sectionExperience: string;
    sectionSkills: string;
    sectionEducation: string;
    sectionCertifications: string;
    sectionLanguages: string;
    sectionContact: string;
    contactHeadline: string;
    contactSubline: string;
    contactFooter: string;
};

export const translations: Record<Locale, { portfolio: PortfolioData; ui: UIStrings }> = {
    fr: {
        portfolio: {
            name: "Achour Salhi",
            title: "Senior Java Software & Cloud Engineer",
            summary:
                "Développeur Backend avec 4+ ans d'expérience en Java (Spring Boot) et API REST. Spécialisé en microservices, clean code, tests unitaires et CI/CD. Expérience confirmée en approche API-First, documentation Swagger et bonnes pratiques de développement.",
            email: "salhiachour98@gmail.com",
            phone: "+212 762 185558",
            linkedin: "https://linkedin.com/in/achour-salhi",
            github: "https://github.com/SALHIACHOUR",
            location: "Casablanca, Maroc",

            skills: [
                { category: "Backend", color: "blue", items: ["Spring Boot 2.x–3.x", "Hibernate", "REST APIs", "JUnit", "Maven", "Swagger", "Postman", "FCM"] },
                { category: "Frontend", color: "purple", items: ["Angular 11–17", "Next.js", "TypeScript", "Angular Material", "Bootstrap"] },
                { category: "DevOps & Cloud", color: "green", items: ["Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", "ArgoCD", "AWS", "GCP", "Minio"] },
                { category: "Observabilité", color: "orange", items: ["Grafana", "Prometheus", "Spring Cloud"] },
                { category: "Langages", color: "red", items: ["Java", "Python", "TypeScript", "JavaScript", "C#"] },
                { category: "Outils", color: "yellow", items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Notion", "Confluence"] },
            ],

            experiences: [
                {
                    title: "Consultant Technologie Java/Spring-boot",
                    company: "Niji Maroc",
                    period: "09/2025 – Présent",
                    location: "Casablanca",
                    current: true,
                    description: [
                        "Conception et architecture d'APIs REST et microservices Spring Boot",
                        "Industrialisation et optimisation des pipelines CI/CD",
                        "Analyse, résolution et prévention des incidents de production",
                        "Accompagnement des équipes sur les choix d'architecture et de performance",
                    ],
                    tech: ["Java 17+", "Spring Boot 3/4", "Spring Cloud", "Docker", "ArgoCD", "AWS", "GitHub Actions"],
                },
                {
                    title: "Ingénieur Étude et Développement",
                    company: "ATOZ SERVICES SA",
                    period: "05/2023 – 09/2025",
                    location: "Casablanca",
                    current: false,
                    description: [
                        "Conception et développement d'APIs REST sécurisées pour l'application IVO (Spring Boot v3.x)",
                        "Mise en place de tests unitaires (JUnit) et documentation via Swagger",
                        "Intégration continue avec Maven et Bitbucket CI/CD",
                        "Développement de microservices backend pour la plateforme Buckle (gestion documentaire, signature électronique, CRM)",
                    ],
                    tech: ["Spring Boot 3.x", "Angular", "Hibernate", "PostgreSQL", "Maven", "JUnit", "Bitbucket"],
                },
                {
                    title: "Ingénieur Développeur",
                    company: "KAPISOFT CONSULTING",
                    period: "09/2021 – 05/2023",
                    location: "Casablanca",
                    current: false,
                    description: [
                        "Développement backend Spring Boot pour la synchronisation temps réel entre SAP Business One, Odoo et e-commerce",
                        "Conception d'APIs REST pour la gestion des stocks et analytics de ventes",
                        "Participation aux revues de code et mise en place de bonnes pratiques",
                    ],
                    tech: ["Spring Boot 2.x", "Angular", "TypeScript", "SQL Server", "REST API", "ASP.NET", "SAP B1"],
                },
            ],

            projects: [
                {
                    name: "Application Artisan–Client",
                    type: "Projet Personnel",
                    period: "07/2023 – 06/2024",
                    description:
                        "Application Web-Mobile de mise en relation Artisan–Client avec monitoring temps réel et CI/CD automatisé.",
                    tech: ["Spring Boot", "Jenkins", "Grafana", "Prometheus", "PostgreSQL", "FCM", "Cloudflare", "Minio"],
                },
                {
                    name: "Plateforme Pièces Automobiles",
                    type: "Freelance",
                    period: "11/2023 – 04/2024",
                    description:
                        "Plateforme de vente de pièces automobiles avec microservices backend et gestion de fichiers cloud.",
                    tech: ["Spring Boot", "AWS S3", "GitLab CI/CD", "PostgreSQL"],
                },
            ],

            education: [
                {
                    degree: "Ingénieur en Informatique",
                    school: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
                    period: "09/2018 – 06/2021",
                    location: "Rabat, Maroc",
                },
                {
                    degree: "Classes Préparatoires aux Grandes Écoles - Option MP",
                    school: "Lycée Ibn Timiya",
                    period: "09/2016 – 06/2018",
                    location: "Marrakech, Maroc",
                },
            ],

            certifications: [
                "Building Web Applications with Java Spring Boot",
                "Intelligence Artificielle & IA Générative",
                "Big Data Engineer - Mastery Award 2021",
            ],

            languages: [
                { lang: "Arabe", level: "Langue maternelle" },
                { lang: "Français", level: "Courant" },
                { lang: "Anglais", level: "Technique courant" },
            ],
        },
        ui: {
            navWork: "Projets",
            navAbout: "Expérience",
            navContact: "Contact",
            navHireMe: "Me contacter",
            heroTagline: "Senior Java & Cloud Engineer",
            heroOpenToWork: "Disponible",
            heroHeadline: ["Je", "conçois", "des", "systèmes", "backend", "qui", "scale."],
            heroSubline: "Java · Spring Boot · Microservices · Cloud · CI/CD",
            heroSublineLocation: "4+ ans d'expérience en production — Casablanca, Maroc",
            heroSeeProjects: "Voir mes projets",
            heroContactMe: "Me contacter",
            heroScroll: "défiler ↓",
            statYears: "Années d'expérience",
            statCompanies: "Entreprises",
            statTech: "Technologies maîtrisées",
            statProjects: "Projets freelance livrés",
            sectionProjects: "Projets sélectionnés",
            sectionExperience: "Expérience professionnelle",
            sectionSkills: "Stack technique",
            sectionEducation: "Formation",
            sectionCertifications: "Certifications",
            sectionLanguages: "Langues",
            sectionContact: "Contact",
            contactHeadline: "Vous avez un projet ?",
            contactSubline: "Travaillons ensemble.",
            contactFooter: "© {year} — Construit avec Next.js & Tailwind CSS",
        },
    },
    en: {
        portfolio: {
            name: "Achour Salhi",
            title: "Senior Java Software & Cloud Engineer",
            summary:
                "Backend Developer with 4+ years of experience in Java (Spring Boot) and REST APIs. Specialized in microservices, clean code, unit testing, and CI/CD. Proven experience with API-First approach, Swagger documentation, and development best practices.",
            email: "salhiachour98@gmail.com",
            phone: "+212 762 185558",
            linkedin: "https://linkedin.com/in/achour-salhi",
            github: "https://github.com/SALHIACHOUR",
            location: "Casablanca, Morocco",

            skills: [
                { category: "Backend", color: "blue", items: ["Spring Boot 2.x–3.x", "Hibernate", "REST APIs", "JUnit", "Maven", "Swagger", "Postman", "FCM"] },
                { category: "Frontend", color: "purple", items: ["Angular 11–17", "Next.js", "TypeScript", "Angular Material", "Bootstrap"] },
                { category: "DevOps & Cloud", color: "green", items: ["Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", "ArgoCD", "AWS", "GCP", "Minio"] },
                { category: "Observability", color: "orange", items: ["Grafana", "Prometheus", "Spring Cloud"] },
                { category: "Languages", color: "red", items: ["Java", "Python", "TypeScript", "JavaScript", "C#"] },
                { category: "Tools", color: "yellow", items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Notion", "Confluence"] },
            ],

            experiences: [
                {
                    title: "Java/Spring Boot Technology Consultant",
                    company: "Niji Maroc",
                    period: "09/2025 – Present",
                    location: "Casablanca",
                    current: true,
                    description: [
                        "Design and architecture of REST APIs and Spring Boot microservices",
                        "Industrialization and optimization of CI/CD pipelines",
                        "Analysis, resolution and prevention of production incidents",
                        "Supporting teams on architecture and performance decisions",
                    ],
                    tech: ["Java 17+", "Spring Boot 3/4", "Spring Cloud", "Docker", "ArgoCD", "AWS", "GitHub Actions"],
                },
                {
                    title: "R&D Engineer",
                    company: "ATOZ SERVICES SA",
                    period: "05/2023 – 09/2025",
                    location: "Casablanca",
                    current: false,
                    description: [
                        "Design and development of secure REST APIs for the IVO application (Spring Boot v3.x)",
                        "Implementation of unit tests (JUnit) and documentation via Swagger",
                        "Continuous integration with Maven and Bitbucket CI/CD",
                        "Backend microservices development for the Buckle platform (document management, e-signature, CRM)",
                    ],
                    tech: ["Spring Boot 3.x", "Angular", "Hibernate", "PostgreSQL", "Maven", "JUnit", "Bitbucket"],
                },
                {
                    title: "Software Engineer",
                    company: "KAPISOFT CONSULTING",
                    period: "09/2021 – 05/2023",
                    location: "Casablanca",
                    current: false,
                    description: [
                        "Spring Boot backend development for real-time sync between SAP Business One, Odoo and e-commerce",
                        "Design of REST APIs for stock management and sales analytics",
                        "Code reviews and implementation of best practices",
                    ],
                    tech: ["Spring Boot 2.x", "Angular", "TypeScript", "SQL Server", "REST API", "ASP.NET", "SAP B1"],
                },
            ],

            projects: [
                {
                    name: "Artisan–Client Application",
                    type: "Personal Project",
                    period: "07/2023 – 06/2024",
                    description:
                        "Web-Mobile application connecting Artisans and Clients with real-time monitoring and automated CI/CD.",
                    tech: ["Spring Boot", "Jenkins", "Grafana", "Prometheus", "PostgreSQL", "FCM", "Cloudflare", "Minio"],
                },
                {
                    name: "Auto Parts Platform",
                    type: "Freelance",
                    period: "11/2023 – 04/2024",
                    description:
                        "Auto parts marketplace with microservices backend and cloud file management.",
                    tech: ["Spring Boot", "AWS S3", "GitLab CI/CD", "PostgreSQL"],
                },
            ],

            education: [
                {
                    degree: "Computer Engineering Degree",
                    school: "ENSIAS - National School of Computer Science and Systems Analysis",
                    period: "09/2018 – 06/2021",
                    location: "Rabat, Morocco",
                },
                {
                    degree: "Preparatory Classes for Engineering Schools - MP Option",
                    school: "Lycée Ibn Timiya",
                    period: "09/2016 – 06/2018",
                    location: "Marrakech, Morocco",
                },
            ],

            certifications: [
                "Building Web Applications with Java Spring Boot",
                "Artificial Intelligence & Generative AI",
                "Big Data Engineer - Mastery Award 2021",
            ],

            languages: [
                { lang: "Arabic", level: "Native" },
                { lang: "French", level: "Fluent" },
                { lang: "English", level: "Technical fluent" },
            ],
        },
        ui: {
            navWork: "Projects",
            navAbout: "Experience",
            navContact: "Contact",
            navHireMe: "Hire me",
            heroTagline: "Senior Java & Cloud Engineer",
            heroOpenToWork: "Open to work",
            heroHeadline: ["I", "build", "backend", "systems", "that", "scale."],
            heroSubline: "Java · Spring Boot · Microservices · Cloud · CI/CD",
            heroSublineLocation: "4+ years in production — Casablanca, Morocco",
            heroSeeProjects: "View my projects",
            heroContactMe: "Contact me",
            heroScroll: "scroll ↓",
            statYears: "Years of experience",
            statCompanies: "Companies",
            statTech: "Technologies mastered",
            statProjects: "Freelance projects delivered",
            sectionProjects: "Selected projects",
            sectionExperience: "Professional experience",
            sectionSkills: "Tech stack",
            sectionEducation: "Education",
            sectionCertifications: "Certifications",
            sectionLanguages: "Languages",
            sectionContact: "Contact",
            contactHeadline: "Have a project?",
            contactSubline: "Let's work together.",
            contactFooter: "© {year} — Built with Next.js & Tailwind CSS",
        },
    },
};

export function getTranslations(locale: Locale) {
    return translations[locale] ?? translations[defaultLocale];
}
