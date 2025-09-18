import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Button = forwardRef(({ className, variant = 'default', size, ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-border bg-transparent text-primary hover:bg-primary hover:text-primary-foreground',
  }

  const sizes = {
    lg: 'h-11 px-6',
    default: 'h-10 px-4',
  }

  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size] ?? sizes.default, className)} {...props} />
  )
})

Button.displayName = 'Button'

export { Button }
