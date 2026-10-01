"use client"
import { ArrowUpRight, Github, Twitter, Linkedin, PenLine, Send, ChartNoAxesColumn } from "lucide-react";
import Link from "next/link";
import { Hero2 } from "@/components/ui/hero-2-1";
import { SpotlightFeatures } from "@/components/ui/spotlight-features";
import { Component as PricingSection } from "@/components/ui/gradient-pricing";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import Footer from "@/components/ui/animated-footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { RevealLinks } from "@/components/ui/reveal-links";
import { AuroraBackdrop, GlyphRain } from "@/components/ui/aurora-backdrop";
import { instrumentSerif } from "@/lib/fonts";

const steps = [
  {
    icon: PenLine,
    title: "Create Interview",
    description: "Set up your job requirements and customize AI interview questions with our intuitive interface.",
    color: "#1e3a8a",
    dots: [[59, 130, 246], [99, 102, 241]],
  },
  {
    icon: Send,
    title: "Share with Candidates",
    description: "Send interview links to candidates to complete at their convenience with our AI voice agent.",
    color: "#14532d",
    dots: [[74, 222, 128], [34, 211, 238]],
  },
  {
    icon: ChartNoAxesColumn,
    title: "Review Results",
    description: "Get AI-analyzed results, detailed transcripts, and comprehensive candidate comparisons.",
    color: "#4c1d95",
    dots: [[168, 85, 247], [236, 72, 153]],
  },
];

const darkGlass =
  "rounded-3xl border border-white/10 bg-[#2a2a2c]/85 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl";

export default function Home() {
  return (
    <div className="bg-[#f5f6fa]">
      {/* Hero */}
      <Hero2 />

      {/* Reveal Links Section */}
      <RevealLinks
        title="Meet your recruiter"
        words={["Unbiased", "Relentless", "Interview", "Automation"]}
      />

      <main className="flex-1 items-center justify-center">
        {/* Features Section */}
        <SpotlightFeatures />

        {/* How It Works Section */}
        <section id="how-it-works" className="px-3 py-10 md:px-5">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] px-6 py-24 ring-1 ring-neutral-900/[0.04] md:px-12 md:py-32">
            <AuroraBackdrop />
            <GlyphRain seed={3} />

            <div className="relative">
              <div className="mb-16 flex flex-col items-center space-y-5 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[13px] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  How it works
                </span>
                <h2 className="font-aeonik text-4xl tracking-[-0.03em] text-white drop-shadow-[0_2px_20px_rgba(15,23,42,0.25)] md:text-5xl lg:text-6xl">
                  How <span className={`${instrumentSerif.className} text-[1.12em] font-normal`}>PrepSlay</span> works
                </h2>
                <p className="mx-auto max-w-[620px] text-white/85 md:text-lg/relaxed">
                  Three simple steps to transform your recruitment process with AI
                </p>
              </div>

              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                {steps.map(({ icon: Icon, title, description, color, dots }, i) => (
                  <CardSpotlight
                    key={title}
                    className={`h-auto w-full overflow-hidden p-8 ${darkGlass}`}
                    radius={300}
                    color={color}
                    colors={dots}
                  >
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10">
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <span className="font-mono text-sm tracking-widest text-white/40">0{i + 1}</span>
                    </div>
                    <h3 className={`${instrumentSerif.className} relative z-20 mt-10 text-4xl text-white`}>{title}</h3>
                    <p className="relative z-20 mt-3 leading-relaxed text-neutral-300">{description}</p>
                  </CardSpotlight>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <section className="px-3 pb-10 md:px-5">
          <div className="relative mx-auto grid min-h-[640px] max-w-[1400px] place-items-center overflow-hidden rounded-[32px] px-5 py-24 ring-1 ring-neutral-900/[0.04]">
            <AuroraBackdrop />
            <GlyphRain seed={11} />

            <div className={`relative w-full max-w-2xl px-8 py-12 text-center md:px-14 md:py-14 ${darkGlass}`}>
              <h2 className="font-aeonik text-4xl leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
                Every great hire starts as a{" "}
                <span className={`${instrumentSerif.className} text-[1.12em] font-normal`}>conversation</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-neutral-300 md:text-lg">
                Join hundreds of companies already using Prepslay to find the best talent with AI-powered interviews.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/dashboard/create-interview"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] transition hover:bg-neutral-100 sm:w-auto"
                >
                  Get Started for Free
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Hand Written Title */}
      <section className="bg-[#f5f6fa]">
        <HandWrittenTitle title="Prepslay" subtitle="Where AI meets recruitment" />
      </section>

      {/* Animated Footer */}
      <Footer
        leftLinks={[
          { href: "/terms", label: "Terms & Policies" },
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/contact", label: "Contact Us" },
          { href: "/help", label: "Help Center" },
        ]}
        rightLinks={[
          { href: "/about", label: "About Prepslay" },
          { href: "/careers", label: "Careers" },
          { href: "https://twitter.com/okayjitesh", label: "Twitter", icon: Twitter },
          { href: "https://github.com/Jitesh-Raghav", label: "GitHub", icon: Github },
          { href: "https://linkedin.com/in/jitesh-raghav", label: "LinkedIn", icon: Linkedin },
        ]}
        copyrightText="© 2025 Prepslay. All rights reserved."
        barCount={23}
      />
    </div>
  );
}
