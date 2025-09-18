import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn('flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:opacity-60', className)}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
