'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl p-6 overflow-hidden',
        hover && 'transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 hover:bg-background-secondary/90 cursor-pointer group',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Glass morphism overlay */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Border glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
        </div>
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  )
}
