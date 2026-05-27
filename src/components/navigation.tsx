"use client";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-dark-border/50">
      <div className="container-safe">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight hover:text-accent-cyan"
          >
            Haaris
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#portfolio"
              className="text-dark-muted hover:text-dark-text transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-dark-muted hover:text-dark-text transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-dark-muted hover:text-dark-text transition-colors"
            >
              Contact
            </a>
            <a href="#contact" className="btn-primary text-sm">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-dark-surface rounded-lg transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
