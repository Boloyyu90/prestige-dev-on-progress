import * as React from 'react'
import { cn } from '@/shared/lib/utils/cn'

interface FormFieldProps {
  label?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormField({
                            label,
                            error,
                            required,
                            className,
                            children,
                          }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}