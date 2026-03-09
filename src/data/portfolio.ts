export const portfolioData = {
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
        {
            category: "Backend",
            color: "blue",
            items: ["Spring Boot 2.x–3.x", "Hibernate", "REST APIs", "JUnit", "Maven", "Swagger", "Postman", "FCM"],
        },
        {
            category: "Frontend",
            color: "purple",
            items: ["Angular 11–17", "Next.js", "TypeScript", "Angular Material", "Bootstrap"],
        },
        {
            category: "DevOps & Cloud",
            color: "green",
            items: ["Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", "ArgoCD", "AWS", "GCP", "Minio"],
        },
        {
            category: "Observabilité",
            color: "orange",
            items: ["Grafana", "Prometheus", "Spring Cloud"],
        },
        {
            category: "Langages",
            color: "red",
            items: ["Java", "Python", "TypeScript", "JavaScript", "C#"],
        },
        {
            category: "Outils",
            color: "yellow",
            items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Notion", "Confluence"],
        },
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
};
