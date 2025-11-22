import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-background-secondary text-foreground-secondary border border-border hover:border-primary/30 hover:bg-background-secondary/80',
    primary: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40',
    accent: 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40',
  }
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
