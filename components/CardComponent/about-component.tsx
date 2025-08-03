import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"

interface AboutCardProps {
  imageSrc: string
  title: string
  description: string
  link: string
}

const AboutCard = ({ imageSrc, title, description, link }: AboutCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className="group relative flex h-[529px] w-full flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[#1c2529] max-sm:h-[474.7px]"
      whileHover="hover"
      initial="initial"
    >
      {/* Background Image with Skeleton Loading */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          quality={80}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-between bg-[#1c2529] p-8">
            {/* Skeleton for the entire card structure */}
            <div className="h-10 w-32 animate-pulse rounded-full bg-gray-300"></div>

            <div className="flex flex-col items-center gap-4">
              <div className="h-4 w-64 animate-pulse rounded bg-gray-300"></div>
              <div className="h-4 w-56 animate-pulse rounded bg-gray-300"></div>
              <div className="h-4 w-48 animate-pulse rounded bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-[31px] animate-pulse bg-gray-300"></div>
              <div className="h-4 w-24 animate-pulse bg-gray-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay - only shown when image is loaded */}
      {isLoaded && <div className="absolute inset-0 rounded-[20px] bg-black/50"></div>}

      {/* Content - only shown when image is loaded */}
      {isLoaded && (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 text-white">
          {/* Title Container */}
          <div className="title-container rounded-full bg-[#ffffff] px-5 py-[10px] text-[#7D7D7D] transition-all duration-300 ease-in-out group-hover:bg-[#151E22] group-hover:text-[#05F29A]">
            <p className="text-sm">{title}</p>
          </div>

          {/* Description */}
          <motion.p
            className="mt-4 text-center text-lg xl:w-[336px]"
            variants={{
              initial: { y: 0 },
              hover: { y: -10 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          {/* Hover-Only Section */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={{
              initial: { opacity: 0, y: 50 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img src="/Union.png" alt="" className="h-14 w-[31px]" />
            <Link className="text-[#05F29A] underline" href={link}>
              Get Started
            </Link>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

const AboutComponent = () => {
  const cards = [
    {
      imageSrc: "/001 (2).webp",
      title: "Our Mission Statement",
      description:
        "To revolutionize humanitarian aid by providing a transparent, efficient platform that empowers donors, NGOs, and beneficiaries for impactful change",
      link: "/solutions",
    },
    {
      imageSrc: "/002 (1).webp",
      title: "Our Core Value",
      description:
        "Transparency, innovation, trust, empowerment, and impact guide everything we do, ensuring effective and accountable aid distribution",
      link: "/solutions",
    },
    {
      imageSrc: "/003 (1).webp",
      title: "Our Vision For The Future",
      description:
        "We aim to expand globally, leveraging technology to enhance transparency, scalability, and efficiency in aid distribution",
      link: "/solutions",
    },
  ]

  return (
    <div className="paddings my-10 grid w-full justify-between gap-10 xl:grid-cols-3">
      {cards.map((card, index) => (
        <AboutCard key={index} {...card} />
      ))}
    </div>
  )
}

export default AboutComponent
