"use client"

import { useEffect, useState } from "react"

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

  return <>{children}</>
}
