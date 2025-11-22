'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!e.target.value)
      props.onChange?.(e)
    }

    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            'peer w-full px-4 pt-6 pb-2 bg-background-secondary border border-border rounded-lg',
            'text-foreground placeholder-transparent',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            'transition-all duration-300 resize-none',
            error && 'border-red-500 focus:ring-red-500/50 focus:border-red-500',
            'hover:border-primary/50',
            className
          )}
          placeholder={label || props.placeholder}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            className={cn(
              'absolute left-4 transition-all duration-300 pointer-events-none',
              'text-foreground-secondary',
              (isFocused || hasValue || props.value)
                ? 'top-2 text-xs text-primary'
                : 'top-4 text-base'
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p className="mt-1 text-sm text-red-500 animate-fade-in-up">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
