"use client";

import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

export default function AboutSection() {
  // EDIT THIS SECTION: Update with your actual skills and bio
  // Icons sourced from https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
  const skills: Record<string, Skill[]> = {
    Frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: ".NET",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
    ],
    Databases: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MSSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-safe">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent-cyan font-semibold uppercase tracking-wider text-sm mb-2">
            About
          </p>
          <h2>About Me</h2>
        </div>

        {/* Biography + Stats Row */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column: Biography */}
          <div className="flex flex-col justify-center">
            <p className="text-dark-muted leading-relaxed mb-6">
              Hello! {"I'm"} Haaris, a full-stack developer with a passion for
              building seamless digital experiences. My journey in tech started
              with a curiosity about how things work, which evolved into a deep
              expertise in modern web technologies.
            </p>

            <p className="text-dark-muted leading-relaxed mb-6">
              I bridge the gap between dynamic startup environments and
              enterprise-scale systems, bringing the agility of the former and
              the robustness of the latter. My experience spans from
              architecting complex backend infrastructure with PostgreSQL and
              MSSQL to crafting responsive, pixel-perfect frontends.
            </p>

            <p className="text-dark-muted leading-relaxed">
              When {"I'm"} not coding, you{"'"}ll find me exploring emerging
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community. {"I'm"} always excited
              about collaborating on projects that push the boundaries of{" "}
              {"what's"}
              possible on the web.
            </p>
          </div>

          {/* Right Column: Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-dark-surface/40 border border-dark-border">
                <p className="text-3xl font-bold text-accent-cyan mb-1">5+</p>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-dark-surface/40 border border-dark-border">
                <p className="text-3xl font-bold text-accent-cyan mb-1">20+</p>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-dark-surface/40 border border-dark-border">
                <p className="text-3xl font-bold text-accent-cyan mb-1">100%</p>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <p className="text-accent-cyan font-semibold uppercase tracking-wider text-sm mb-2">
            Skills
          </p>
          <h3 className="text-2xl font-bold text-dark-text mb-10">
            Tech Stack
          </h3>
        </div>

        {/* 3-Column Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl bg-dark-surface/30 border border-dark-border p-6 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border/50">
                <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,224,255,0.6)]" />
                <h4 className="text-base font-semibold text-accent-cyan tracking-wide">
                  {category}
                </h4>
              </div>

              {/* Skills Grid — 3 columns for even distribution */}
              <div className="grid grid-cols-3 gap-3">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2.5 p-3 rounded-xl bg-dark-bg/40 border border-transparent hover:border-accent-cyan/30 hover:bg-dark-surface/60 hover:shadow-[0_0_20px_rgba(0,224,255,0.08)] transition-all duration-300 cursor-default"
                  >
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,224,255,0.25)]"
                        unoptimized
                      />
                    </div>
                    <p className="text-xs font-medium text-dark-muted group-hover:text-dark-text transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
