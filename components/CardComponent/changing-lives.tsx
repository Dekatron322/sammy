import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs"

const ChangingLives = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  const sections = [
    {
      name: "Jane Smith",
      role: "Donor",
      image: "/gradient/Frame 1618874027.png",
      text: "Knowing exactly where my contributions go gives me peace of mind. CHATS’ detailed reports and updates are game-changers for donor confidence.",
      position: { left: "5%", top: "25%" },
      circleColor: "#FF6B6B", // Unique color for each circle
      ellipseImage: "/gradient/Ellipse 1834.png", // Unique ellipse image for this section
    },
    {
      name: "Ahmed Bello",
      role: "Beneficiary",
      image: "/gradient/Frame 1618874030.png",
      text: "Knowing exactly where my contributions go gives me peace of mind. CHATS’ detailed reports and updates are game-changers for donor confidence.",
      position: { left: "40%", top: "50%" },
      circleColor: "#4ECDC4", // Unique color for each circle
      ellipseImage: "/gradient/Component 162.png", // Unique ellipse image for this section
    },
    {
      name: "Bryan Solomon",
      role: "NGO Coordinator",
      image: "/gradient/Frame 1618874027 (1).png",
      text: "Knowing exactly where my contributions go gives me peace of mind. CHATS’ detailed reports and updates are game-changers for donor confidence.",
      position: { right: "10%", top: "5%" },
      circleColor: "#FFE66D", // Unique color for each circle
      ellipseImage: "/gradient/Ellipse 1834 (1).png", // Unique ellipse image for this section
    },
  ]

  const handleNext = () => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }

  const handlePrevious = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  const handleSectionClick = (index: React.SetStateAction<number>) => {
    setActiveSection(index)
  }

  return (
    <div className="flex items-center py-16 max-sm:flex-col-reverse">
      <div className="paddings flex flex-col items-start gap-6 max-sm:items-center max-sm:justify-center">
        <div className="card flex items-center gap-2 rounded-full px-2 py-2 xl:px-[20px]">
          <img src="/chats transparent 1.png" alt="" className="w-7" />
          <p className="text-sm">Voices of Impact:</p>
        </div>
        <motion.h2
          className="text-4xl font-medium max-sm:text-2xl xl:min-w-[328px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          How CHATS is Changing Lives
        </motion.h2>
        <p className="paragraph max-sm:text-center xl:min-w-[328px]">
          These voices reveal the real difference our platform makes every day
        </p>
        <div className="flex gap-3">
          <BsArrowLeft className="text-[#CDCDCD]" onClick={handlePrevious} />
          <BsArrowRight className="text-[#05F29A]" onClick={handleNext} />
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        {isDarkMode ? (
          <img src="/gradient/image 2 (1).png" alt="" className="h-full w-full object-fill" />
        ) : (
          <img src="/gradient/image 2.webp" alt="" className="h-full w-full object-fill" />
        )}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="section-3 absolute transform rounded-xl bg-white p-4 shadow-lg max-sm:w-[200px] xl:w-[341px]"
            style={{
              left: section.position.left,
              top: section.position.top,
              right: section.position.right,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="head flex items-center gap-2">
              <img src={section.image} alt="" className="h-[53px] w-[61px] max-sm:h-[30px] max-sm:w-[34px]" />
              <div>
                <p className="text-sm ">{section.name}</p>
                <div className="rounded-full bg-[#05F29A] px-2 py-1 xl:text-xs">
                  <p className="text-center text-[#000000] max-sm:text-[9px]">{section.role}</p>
                </div>
              </div>
              {index !== activeSection && (
                <motion.div
                  className="ml-auto cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleSectionClick(index)}
                >
                  <BsChevronRight />
                </motion.div>
              )}
            </div>
            {index === activeSection && (
              <motion.p
                className="paragraph mt-2 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {section.text}
              </motion.p>
            )}
            {/* Unique gradient ellipse for each section */}

            <motion.img
              className="absolute -bottom-7 left-1/2 h-4 w-10"
              src={section.ellipseImage}
              alt="gradient ellipse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ChangingLives
