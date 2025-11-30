// "use client"

// import React, { CSSProperties, useEffect, useRef } from "react"
// import { motion } from "motion/react"

// import { cn } from "@/lib/utils"

// interface BorderBeamProps {
//   lightWidth?: number
//   duration?: number
//   lightColor?: string
//   borderWidth?: number
//   className?: string
//   [key: string]: unknown
// }

// export function BorderBeam({
//   lightWidth = 200,
//   duration = 10,
//   lightColor = "#FAFAFA",
//   borderWidth = 1,
//   className,
//   ...props
// }: BorderBeamProps) {
//   const pathRef = useRef<HTMLDivElement>(null)

//   const updatePath = () => {
//     if (pathRef.current) {
//       const div = pathRef.current
//       div.style.setProperty(
//         "--path",
//         `path("M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0")`
//       )
//     }
//   }

//   useEffect(() => {
//     updatePath()
//     window.addEventListener("resize", updatePath)

//     return () => {
//       window.removeEventListener("resize", updatePath)
//     }
//   }, [])

//   return (
//     <div
//       style={
//         {
//           "--duration": duration,
//         } as CSSProperties
//       }
//       ref={pathRef}
//       className={cn(
//         "pointer-events-none absolute inset-0 z-[1] h-full w-full rounded-[inherit]",
//         className
//       )}
//       {...props}
//     >
//       <motion.div
//         className="absolute inset-0 aspect-square bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
//         style={
//           {
//             "--light-color": lightColor,
//             "--light-width": `${lightWidth}px`,
//             width: "var(--light-width)",
//             offsetPath: "var(--path)",
//           } as CSSProperties
//         }
//         animate={{
//           offsetDistance: ["0%", "100%"],
//         }}
//         transition={{
//           duration: duration,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//     </div>
//   )
// }















// "use client"

// import React, { CSSProperties } from "react"
// import { motion } from "motion/react"

// import { cn } from "@/lib/utils"

// interface BorderBeamProps {
//   lightWidth?: number
//   duration?: number
//   lightColor?: string
//   borderWidth?: number
//   className?: string
//   [key: string]: unknown
// }

// export function BorderBeam({
//   lightWidth = 200,
//   duration = 10,
//   lightColor = "#FAFAFA",
//   borderWidth = 2,
//   className,
//   ...props
// }: BorderBeamProps) {
//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute inset-0 z-[100] h-full w-full rounded-[inherit] overflow-hidden",
//         className
//       )}
//       {...props}
//     >
//       {/* Border mask container */}
//       <div
//         className="absolute inset-0 rounded-[inherit]"
//         style={{
//           padding: `${borderWidth}px`,
//           background: "transparent",
//           WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
//           WebkitMaskComposite: "xor",
//           mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
//           maskComposite: "exclude",
//         }}
//       >
//         {/* Animated light beam - travels around rectangle perimeter */}
//         <motion.div
//           className="absolute will-change-transform"
//           style={{
//             width: `${lightWidth}px`,
//             height: `${lightWidth}px`,
//             background: `radial-gradient(circle, ${lightColor} 0%, transparent 70%)`,
//             offsetPath: "rect(0% 0% 100% 100% round 16px)", // follow card border
//             offsetRotate: "0deg",
//           } as CSSProperties}
//           animate={{
//             offsetDistance: ["0%", "100%"],
//           }}
//           transition={{
//             duration: duration,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>
//     </div>
//   )
// }

















// "use client"

// import React, { useRef, useEffect, useState } from "react"
// import { motion, useMotionValue, animate } from "motion/react"
// import { cn } from "@/lib/utils"

// interface BorderBeamProps {
//   lightWidth?: number
//   duration?: number
//   lightColor?: string
//   borderWidth?: number
//   className?: string
// }

// export function BorderBeam({
//   lightWidth = 200,
//   duration = 10,
//   lightColor = "#FF2056",
//   borderWidth = 2,
//   className,
// }: BorderBeamProps) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const progress = useMotionValue(0)
//   const [size, setSize] = useState({ w: 0, h: 0 })

//   useEffect(() => {
//     if (!containerRef.current) return

//     const rect = containerRef.current.getBoundingClientRect()
//     setSize({ w: rect.width, h: rect.height })
//   }, [])

//   // TOTAL PERIMETER OF CARD
//   const perimeter = 2 * (size.w + size.h)

//   const getPosition = (p: number) => {
//     const dist = (p % 1) * perimeter
//     const offset = lightWidth / 2

//     if (dist < size.w) return { x: dist - offset, y: -offset }                        // top
//     if (dist < size.w + size.h) return { x: size.w - offset, y: dist - size.w - offset }   // right
//     if (dist < size.w * 2 + size.h) return { x: size.w - (dist - size.w - size.h) - offset, y: size.h - offset }  // bottom
//     return { x: -offset, y: size.h - (dist - size.w * 2 - size.h) - offset }        // left
//   }

//   useEffect(() => {
//     const controls = animate(progress, 1, {
//       duration,
//       repeat: Infinity,
//       ease: "linear",
//     })
//     return () => controls.stop()
//   }, [duration, progress])

//   const { x, y } = getPosition(progress.get())

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "pointer-events-none absolute inset-0 z-[100] rounded-[inherit] overflow-hidden",
//         className
//       )}
//     >
//       <div
//         className="absolute inset-0 rounded-[inherit]"
//         style={{
//           padding: `${borderWidth}px`,
//           WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
//           WebkitMaskComposite: "xor",
//         }}
//       >
//         <motion.div
//           className="absolute"
//           style={{
//             width: lightWidth,
//             height: lightWidth,
//             background: `radial-gradient(circle, ${lightColor} 0%, transparent 70%)`,
//             left: x,
//             top: y,
//           }}
//         />
//       </div>
//     </div>
//   )
// }




















"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useMotionValueEvent, animate } from "motion/react"
import { cn } from "@/lib/utils"

interface BorderBeamProps {
  lightWidth?: number
  duration?: number
  lightColor?: string
  borderWidth?: number
  className?: string
}

export function BorderBeam({
  lightWidth = 200,
  duration = 10,
  lightColor = "#ff0033", // Bloody Red
  borderWidth = 2,
  className,
}: BorderBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setSize({ w: rect.width, h: rect.height })
  }, [])

  const updatePosition = (p: number) => {
    const perimeter = 2 * (size.w + size.h)
    const dist = (p % 1) * perimeter
    const offset = lightWidth / 2

    let x = 0, y = 0

    if (dist < size.w) {
      x = dist - offset
      y = -offset
    } else if (dist < size.w + size.h) {
      x = size.w - offset
      y = dist - size.w - offset
    } else if (dist < size.w * 2 + size.h) {
      x = size.w - (dist - size.w - size.h) - offset
      y = size.h - offset
    } else {
      x = -offset
      y = size.h - (dist - size.w * 2 - size.h) - offset
    }

    setCoords({ x, y })
  }

  // Subscribe to progress changes
  useMotionValueEvent(progress, "change", (latest) => updatePosition(latest))

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration,
      repeat: Infinity,
      ease: "linear",
    })
    return () => controls.stop()
  }, [duration])

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-[100] rounded-[inherit] overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
        }}
      >
        <motion.div
          className="absolute"
          style={{
            width: lightWidth,
            height: lightWidth,
            background: `radial-gradient(circle, ${lightColor} 0%, transparent 70%)`,
            left: coords.x,
            top: coords.y,
          }}
        />
      </div>
    </div>
  )
}