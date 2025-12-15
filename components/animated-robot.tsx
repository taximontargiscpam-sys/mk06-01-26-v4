"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface AnimatedRobotProps {
  src: string
  alt: string
  className?: string
  hoverEffect?: boolean
}

export function AnimatedRobot({ src, alt, className = "", hoverEffect = true }: AnimatedRobotProps) {
  const robotRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!hoverEffect) return

    const handleMouseMove = (e: MouseEvent) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 50
        const y = (e.clientY - rect.top - rect.height / 2) / 50
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [hoverEffect])

  return (
    <div
      ref={robotRef}
      className="relative animate-float"
      style={{
        transform: hoverEffect ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : undefined,
        transition: "transform 0.3s ease-out",
      }}
    >
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-glow" />
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={600}
        height={600}
        className={`relative z-10 ${className}`}
        priority
      />
    </div>
  )
}
