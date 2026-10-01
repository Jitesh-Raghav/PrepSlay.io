"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Clock, Brain, Users, Mic, BarChart3, Shield } from "lucide-react";
import { instrumentSerif } from "@/lib/fonts";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const FeatureStep = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-sm text-neutral-700">{title}</p>
    </li>
  );
};

export function SpotlightFeatures() {
  const features = [
    {
      icon: Clock,
      tile: "from-sky-400 to-blue-600",
      title: "Save Time & Resources",
      description: "Automate your initial screening process and reduce time-to-hire by 70%.",
      points: [
        "Automated scheduling system",
        "Bulk candidate processing",
        "Instant interview reports",
        "Real-time notifications"
      ]
    },
    {
      icon: Brain,
      tile: "from-violet-400 to-violet-600",
      title: "AI-Powered Analytics",
      description: "Get deep insights into candidate performance with advanced AI analysis.",
      points: [
        "Sentiment analysis",
        "Skill assessment scoring",
        "Communication patterns",
        "Behavioral insights"
      ]
    },
    {
      icon: Shield,
      tile: "from-emerald-400 to-teal-600",
      title: "Bias-Free Evaluation",
      description: "Ensure fair and objective candidate assessment with AI standardization.",
      points: [
        "Consistent evaluation criteria",
        "Objective scoring system",
        "Diversity-focused algorithms",
        "Compliance reporting"
      ]
    },
    {
      icon: Mic,
      tile: "from-amber-300 to-orange-500",
      title: "Voice AI Technology",
      description: "Natural conversational interviews powered by advanced voice AI.",
      points: [
        "Natural speech processing",
        "Multi-language support",
        "Adaptive questioning",
        "Voice quality analysis"
      ]
    },
    {
      icon: BarChart3,
      tile: "from-cyan-400 to-sky-600",
      title: "Advanced Reporting",
      description: "Comprehensive analytics and reporting for data-driven hiring decisions.",
      points: [
        "Detailed performance metrics",
        "Comparative analysis",
        "Custom report generation",
        "Export capabilities"
      ]
    },
    {
      icon: Users,
      tile: "from-pink-400 to-rose-500",
      title: "Team Collaboration",
      description: "Seamless collaboration features for hiring teams and stakeholders.",
      points: [
        "Shared candidate profiles",
        "Team feedback system",
        "Role-based permissions",
        "Integration with HR tools"
      ]
    }
  ];

  return (
    <section id="features" className="relative w-full overflow-hidden bg-[#f5f6fa] py-28 text-neutral-950">
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-indigo-200/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-emerald-200/40 blur-[120px]" />

      <div className="relative w-full px-6 md:px-12">
        <div className="mb-16 flex flex-col items-center justify-center space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[13px] text-neutral-600 shadow-[0_2px_10px_-2px_rgba(30,41,99,0.12)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Features
          </span>
          <h2 className="font-aeonik max-w-3xl text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Powerful features for{" "}
            <span className={`${instrumentSerif.className} text-[1.12em] font-normal`}>modern</span> recruitment
          </h2>
          <p className="mx-auto max-w-[640px] text-neutral-500 md:text-lg/relaxed">
            Transform your hiring process with AI-powered interviews that save time, reduce bias, and deliver better results.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, tile, title, description, points }, index) => (
            <CardSpotlight
              key={index}
              className="h-auto w-full overflow-hidden rounded-3xl border-white bg-white/70 p-8 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_24px_48px_-28px_rgba(30,41,99,0.25)] ring-1 ring-neutral-900/[0.04] backdrop-blur transition-transform duration-500 hover:-translate-y-1"
              radius={280}
              color="#eef2ff"
              colors={[
                [99, 102, 241],
                [168, 85, 247],
              ]}
            >
              <div className="relative z-20 mb-5 flex items-center gap-4">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tile} shadow-[inset_0_2px_3px_rgba(255,255,255,0.45),0_8px_18px_-6px_rgba(15,23,42,0.4)]`}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                </span>
                <h3 className="font-aeonik text-xl tracking-tight text-neutral-950">{title}</h3>
              </div>

              <p className="relative z-20 mb-5 text-[15px] leading-relaxed text-neutral-500">{description}</p>

              <ul className="relative z-20 list-none space-y-2.5 border-t border-neutral-900/[0.06] pt-5">
                {points.map((point, pointIndex) => (
                  <FeatureStep key={pointIndex} title={point} />
                ))}
              </ul>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
