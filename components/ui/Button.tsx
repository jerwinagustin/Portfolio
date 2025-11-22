'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group active:scale-95 touch-manipulation select-none'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:shadow-md',
    secondary: 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 active:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 active:border-primary-hover',
    ghost: 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary hover:scale-105 active:bg-background-secondary/80',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]',
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500 ease-out" />
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  )
}
