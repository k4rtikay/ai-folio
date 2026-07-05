"use client";

import { motion, type Variants } from "motion/react";

const eyesVariants: Variants = {
    initial: {
        height: 3,
        width: 16,
    },
    hover: {
        height: [16, 3, 16],
        width: 16,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export default function BlobSkeleton() {
    return (
        <div className="mt-4 w-full h-full relative flex items-center justify-center">
            {/* Glow */}
            <motion.div
                className="absolute h-20 w-20 rounded-full bg-green-400/30 blur-[80px]"
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
                className="relative h-24 w-24 overflow-hidden bg-gradient-to-br from-lime-300 via-green-500 to-green-800 shadow-[0_0_80px_rgba(16,185,129,0.35)]"
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
                    className="absolute bottom-2 right-2 h-28 w-28 rounded-full bg-green-500/50 blur-2xl"
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
                <motion.div
                    initial="initial"
                    whileHover={"hover"}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                >
                    <motion.div
                        className="w-[16px] rounded-full bg-white"
                        variants={eyesVariants}
                    />
                    <motion.div
                        className="w-[16px] rounded-full bg-white"
                        variants={eyesVariants}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
