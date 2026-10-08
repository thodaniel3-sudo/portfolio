export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  details?: string;
  liveUrl?: string;
  githubUrl?: string;
  visual: "lattice" | "network" | "materials" | "analysis";
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielthomas.dev";

export const portfolio = {
  name: "Daniel Thomas",
  title: "Materials & Metallurgical Engineer",
  tagline: "Building at the Intersection of Materials Science, AI & Software",
  metaDescription:
    "Portfolio of Daniel Thomas, a Materials and Metallurgical Engineering graduate interested in materials informatics, computational materials science, machine learning, sustainable materials, and software development.",
  about:
    "I am a Materials and Metallurgical Engineering graduate from the Federal University of Technology, Minna, with a growing focus on the intersection of materials science, computational methods, artificial intelligence, and software development.",
  intro:
    "I am a Materials and Metallurgical Engineering graduate with interests in materials informatics, computational materials science, machine learning, sustainable materials, and software development.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  contact: {
    email: "",
    linkedin: "",
    github: "",
  },
  skills: [
    {
      title: "Materials Engineering",
      items: [
        "Materials Science",
        "Metallurgical Engineering",
        "Composite Materials",
        "Materials Characterization",
        "Materials Selection",
        "Sustainable Materials",
        "Materials Processing",
      ],
    },
    {
      title: "Materials Informatics & Computational Materials",
      items: [
        "Materials Informatics",
        "Computational Materials Science",
        "Materials Property Prediction",
        "Data-driven Materials Analysis",
        "Rule-of-Mixtures Analysis",
        "Machine Learning for Materials",
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Artificial Intelligence",
        "Random Forest",
        "Predictive Modeling",
        "Data Analysis",
      ],
    },
    {
      title: "Software Development",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Flask",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "Supabase", "Vercel", "Render", "VS Code"],
    },
  ] as SkillGroup[],
  projects: [
    {
      number: "01",
      title: "University Finder",
      shortDescription:
        "A web-based university discovery platform designed to help users find universities, programmes, scholarships, and related academic opportunities using multiple information sources.",
      description:
        "A web-based university discovery platform designed to help users find universities, programmes, scholarships, and related academic opportunities using multiple information sources.",
      category: "Web Application",
      technologies: ["Python", "Flask", "Supabase", "JavaScript", "APIs", "Vercel", "Render"],
      details:
        "This project explores aggregation of university information from multiple sources to make academic discovery more structured and useful for prospective students.",
      liveUrl: "https://university-finder.me",
      githubUrl: "",
      visual: "network",
    },
    {
      number: "02",
      title: "Hybrid Composite Prediction System",
      shortDescription:
        "A Python-based engineering analysis and prediction application for studying hybrid composite formulations and predicting material properties using machine learning.",
      description:
        "A Python-based engineering analysis and prediction application for studying hybrid composite formulations and predicting material properties using machine learning.",
      category: "Engineering Tool",
      technologies: ["Python", "Tkinter", "Random Forest", "Multi-output machine learning", "Data analysis"],
      details:
        "The system works with material properties including Density, Flexural Strength, Flexural Modulus, Compressive Strength, and Impact Strength.",
      visual: "analysis",
    },
    {
      number: "03",
      title: "Eco-Friendly Epoxy Hybrid Composite for Automotive Application",
      shortDescription:
        "This research project investigates an epoxy-based hybrid composite reinforced with bio-waste-derived materials for potential automotive applications.",
      description:
        "This research project investigates an epoxy-based hybrid composite reinforced with bio-waste-derived materials for potential automotive applications.",
      category: "Research Project",
      technologies: ["Materials Engineering", "Sustainable Materials", "Composite Materials"],
      details:
        "The project focuses on the sustainability motivation behind using bio-waste-derived reinforcement materials within composite systems for automotive-oriented applications.",
      visual: "materials",
    },
    {
      number: "04",
      title: "Materials Informatics Program",
      shortDescription:
        "A materials informatics program developed to calculate or predict material properties using computational and data-driven approaches.",
      description:
        "A materials informatics program developed to calculate or predict material properties using computational and data-driven approaches.",
      category: "Data & Modeling",
      technologies: ["Python", "Materials Informatics", "Machine Learning", "Data Analysis"],
      details:
        "The work is centered on applying computational and data-driven methods to understand and predict materials behavior.",
      visual: "lattice",
    },
  ] as Project[],
  researchInterests: [
    "Materials Informatics",
    "Computational Materials Science",
    "Machine Learning for Materials",
    "Sustainable Materials",
    "Composite Materials",
    "Materials Characterization",
    "Materials Property Prediction",
    "Automotive Materials",
    "Data-driven Engineering",
  ],
  education: [
    {
      degree: "B.Eng. Materials and Metallurgical Engineering",
      institution: "Federal University of Technology, Minna, Nigeria",
      year: "2026",
      gpa: "4.33 / 5.00",
      focus: [
        "Materials Science",
        "Metallurgical Engineering",
        "Composite Materials",
        "Materials Characterization",
        "Materials Informatics",
        "Engineering Materials",
      ],
    },
  ],
  experienceNote:
    "Professional experience and additional technical engagements will be added as they are finalized.",
  contactMessage:
    "I am open to opportunities involving materials engineering, materials informatics, computational materials science, AI, software development, research, and technical collaboration.",
};
