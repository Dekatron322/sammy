import dynamic from "next/dynamic"
import React from "react"

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const CampaignData = () => {
  const animationData = require("../public/campaigns.json")

  return (
    <div className="">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  )
}

export default CampaignData
