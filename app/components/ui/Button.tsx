import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-[#fc7f66]",
                destructive: "bg-red-500 text-white hover:bg-red-600",
                outline: "border border-primary text-primary hover:bg-primary hover:text-white",
                secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                link: "underline-offset-4 hover:underline text-primary",
            },
            size: {
                default: "px-6 py-2",
                sm: "px-4 py-1.5 text-sm",
                lg: "px-8 py-3 text-lg",
                xl: "px-10 py-4 text-xl",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"

export default Button