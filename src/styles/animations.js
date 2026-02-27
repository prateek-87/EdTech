// Reusable Framer Motion variants and constants for consistency

export const Transition = {
    spring: { type: 'spring', stiffness: 400, damping: 30 },
    smooth: { type: 'tween', duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    exit: { type: 'tween', duration: 0.15, ease: [0.4, 0, 1, 1] }
};

export const FadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: Transition.smooth },
    exit: { opacity: 0, y: -10, transition: Transition.exit }
};

export const StaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};
