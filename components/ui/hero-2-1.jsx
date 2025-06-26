"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./mini-navbar";

const Hero2 = () => {

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Mini Navbar */}
        <Navbar />

        {/* Badge */}
        <div className="mx-auto mt-48 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            🚀 AI on call. Literally
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-4 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl leading-tight text-white md:text-6xl lg:text-7xl font-aeonik">
          Interviews just got automated AF
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 font-aeonik">
          Done wasting time on weak intros and half-baked answers? Our AI cuts through the noise, grills and roasts ‘em. Sit back, relax, and pick the survivors.  </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                          <Link href="/dashboard/create-interview">
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90 font-aeonik">
                Create Interview <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
            <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10 font-aeonik">
              Watch Demo
            </button>
          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded-xl shadow-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

            {/* Hero Image - Prepslay Dashboard Preview */}
            <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-1 rounded-xl">
              <img
                src="/previeww.png"
                alt="Prepslay AI Interview Platform Dashboard - Create interviews, manage candidates, and analyze results"
                className="relative w-full h-auto shadow-2xl rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export { Hero2 }; 