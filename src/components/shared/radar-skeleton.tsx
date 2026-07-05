"use client";

import { motion } from "motion/react";

const polygon = "100,30 160,65 142,145 58,145 40,65";

const polygonFill = "100,52 128,81 126,125 83,116 68,79";

const axes = [
    "100,100 100,35",
    "100,100 158,70",
    "100,100 140,138",
    "100,100 60,138",
    "100,100 42,70",
];

const labels = [
    { text: "Frontend", x: 100, y: 18 },
    { text: "Backend", x: 172, y: 72 },
    { text: "Open Source", x: 148, y: 150 },
    { text: "Design", x: 52, y: 150 },
    { text: "Performance", x: 20, y: 72 },
];

export default function RadarSkeleton() {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="-rotate-8 mt-4 flex items-center justify-center"
            style={{
                maskImage:
                    "radial-gradient(ellipse at center, black 50%, transparent 70%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 50%, transparent 70%)",
            }}
        >
            <svg
                width="240"
                height="200"
                viewBox="0 0 200 180"
                className="overflow-visible"
            >
                <defs>
                    <radialGradient id="radar-fill">
                        <stop
                            offset="0%"
                            stopColor="#196C30"
                            stopOpacity="0.9"
                        />
                        <stop
                            offset="100%"
                            stopColor="#28c55e"
                            stopOpacity="0.4"
                        />
                    </radialGradient>
                </defs>

                {/* Grid */}
                {[1, 0.75, 0.5, 0.25].map((scale) => (
                    <motion.polygon
                        key={scale}
                        points={polygon}
                        fill="none"
                        stroke="rgba(255,255,255,.25)"
                        strokeWidth="1"
                        style={{
                            transformOrigin: "100px 100px",
                            transform: `scale(${scale})`,
                        }}
                        variants={{
                            initial: { opacity: 0.2 },
                            hover: { opacity: 0.4 },
                        }}
                    />
                ))}

                {/* Axes */}
                {axes.map((axis) => (
                    <motion.line
                        key={axis}
                        x1={axis.split(" ")[0].split(",")[0]}
                        y1={axis.split(" ")[0].split(",")[1]}
                        x2={axis.split(" ")[1].split(",")[0]}
                        y2={axis.split(" ")[1].split(",")[1]}
                        stroke="rgba(255,255,255,.07)"
                        strokeWidth="1"
                        variants={{
                            initial: {
                                pathLength: 0,
                            },
                            hover: {
                                pathLength: 1,
                                transition: {
                                    duration: 0.35,
                                },
                            },
                        }}
                    />
                ))}

                {/* Filled Polygon */}
                <motion.polygon
                    points={polygonFill}
                    fill="url(#radar-fill)"
                    stroke="#4ade80"
                    strokeWidth="1"
                    className="opacity-50"
                    variants={{
                        initial: {
                            scale: 0,
                            opacity: 0,
                        },
                        hover: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.35,
                                ease: "easeOut",
                            },
                        },
                    }}
                    style={{
                        transformOrigin: "100px 100px",
                    }}
                />
                <motion.polygon
                    points={polygonFill}
                    fill="url(#radar-fill)"
                    stroke="#4ade80"
                    strokeWidth="0"
                    className="blur-md"
                    variants={{
                        initial: {
                            scale: 0,
                            opacity: 0,
                        },
                        hover: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.35,
                                ease: "easeOut",
                            },
                        },
                    }}
                    style={{
                        transformOrigin: "100px 100px",
                    }}
                />

                {/* Labels */}
                {labels.map((label) => (
                    <motion.text
                        key={label.text}
                        x={label.x}
                        y={label.y}
                        textAnchor="middle"
                        fontSize="8"
                        fill="white"
                        variants={{
                            initial: {
                                opacity: 0.25,
                            },
                            hover: {
                                opacity: 0.8,
                            },
                        }}
                    >
                        {label.text}
                    </motion.text>
                ))}
            </svg>
        </motion.div>
    );
}
