import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardImage = React.forwardRef(({ className, src, ...props }, ref) => (
  <div ref={ref} className={cn("relative w-full h-40", className)} {...props}>
    <Image src={src} fill={true} alt="card-image" className="object-cover object-top" />
  </div>
))
CardImage.displayName = "CardImage"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight text-center py-4", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-4 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }
