"use client";

export default function HeroSection() {
  return (
    <section className="relative section-padding pt-20 md:pt-32 overflow-hidden">
      <div className="container-safe">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="mb-6 animate-fade-in">
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-dark-muted mb-8 leading-relaxed max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Full-Stack Developer dedicated to building seamless,
            high-performance web applications that bridge the gap between
            technical complexity and user-centric design. Muhammad Haaris Nur
            Salim - 0920240033
          </p>

          {/* Feature Tags */}
          <div
            className="flex flex-wrap gap-3 mb-12 text-sm text-dark-muted animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="px-3 py-1 rounded-full border border-dark-border">
              JavaScript/TypeScript
            </span>
            <span className="px-3 py-1 rounded-full border border-dark-border">
              React • Next.js
            </span>
            <span className="px-3 py-1 rounded-full border border-dark-border">
              Python • Django
            </span>
            <span className="px-3 py-1 rounded-full border border-dark-border">
              .NET • C#
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#portfolio" className="btn-primary text-center">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary text-center">
              {"Let's"} Talk
            </a>
          </div>
        </div>

        {/* Decorative Element - Subtle gradient accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-cyan/5 to-accent-teal/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
