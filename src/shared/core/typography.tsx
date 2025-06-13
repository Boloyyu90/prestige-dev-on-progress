import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils/cn"

const headingVariants = cva(
  "font-display font-bold tracking-tight",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        gradient: "text-gradient",
        "gradient-primary": "text-gradient-primary",
        "gradient-secondary": "text-gradient-secondary",
      },
      size: {
        "display-2xl": "text-display-2xl",
        "display-xl": "text-display-xl",
        "display-lg": "text-display-lg",
        "display-md": "text-display-md",
        "display-sm": "text-display-sm",
        "xl": "text-4xl lg:text-5xl",
        "lg": "text-3xl lg:text-4xl",
        "md": "text-2xl lg:text-3xl",
        "sm": "text-xl lg:text-2xl",
        "xs": "text-lg lg:text-xl",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
      align: "left",
    },
  }
)

const textVariants = cva(
  "font-body",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
      },
      size: {
        "xl": "text-body-xl",
        "lg": "text-body-lg",
        "md": "text-body-md",
        "sm": "text-body-sm",
        "xs": "text-body-xs",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "normal",
      align: "left",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, align, as = "h2", ...props }, ref) => {
    const Component = as
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, size, align, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, weight, align, as = "p", ...props }, ref) => {
    const Component = as as any
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, size, weight, align, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Heading, Text, headingVariants, textVariants }