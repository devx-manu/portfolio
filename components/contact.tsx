"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export function Contact() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: "GitHub", url: "#" },
    { icon: "LinkedIn", url: "#" },
    { icon: "Twitter", url: "#" },
    { icon: "Email", url: "mailto:hello@example.com" },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 text-center mb-12 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            animation: isInView ? "slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Feel free to reach out and let's create something amazing
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{
              animation: isInView ? "slideLeftFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both" : "none",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-none text-foreground"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{
              animation: isInView ? "slideRightFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both" : "none",
            }}
          >
            <div className="space-y-6">
              <div className="glass rounded-xl p-8">
                <p className="text-muted-foreground mb-6">You can also find me on these platforms:</p>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.icon}
                      href={link.url}
                      className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors" />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.icon}
                      </span>
                      <svg
                        className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="font-bold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground mb-4">hello@example.com</p>
                <p className="text-sm text-muted-foreground">I typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
