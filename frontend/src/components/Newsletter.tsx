"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-6">Stay Inspired</h2>
          <p className="text-body text-neutral-300 mb-10">
            Subscribe to our newsletter for exclusive preset releases, photography tips, and special offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full bg-white text-neutral-950 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-neutral-500 shadow-lg"
            />
            <button type="submit" className="btn-primary whitespace-nowrap bg-primary-600 hover:bg-primary-700">
              Subscribe
            </button>
          </form>

          {status === "success" && (
            <p className="mt-6 text-green-400 animate-fade-in font-semibold">
              Thanks for subscribing! Check your inbox for a welcome gift.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
