"use client";

import Link from "next/link";
import BeforeAfter from "./BeforeAfter";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
  showBeforeAfter?: boolean;
  titleClassName?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "View Presets",
  ctaLink = "/products",
  backgroundImage,
  fullHeight = true,
  showBeforeAfter = false,
  titleClassName = "heading-1",
}: HeroProps) {
  return (
    <section
      className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[80vh]'} flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-50`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className={`${showBeforeAfter ? 'lg:pr-8' : 'text-center lg:text-left mx-auto max-w-3xl'}`}>
            <h1
              className= {`${titleClassName} mb-6 text-neutral-950 animate-fade-in`}
              style={{ animationDelay: '0.1s' }}
            >
              {title}
            </h1>
            <p
              className="text-body text-neutral-600 mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {subtitle}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Link href={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
              <Link href="#transformation" className="btn-secondary">
                See Before & After
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-12 flex flex-wrap gap-8 items-center text-sm text-neutral-600 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">5.0</span>
                <span>(2,000+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">15,000+</span>
                <span>Happy Photographers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Before/After Slider (if enabled) */}
          {showBeforeAfter && (
            <div
              className="animate-fade-in-scale"
              style={{ animationDelay: '0.2s' }}
            >
              <BeforeAfter
                beforeImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                afterImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&sat=20"
                alt="Professional preset transformation"
              />
              <p className="text-center text-sm text-neutral-500 mt-4">
                Drag the slider to see the transformation
              </p>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        {fullHeight && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-neutral-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
