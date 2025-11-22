'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { navItems } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Menu, X, Sparkles, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-500',
      isScrolled 
        ? 'border-b border-border/50 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/5' 
        : 'border-b border-border bg-background/80 backdrop-blur-lg'
    )}>
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300"
           style={{ width: `${scrollProgress}%` }}>
        <div className="absolute right-0 top-0 w-2 h-2 bg-primary rounded-full -translate-y-1/4 shadow-lg shadow-primary/50 animate-pulse" />
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'flex items-center justify-between transition-all duration-500',
          isScrolled ? 'h-14' : 'h-16'
        )}>
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center space-x-2 group"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Glow effect on logo */}
            <div className={cn(
              'absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500',
              hoveredItem === 'logo' && 'animate-pulse'
            )} />
            
            <div className="relative flex items-center space-x-2">
              <span className={cn(
                'font-bold gradient-text transition-all duration-500 relative',
                isScrolled ? 'text-xl' : 'text-2xl'
              )}>
                JA
                {hoveredItem === 'logo' && (
                  <Sparkles className="absolute -top-1 -right-4 w-3 h-3 text-primary animate-pulse" />
                )}
              </span>
              <span className={cn(
                'text-sm text-foreground-secondary transition-all duration-300',
                hoveredItem === 'logo' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              )}>
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground-secondary hover:text-primary'
                )}
              >
                {/* Background on hover */}
                <div className={cn(
                  'absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300',
                  pathname === item.href && 'opacity-100 bg-primary/15'
                )} />
                
                {/* Animated underline */}
                <div className={cn(
                  'absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300',
                  pathname === item.href || hoveredItem === item.href
                    ? 'w-3/4 opacity-100'
                    : 'w-0 opacity-0'
                )} />
                
                {/* Text with scale */}
                <span className={cn(
                  'relative transition-transform duration-300',
                  hoveredItem === item.href && 'scale-105'
                )}>
                  {item.name}
                </span>

                {/* Tooltip on hover */}
                {hoveredItem === item.href && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background-secondary border border-primary/30 rounded text-xs whitespace-nowrap animate-fade-in-up">
                    View {item.name}
                  </div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className={cn(
                'relative ml-4 px-4 py-2 text-sm font-medium rounded-lg overflow-hidden group transition-all duration-300',
                'bg-primary/10 text-primary border border-primary/20',
                'hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-105',
                'active:scale-95'
              )}
              onMouseEnter={() => setHoveredItem('contact-cta')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className={cn(
                  'transition-all duration-300',
                  hoveredItem === 'contact-cta' ? 'tracking-wide' : 'tracking-normal'
                )}>
                  Hire Me
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden relative p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95',
              'hover:bg-background-secondary/80',
              isMenuOpen && 'bg-primary/10'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Animated background pulse */}
            {isMenuOpen && (
              <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
            )}
            
            <div className="relative w-6 h-6">
              <X className={cn(
                'absolute inset-0 w-6 h-6 transition-all duration-500',
                isMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-50'
              )} />
              <Menu className={cn(
                'absolute inset-0 w-6 h-6 transition-all duration-500',
                isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-500',
          isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'
        )}>
          {/* Mobile menu backdrop overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10 animate-fade-in-up"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          
          <div className="relative flex flex-col space-y-2 border-t border-border pt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  animationDelay: `${index * 50}ms`
                }}
                className={cn(
                  'relative text-sm font-medium transition-all duration-300 px-4 py-3 rounded-lg transform overflow-hidden group',
                  pathname === item.href
                    ? 'text-primary bg-primary/10 translate-x-0'
                    : 'text-foreground-secondary hover:bg-background-secondary/80 hover:text-primary',
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Sliding background effect */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 transition-transform duration-500',
                  pathname === item.href 
                    ? 'translate-x-0' 
                    : '-translate-x-full group-hover:translate-x-0'
                )} />
                
                {/* Active indicator */}
                {pathname === item.href && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
                
                {/* Text with icon */}
                <span className="relative flex items-center justify-between">
                  {item.name}
                  {pathname === item.href && (
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </span>
              </Link>
            ))}
            
            {/* Mobile menu footer */}
            <div className={cn(
              'mt-4 pt-4 border-t border-border transition-all duration-500',
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: `${navItems.length * 50}ms` }}>
              <p className="text-xs text-foreground-secondary text-center">
                Swipe or tap outside to close
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
