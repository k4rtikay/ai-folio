"use client";

import { motion, type Variants } from "motion/react";

const eyesVariants: Variants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

export default function BlobSkeleton() {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            {/* Glow */}
            <motion.div
                className="absolute h-24 w-24 rounded-full bg-emerald-400/30 blur-[70px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob */}
            <motion.div
                whileHover={{
                    scale: 1.05,
                }}
                animate={{
                    y: [0, -6, 0, 4, 0],
                    borderRadius: [
                        "58% 42% 53% 47% / 42% 54% 46% 58%",
                        "48% 52% 46% 54% / 60% 40% 58% 42%",
                        "61% 39% 56% 44% / 45% 57% 43% 55%",
                        "58% 42% 53% 47% / 42% 54% 46% 58%",
                    ],
                }}
                transition={{
                    y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    borderRadius: {
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="relative h-32 w-32 overflow-hidden bg-gradient-to-br from-emerald-300 via-green-400 to-emerald-700 shadow-[0_0_80px_rgba(16,185,129,0.35)]"
            >
                {/* Highlight */}
                <div className="absolute left-6 top-5 h-16 w-16 rounded-full bg-white/25 blur-xl" />

                {/* Bottom shading */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/15 to-transparent" />

                <motion.div
                    animate={{
                        x: [-15, 10, -15],
                        y: [8, -12, 8],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-32 w-32 rounded-full bg-lime-300/50 blur-2xl"
                />

                <motion.div
                    animate={{
                        x: [12, -10, 12],
                        y: [-8, 10, -8],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-2 right-2 h-28 w-28 rounded-full bg-emerald-500/50 blur-2xl"
                />

                {/* Noise */}
                <div
                    className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url('https://grainy-gradients.vercel.app/noise.svg')",
                    }}
                />

                {/* Eyes placeholder */}
                <div className="absolute inset-0 flex items-center justify-center gap-6">
                    <motion.div
                        className="h-[3px] w-5 rounded-full bg-white"
                        variants={eyesVariants}
                        whileHover="hover"
                    />
                    <motion.div
                        className="h-[3px] w-5 rounded-full bg-white"
                        variants={eyesVariants}
                        whileHover="hover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
