"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // EDIT THIS SECTION: Add your form submission logic (email service, backend API, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-dark-surface/30">
      <div className="container-safe">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-accent-cyan font-semibold uppercase tracking-wider text-sm mb-2">
            Contact
          </p>
          <h2>Get In Touch</h2>
          <p className="text-dark-muted text-lg mt-4">
            Have a project in mind or just want to chat? {"I'd"} love to hear
            from you. Feel free to reach out and {"let's"} create something
            amazing together.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm font-semibold text-dark-muted uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:haarisnursalim@gmail.com"
                className="text-lg text-accent-cyan hover:text-accent-hover transition-colors break-all"
              >
                haarisnursalim@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm font-semibold text-dark-muted uppercase tracking-wider mb-2">
                Phone
              </p>
              <a
                href="tel:+6289524331867"
                className="text-lg text-accent-cyan hover:text-accent-hover transition-colors"
              >
                +62 895-2433-1867
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-dark-muted uppercase tracking-wider mb-4">
                Follow
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yapusss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-cyan hover:text-accent-cyan transition-all group"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-haaris-nur-salim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-cyan hover:text-accent-cyan transition-all"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.421-.649 1.175-1.574 2.857-1.574 2.086 0 3.646 1.362 3.646 4.293v5.579zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.959-1.703 1.188 0 1.913.752 1.932 1.703 0 .946-.744 1.704-1.976 1.704zm1.946 11.019H3.39V9.806h3.893v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="pt-4 border-t border-dark-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <p className="text-sm text-dark-muted">
                  Available for freelance & full-time opportunities
                </p>
              </div>
              <p className="text-xs text-dark-muted">Response time: 24 hours</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-text mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-dark-text placeholder-dark-muted"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark-text mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-dark-text placeholder-dark-muted"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-text mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-dark-text placeholder-dark-muted resize-none"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary">
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-sm text-accent-cyan text-center">
                Thank you! {"I'll"} get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
