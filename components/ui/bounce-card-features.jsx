import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart3, Users, Mic, Brain, Shield } from "lucide-react";

export const BouncyCardsFeatures = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 text-white bg-black">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-lg text-3xl font-bold md:text-4xl">
          Streamline Your
          <span className="text-gray-400"> Hiring Process</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-white px-6 py-3 font-medium text-black shadow-xl transition-colors hover:bg-gray-100"
        >
          Start Free Trial
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Save Time</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-6 rounded-t-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-3 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full">
              <Clock className="h-10 w-10 text-white mb-2" />
              <span className="block text-center font-semibold text-white text-sm">
                Automate initial screening interviews and focus on final candidates
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>AI-Powered Analytics</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-6 rounded-t-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-3 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full">
              <BarChart3 className="h-10 w-10 text-white mb-2" />
              <span className="block text-center font-semibold text-white text-sm">
                Get detailed analytics and candidate comparisons based on interview responses
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Reduce Bias</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-6 rounded-t-2xl bg-gradient-to-br from-orange-500 to-red-500 p-4 transition-transform duration-[250ms] group-hover:translate-y-3 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full">
              <Shield className="h-10 w-10 text-white mb-2" />
              <span className="block text-center font-semibold text-white text-sm">
                Standardized interviews help eliminate unconscious bias in hiring
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Voice AI</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-6 rounded-t-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-3 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full">
              <Mic className="h-10 w-10 text-white mb-2" />
              <span className="block text-center font-semibold text-white text-sm">
                Natural conversation with advanced AI voice models
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[250px] cursor-pointer overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold text-white">{children}</h3>
  );
}; 