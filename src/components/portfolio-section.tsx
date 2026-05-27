"use client";

import Image from "next/image";

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export default function PortfolioSection() {
  // EDIT THIS SECTION: Update with your actual projects
  const projects: ProjectCard[] = [
    {
      id: "project-1",
      title: "Nexus Analytics Platform",
      description:
        "Real-time data processing dashboard with React and Node.js. Featuring complex data visualization and predictive modeling.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "project-2",
      title: "Aether Wallet",
      description:
        "Secure blockchain wallet application with advanced encryption. Mobile-first design with seamless UX for cryptocurrency management.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      tags: ["React Native", "Node.js", "AWS", "Web3"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "project-3",
      title: "Forge CMS",
      description:
        "Enterprise CMS designed for speed. Built with headless architecture and optimized content management workflow.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      tags: ["Next.js", "Python", "Django", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "project-4",
      title: "Sentinel Security Shield",
      description:
        "AI-powered network monitoring tool that uses machine learning to detect and mitigate security threats in real-time.",
      image:
        "https://images.unsplash.com/photo-1536697024847-8e3c96fc9b15?w=600&h=400&fit=crop",
      tags: ["Python", "FastAPI", "Machine Learning", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "project-5",
      title: "Flow Task Manager",
      description:
        "Collaborative task management platform with real-time synchronization. Built for teams that need seamless workflow integration.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "project-6",
      title: "Prism Analytics",
      description:
        "Business intelligence platform with custom dashboards. Integrates multiple data sources and provides actionable insights.",
      image:
        "https://images.unsplash.com/photo-1527014601251-7a6efbb5f42e?w=600&h=400&fit=crop",
      tags: [".NET", "SQL Server", "C#", "Blazor"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-surface/30">
      <div className="container-safe">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent-cyan font-semibold uppercase tracking-wider text-sm mb-2">
            Portfolio
          </p>
          <h2>Featured Projects</h2>
        </div>

        {/* Projects Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card-interactive group">
              {/* Project Image */}
              <div className="relative w-full h-48 md:h-56 bg-dark-bg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-40" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Title and Description */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 my-4 pt-4 border-t border-dark-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded border border-accent-cyan/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-dark-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-dark-muted hover:text-accent-cyan transition-colors text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Repository
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-dark-muted hover:text-accent-cyan transition-colors text-sm font-medium ml-auto"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
