import dynamic from "next/dynamic"
import React from "react"

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const GlobeAnimation = () => {
  const animationData = require("../public/Globe (1).json")

  return (
    <div className="max-w-[722px]">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  )
}

export default GlobeAnimation
