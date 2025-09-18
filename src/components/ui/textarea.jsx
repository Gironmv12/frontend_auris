import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn('w-full rounded-md border border-border bg-input p-3 text-sm text-foreground placeholder:opacity-60', className)}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
