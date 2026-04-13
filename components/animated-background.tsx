"use client"

import { useEffect, useRef } from "react"

interface Electron {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  pulsePhase: number
  orbitRadius: number
  orbitSpeed: number
  orbitAngle: number
  hasOrbit: boolean
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const electronsRef = useRef<Electron[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initElectrons = () => {
      // Electrons
      const electronCount = 15 + Math.floor(Math.random() * 2)
      electronsRef.current = []

      for (let i = 0; i < electronCount; i++) {
        // Only 1 in 5 chance of having the glow effect
        const hasOrbit = Math.random() > 0.95
        electronsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Very slow movement
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          // Tiny size
          size: Math.random() * 2 + 1,
          // Barely visible - only 1-3% opacity
          opacity: Math.random() * 0.4 + 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          orbitRadius: Math.random() * 10 + 8,
          orbitSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
          orbitAngle: Math.random() * Math.PI * 2,
          hasOrbit,
        })
      }
    }

    const drawElectrons = () => {
      timeRef.current += 0.016

      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0a0a1a") // Deep navy
      gradient.addColorStop(0.3, "#0d1025") // Navy with blue tint
      gradient.addColorStop(0.6, "#120d20") // Navy with purple tint
      gradient.addColorStop(1, "#0a0a18") // Back to deep navy
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle radial glow spots
      const glowSpots = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, color: "rgba(59, 130, 246, 0.015)" },
        { x: canvas.width * 0.8, y: canvas.height * 0.6, color: "rgba(139, 92, 246, 0.015)" },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, color: "rgba(99, 102, 241, 0.01)" },
      ]

      glowSpots.forEach((spot) => {
        const radialGradient = ctx.createRadialGradient(
          spot.x,
          spot.y,
          0,
          spot.x,
          spot.y,
          400
        )
        radialGradient.addColorStop(0, spot.color)
        radialGradient.addColorStop(1, "transparent")
        ctx.fillStyle = radialGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Draw electron connections
      electronsRef.current.forEach((electron, i) => {
        electronsRef.current.slice(i + 1).forEach((otherElectron) => {
          const dx = electron.x - otherElectron.x
          const dy = electron.y - otherElectron.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.04
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 0.2
            ctx.moveTo(electron.x, electron.y)
            ctx.lineTo(otherElectron.x, otherElectron.y)
            ctx.stroke()
          }
        })

        // Draw connection to mouse if close
        const mouseDx = electron.x - mouseRef.current.x
        const mouseDy = electron.y - mouseRef.current.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDistance < 200) {
          const opacity = (1 - mouseDistance / 200) * 0.5
          ctx.beginPath()
          ctx.strokeStyle = `rgba(232, 121, 59, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.moveTo(electron.x, electron.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.stroke()
        }
      })

      // Draw electrons with glow and orbits
      electronsRef.current.forEach((electron) => {
        const pulse = Math.sin(timeRef.current * 2 + electron.pulsePhase) * 0.3 + 0.7
        const currentOpacity = electron.opacity * pulse

        // Calculate mouse distance for this electron
        const mouseDx = electron.x - mouseRef.current.x
        const mouseDy = electron.y - mouseRef.current.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        // Draw electron orbit trail if it has one
        if (electron.hasOrbit) {
          electron.orbitAngle += electron.orbitSpeed
          const orbitX = electron.x + Math.cos(electron.orbitAngle) * electron.orbitRadius * 0.15
          const orbitY = electron.y + Math.sin(electron.orbitAngle) * electron.orbitRadius * 0.15

          // Orbit trail
          ctx.beginPath()
          ctx.arc(electron.x, electron.y, electron.orbitRadius * 0.15, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(139, 92, 246, ${currentOpacity * 0.01})`
          ctx.lineWidth = 0.15
          ctx.stroke()

          // Orbiting mini electron
          ctx.beginPath()
          ctx.arc(orbitX, orbitY, 0.5, 0, Math.PI * 2)
          const miniGlow = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 1.5)
          miniGlow.addColorStop(0, `rgba(232, 121, 59, ${currentOpacity * 0.15})`)
          miniGlow.addColorStop(1, "transparent")
          ctx.fillStyle = miniGlow
          ctx.fill()
        }

        // Main electron glow
        const glowGradient = ctx.createRadialGradient(
          electron.x,
          electron.y,
          0,
          electron.x,
          electron.y,
          electron.size * 2
        )
        glowGradient.addColorStop(0, `rgba(139, 92, 246, ${currentOpacity * 0.8})`)
        glowGradient.addColorStop(0.5, `rgba(99, 102, 241, ${currentOpacity * 0.4})`)
        glowGradient.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(electron.x, electron.y, electron.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Core electron
        ctx.beginPath()
        ctx.arc(electron.x, electron.y, electron.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(140, 140, 180, ${currentOpacity * 0.9})`
        ctx.fill()

        // Update position
        electron.x += electron.vx
        electron.y += electron.vy

        // Bounce off edges with slight randomization
        if (electron.x < 0 || electron.x > canvas.width) {
          electron.vx *= -1
          electron.vx += (Math.random() - 0.5) * 0.1
        }
        if (electron.y < 0 || electron.y > canvas.height) {
          electron.vy *= -1
          electron.vy += (Math.random() - 0.5) * 0.1
        }

        // Slight attraction to mouse
        if (mouseDistance < 300) {
          const attraction = 0.0003
          electron.vx -= (mouseDx / mouseDistance) * attraction
          electron.vy -= (mouseDy / mouseDistance) * attraction
        }

        // Limit velocity
        const maxVel = 0.15
        const vel = Math.sqrt(electron.vx * electron.vx + electron.vy * electron.vy)
        if (vel > maxVel) {
          electron.vx = (electron.vx / vel) * maxVel
          electron.vy = (electron.vy / vel) * maxVel
        }
      })

      animationRef.current = requestAnimationFrame(drawElectrons)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    resizeCanvas()
    initElectrons()
    drawElectrons()

    window.addEventListener("resize", () => {
      resizeCanvas()
      initElectrons()
    })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
