import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Code2, CheckCircle2, Users, Search, GraduationCap } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024 – Present",
      title: "Freelance Full-Stack Web Developer",
      subtitle: "Self-Employed / Independent Contractor",
      description:
        "Architecting and delivering responsive, high-performance web applications and custom digital solutions for clients. Utilizing modern stacks including React, TypeScript, Node.js, and Tailwind CSS to create clean codebases, scalable architectures, and seamless user experiences.",
      icon: <Code2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Ads Quality Rater",
      subtitle: "Welo Data",
      description:
        "Evaluating and rating digital advertisements based on user intent alignment, visual aesthetics, and strict quality guidelines. Providing granular data analysis and feedback to help refine AI-driven advertising algorithms and elevate web relevance.",
      icon: <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Islamic Religious Counselor",
      subtitle: "Kantor Urusan Agama (KUA) Kec. Tebing Tinggi",
      description:
        "Providing dedicated guidance, socio-religious counseling, and educational advisory to the community. Facilitating family welfare, moral development initiatives, and community harmony through structured consultation and outreach programs.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2022 – 2024",
      title: "Personal Internet Ads Assessor",
      subtitle: "Telus International",
      description:
        "Conducted in-depth evaluation of search engine advertising, web content relevance, and market-specific user search patterns. Applied rigorous evaluation rubrics to ensure advertisement authenticity and enhance machine learning model training datasets.",
      icon: <Search className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2019 – 2025",
      title: "Arabic Language Teacher",
      subtitle: "MTs Al-Hidayatul Islamiyah Kuala Tungkal",
      description:
        "Designed and instructed comprehensive Arabic language and grammar (Nahwu & Sharaf) curricula for junior high school students for 6 years. Created engaging learning frameworks, evaluated linguistic competencies, and fostered academic excellence and character building.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="A versatile journey spanning software engineering, data evaluation, counseling, and education"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
