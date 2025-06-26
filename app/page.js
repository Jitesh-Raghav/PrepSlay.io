"use client"
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { ArrowRight, BarChart3, Clock, Mic, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "./provider";
import { Hero2 } from "@/components/ui/hero-2-1";
import { Feature } from "@/components/ui/feature-with-advantages";
import { Component as PricingSection } from "@/components/ui/gradient-pricing";
import Footer from "@/components/ui/animated-footer";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  const { user } = useUser();


  return (
    <div>
      {/* New Hero Section */}
      <Hero2 />

      <main className="flex-1 items-center justify-center">


        {/* Features Section */}
        <Feature />

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full min-h-screen flex items-center justify-center py-20 bg-black text-white">
          <div className="w-full px-6 md:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">How Prepslay Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                  Three simple steps to transform your recruitment process with AI
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Create Interview</h3>
                <p className="text-center text-gray-300 text-lg">
                  Set up your job requirements and customize AI interview questions with our intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Share with Candidates</h3>
                <p className="text-center text-gray-300 text-lg">
                  Send interview links to candidates to complete at their convenience with our AI voice agent.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Review Results</h3>
                <p className="text-center text-gray-300 text-lg">
                  Get AI-analyzed results, detailed transcripts, and comprehensive candidate comparisons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <section className="w-full min-h-screen flex items-center justify-center py-20 bg-black text-white">
          <div className="w-full px-6 md:px-12">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                  Join hundreds of companies already using Prepslay to find the best talent with AI-powered interviews.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row min-[400px]:gap-6 mt-8">
                <Link href="/dashboard/create-interview">
                  <button className="h-14 rounded-full bg-white px-8 text-lg font-medium text-black hover:bg-gray-100 transition-colors shadow-xl">
                    Get Started for Free <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                </Link>
                <button className="h-14 rounded-full border border-gray-600 px-8 text-lg font-medium text-white hover:bg-white/10 transition-colors">
                  Schedule a Demo
                </button>
              </div>
              
              {/* Badge */}
              <div className="mt-12 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                   Start your free trial today
                </span>
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </section>
      </main>

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
