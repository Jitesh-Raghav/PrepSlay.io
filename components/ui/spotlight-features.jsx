"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Clock, Brain, Users, Mic, BarChart3, Shield } from "lucide-react";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
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
      <p className="text-white">{title}</p>
    </li>
  );
};

export function SpotlightFeatures() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
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
      icon: <Brain className="h-8 w-8 text-purple-500" />,
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
      icon: <Shield className="h-8 w-8 text-green-500" />,
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
      icon: <Mic className="h-8 w-8 text-orange-500" />,
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
      icon: <BarChart3 className="h-8 w-8 text-cyan-500" />,
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
      icon: <Users className="h-8 w-8 text-pink-500" />,
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
    <section id="features" className="w-full min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl font-aeonik">
              Powerful Features for Modern Recruitment
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
              Transform your hiring process with AI-powered interviews that save time, reduce bias, and deliver better results.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <CardSpotlight
              key={index}
              className="h-auto w-full"
              radius={300}
              color="#1e40af"
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold relative z-20 text-white">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-neutral-200 mb-4 relative z-20">
                {feature.description}
              </p>
              
              <div className="text-neutral-200 relative z-20">
                <ul className="list-none space-y-2">
                  {feature.points.map((point, pointIndex) => (
                    <FeatureStep key={pointIndex} title={point} />
                  ))}
                </ul>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
} 