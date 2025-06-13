import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils/cn"

const sectionVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-background",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted",
        gradient: "bg-gradient-hero text-white",
        glass: "glass",
      },
      padding: {
        none: "",
        sm: "py-8 md:py-12",
        default: "py-12 md:py-16 lg:py-20",
        lg: "py-16 md:py-20 lg:py-24",
        xl: "py-20 md:py-24 lg:py-32",
      },
      container: {
        none: "",
        default: "container-custom",
        fluid: "px-4 sm:px-6 lg:px-8",
        narrow: "container-custom max-w-4xl",
        wide: "container-custom max-w-7xl",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      container: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: keyof JSX.IntrinsicElements
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, container, as = "section", children, ...props }, ref) => {
    const Component = as as any

    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ variant, padding }), className)}
        {...props}
      >
        <div className={cn(sectionVariants({ container }))}>
          {children}
        </div>
      </Component>
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }