import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

export default function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  return (
    <div
      className={cn(
        'bg-background-secondary skeleton animate-pulse',
        variants[variant],
        className
      )}
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-background-secondary border border-border rounded-xl p-6">
      <Skeleton className="w-full h-64 mb-4" />
      <div className="space-y-3">
        <Skeleton variant="text" className="w-1/4" />
        <Skeleton variant="text" className="w-3/4 h-8" />
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-5/6" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
        </div>
      </div>
    </div>
  )
}
