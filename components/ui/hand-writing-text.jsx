"use client";

import { motion } from "framer-motion";

function HandWrittenTitle({
    title = "Prepslay",
    subtitle = "AI-Powered Interview Revolution",
}) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className="relative w-full py-12 bg-black">
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 2000 1000"
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                >
                    <title>Prepslay</title>
                    <motion.path
                        d="M 1800 20 
                           C 2200 600, 1900 980, 1000 1000
                           C 100 1000, -50 980, -50 600
                           C -50 20, 200 0, 1000 0
                           C 1800 0, 1800 100, 1800 100"
                        fill="none"
                        strokeWidth="30"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-white opacity-60"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center px-4 md:px-8 p-1">
                <motion.h1
                    className="text-6xl md:text-8xl xl:text-9xl tracking-tighter flex items-center gap-2 font-aeonik bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-2xl md:text-3xl xl:text-4xl text-gray-300 mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export { HandWrittenTitle } 