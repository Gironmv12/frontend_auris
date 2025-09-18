import React from 'react'
import { cn } from '@/lib/utils'

function Card({ children, className, ...props }) {
  return (
    <div className={cn('rounded-lg border border-border bg-card text-card-foreground', className)} {...props}>
      {children}
    </div>
  )
}

function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardContent }
