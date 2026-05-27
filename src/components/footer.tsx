"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border/50 py-8 md:py-12">
      <div className="container-safe">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <p className="text-sm text-dark-muted">
            © {currentYear} Haaris. All rights reserved.
          </p>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#portfolio"
              className="text-dark-muted hover:text-accent-cyan transition-colors"
            >
              Portfolio
            </a>
            <span className="text-dark-border">•</span>
            <a
              href="#about"
              className="text-dark-muted hover:text-accent-cyan transition-colors"
            >
              About
            </a>
            <span className="text-dark-border">•</span>
            <a
              href="#contact"
              className="text-dark-muted hover:text-accent-cyan transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right: Design Credit */}
          <p className="text-sm text-dark-muted">
            Designed with <span className="text-accent-cyan">precision</span> &{" "}
            <span className="text-accent-cyan">care</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
