import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    disabled,
    children,
    ...props
}, ref) => {
    const isDisabled = disabled || isLoading;

    const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-700";

    const variants = {
        primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
        secondary: "bg-surface-light text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-300",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3 text-base",
    };

    return (
        <motion.button
            ref={ref}
            disabled={isDisabled}
            whileHover={!isDisabled ? { scale: 1.02 } : {}}
            whileTap={!isDisabled ? { scale: 0.97 } : {}}
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                isDisabled && "opacity-60 cursor-not-allowed",
                className
            )}
            aria-busy={isLoading}
            {...props}
        >
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="spinner"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </motion.div>
                ) : (
                    <motion.span
                        key="content"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className={cn("flex items-center gap-2", isLoading && "invisible")}
                    >
                        {children}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
});

Button.displayName = "Button";
