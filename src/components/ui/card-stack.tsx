"use client";
 
import { cn } from "@/lib/utils";
import React, {
    Children,
    useState,
    useRef,
    useEffect,
    useCallback,
} from "react";
import { motion, Transition } from "motion/react";
 
export type CardOffset = {
    scale: number;
    y: number;
    opacity?: number;
};
 
interface CardStackProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
 
    // Customization
    offsets?: CardOffset[];
    maxVisibleCards?: number;
 
    // Animation
    transition?: Transition;
    exitOffset?: number;
    exitBlur?: number;
 
    // Behavior
    autoAdvance?: boolean;
    autoAdvanceInterval?: number;
    pauseOnHover?: boolean;
 
    // Control
    activeIndex?: number;
    onIndexChange?: (index: number) => void;
 
    // Interaction
    clickable?: boolean;
    keyboardNavigable?: boolean;
}
 
const DEFAULT_OFFSETS: CardOffset[] = [
    { scale: 1, y: 0, opacity: 1 }, // top card
    { scale: 0.95, y: 12, opacity: 1 }, // second card
    { scale: 0.9, y: 24, opacity: 1 }, // third card
];
 
export function CardStack({
    children,
    className,
    offsets = DEFAULT_OFFSETS,
    maxVisibleCards = 3,
    transition = { type: "spring", damping: 21, stiffness: 180 },
    exitOffset = -64,
    exitBlur = 4,
    autoAdvance = false,
    autoAdvanceInterval = 5000,
    pauseOnHover = true,
    activeIndex: controlledIndex,
    onIndexChange,
    clickable = true,
    keyboardNavigable = true,
    ...props
}: CardStackProps) {
    const cards = Children.toArray(children);
    const totalCards = cards.length;
 
    // Internal state for uncontrolled mode
    const [internalIndex, setInternalIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
 
    const isControlled = controlledIndex !== undefined;
    const activeIndex = isControlled ? controlledIndex : internalIndex;
 
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isKeyRef = useRef(false);
    const autoAdvanceTimerRef = useRef<NodeJS.Timeout>(null);
 
    const maxOffset = Math.max(
        0,
        ...offsets.slice(0, maxVisibleCards).map((offset) => offset.y),
    );
 
    const lastIndex = (activeIndex - 1 + totalCards) % totalCards;
 
    const handleNext = useCallback(() => {
        if (totalCards <= 1) return;
        const newIndex = (activeIndex + 1) % totalCards;
 
        if (!isControlled) {
            setInternalIndex(newIndex);
        }
 
        onIndexChange?.(newIndex);
        setHasInteracted(true);
    }, [activeIndex, totalCards, isControlled, onIndexChange]);
 
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!keyboardNavigable) return;
 
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            isKeyRef.current = true;
            handleNext();
        } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            isKeyRef.current = true;
            handleNext();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            isKeyRef.current = true;
            const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
 
            if (!isControlled) {
                setInternalIndex(prevIndex);
            }
            onIndexChange?.(prevIndex);
            setHasInteracted(true);
        }
    };
 
    useEffect(() => {
        if (!autoAdvance || isPaused || totalCards <= 1) {
            if (autoAdvanceTimerRef.current) {
                clearInterval(autoAdvanceTimerRef.current);
            }
            return;
        }
 
        autoAdvanceTimerRef.current = setInterval(() => {
            handleNext();
        }, autoAdvanceInterval);
 
        return () => {
            if (autoAdvanceTimerRef.current) {
                clearInterval(autoAdvanceTimerRef.current);
            }
        };
    }, [autoAdvance, autoAdvanceInterval, isPaused, handleNext, totalCards]);
 
    // Focus management
    useEffect(() => {
        if (isKeyRef.current) {
            const currentCard = cardsRef.current[activeIndex];
            currentCard?.focus();
            isKeyRef.current = false;
        }
    }, [activeIndex]);
 
    const getCardVariant = (index: number) => {
        const isTop = index === activeIndex;
        const isExiting = index === lastIndex && hasInteracted;
 
        if (isExiting) {
            return {
                y: exitOffset,
                opacity: 0,
                zIndex: 50,
                filter: `blur(${exitBlur}px)`,
                scale: offsets[0]?.scale || 1,
                transition: { duration: 0.2 },
            };
        }
 
        if (isTop) {
            return {
                ...offsets[0],
                y: offsets[0]?.y || 0,
                zIndex: 30,
            };
        }
 
        const stackPosition = (index - activeIndex + totalCards) % totalCards;
 
        if (stackPosition > 0 && stackPosition <= maxVisibleCards) {
            const offsetIndex = Math.min(stackPosition, offsets.length - 1);
            const offset = offsets[offsetIndex] || offsets[offsets.length - 1];
 
            return {
                scale: offset.scale,
                y: offset.y,
                opacity: offset.opacity ?? 1,
                zIndex: 30 - stackPosition * 10,
            };
        }
 
        // Hidden cards
        const lastOffset = offsets[offsets.length - 1];
        return {
            scale: lastOffset?.scale || 0.8,
            y: exitOffset,
            opacity: 0,
            zIndex: 0,
        };
    };
 
    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    };
 
    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    };

    // Edge cases
    if (totalCards === 0) return null;
    if (totalCards === 1) {
        return (
            <div className={cn("relative", className)} {...props}>
                <div className="relative">{cards[0]}</div>
            </div>
        );
    }
 
    return (
        <div
            className={cn("relative flex flex-col justify-end ", className)}
            style={{
                marginBottom: maxOffset,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-label="Card stack"
            aria-live="polite"
            {...props}
        >
            {cards.map((item, index) => {
                const isTop = index === activeIndex;
                const variant = getCardVariant(index);
 
                return (
                    <motion.div
                        key={index}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        initial={variant}
                        animate={variant}
                        transition={transition}
                        whileTap={
                            clickable && isTop
                                ? { y: `${(offsets[0]?.y || 0) + 6}px` }
                                : undefined
                        }
                        className={cn("absolute inset-0 outline-none group", {
                            "pointer-events-none": !isTop,
                            "cursor-pointer select-none": clickable && isTop,
                        })}
                        onClick={() => {
                            if (!clickable || !isTop) return;
                            isKeyRef.current = false;
                            handleNext();
                        }}
                        tabIndex={
                            isTop && (clickable || keyboardNavigable) ? 0 : -1
                        }
                        onKeyDown={handleKeyDown}
                        role={clickable ? "button" : undefined}
                        aria-label={`Card ${index + 1} of ${totalCards}`}
                        aria-current={isTop ? "true" : undefined}
                    >
                        {item}
                    </motion.div>
                );
            })}
 
            {/* Screen reader announcement */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
                Showing card {activeIndex + 1} of {totalCards}
            </div>
        </div>
    );
}
 
export function CardStackIndicator({
    totalCards,
    activeIndex,
}: {
    totalCards: number;
    activeIndex: number;
}) {
    return (
        <div className="flex items-center gap-2">
            {Array.from({ length: totalCards }).map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        "h-[4px] w-[4px] rounded-full transition-all duration-300",
                        index === activeIndex
                            ? "bg-primary w-[12px]"
                            : "bg-neutral-300 dark:bg-neutral-700",
                    )}
                />
            ))}
        </div>
    );
}