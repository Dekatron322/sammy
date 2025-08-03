import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

const CardComponent = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  // Type the ref as HTMLDivElement | null
  const cardRef = useRef<HTMLDivElement>(null)

  const tabs = [
    {
      title: "Donor Dashboard",
      content: (
        <div className="primary-200 relative flex w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[427px]  xl:h-[380px] 2xl:h-[508px]">
          <div className="img-element-three absolute bottom-0 left-10 max-sm:hidden"></div>
          <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
          <div className="img-element-three-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
          <div className="flex w-full justify-between xl:items-center">
            <div className="xl:w-1/2"></div>
            <div className="flex flex-col gap-2 xl:w-1/2 xl:pl-20">
              <p className="text-start text-[24px] font-bold text-[#FFFFFF]">Donor Dashboard</p>
              <p className="text-[#FFFFFF]">
                <span className="text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to campaigns,
                track their impact, and receive detailed reports.
              </p>
              <p className="text-[#FFFFFF]">
                <span className="text-[#05F29A]">Benefit:</span> Transparency and real-time updates build confidence and
                ensure funds are used effectively.
              </p>
              <div className="mt-2">
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="border-color rounded-full border px-5 py-2 text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Beneficiary App",
      content: (
        <div className="primary-400 relative flex w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[427px]  xl:h-[380px] 2xl:h-[508px]">
          <div className="img-element-fifteen absolute bottom-0 left-56 max-sm:hidden"></div>
          <div className="img-element-fifteen-sm absolute bottom-0 right-1/2 z-30 translate-x-1/2 transform xl:hidden"></div>
          <div className="img-element-twenty-two absolute bottom-0 left-0"></div>
          <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
          <div className="flex w-full justify-between xl:items-center">
            <div className="xl:w-1/2"></div>
            <div className="flex flex-col gap-2 xl:w-1/2 xl:pl-20">
              <p className="text-start text-[24px] font-bold">Beneficiary App</p>
              <p>
                <span className="text-[#05F29A]">What it Does:</span> Allows beneficiaries to access aid, check
                balances, and redeem funds at approved vendors.
              </p>
              <p>
                <span className="text-[#05F29A]">Benefit:</span> Provides an easy, reliable way for beneficiaries to
                receive and utilize aid.
              </p>
              <div className="mt-2">
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="border-color rounded-full border px-5 py-2 text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Field Agent/Vendor App",
      content: (
        <div className="relative flex h-full w-full overflow-hidden rounded-[15px] xl:h-[380px] xl:bg-[#05F29A] xl:p-6  2xl:h-[508px] 2xl:p-10">
          <div className="grid w-full gap-10 xl:grid-cols-2 xl:gap-6">
            <div className="relative h-full w-full overflow-auto rounded-[10px] bg-[#151E22] max-sm:h-[507px]">
              <div className="img-element-sixteen absolute bottom-0 left-10 max-sm:hidden"></div>
              <div className="img-element-sixteen-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
              <div className="h-full w-full grid-cols-2 items-center justify-between p-6 xl:grid">
                <div className="max-sm:hidden"></div>
                <div className="flex flex-col gap-4 max-sm:w-full ">
                  <p className="w-full text-start text-[24px] font-bold text-[#ffffff] xl:text-[20px]">
                    Field Agent App
                  </p>
                  <p className="w-full text-[#ffffff] xl:text-sm">
                    <span className="text-[#05F29A]">What it Does:</span> Field agents can verify beneficiaries,
                    distribute aid, and report on-ground activities.
                  </p>
                  <p className="text-[#ffffff] xl:text-sm">
                    <span className="text-[#05F29A]">Benefit:</span> Simplifies fieldwork and ensures accurate,
                    real-time data collection.
                  </p>
                  <div className="mt-2">
                    <Link
                      href="https://calendly.com/convexitytech/chats"
                      target="_blank"
                      className="border-color rounded-full border px-5 py-2 text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-300 relative h-full w-full overflow-auto rounded-[10px] max-sm:h-[507px] max-sm:bg-[#05F29A]">
              <div className="img-element-seventeen absolute bottom-0 left-10 max-sm:hidden"></div>
              <div className="img-element-seventeen-sm absolute bottom-0 left-6 xl:hidden"></div>
              <div className="h-full w-full grid-cols-2 items-center justify-between p-6 xl:grid">
                <div className="max-sm:hidden"></div>
                <div className="flex flex-col gap-4 max-sm:w-full ">
                  <p className="text-start text-[24px] font-bold xl:text-[20px]">Vendor App</p>
                  <p className="xl:text-sm">
                    <span className="text-[#05F29A]">What it Does:</span> Vendors can redeem digital vouchers, process
                    NFC payments, and track disbursements.
                  </p>
                  <p className="xl:text-sm">
                    <span className="text-[#05F29A]">Benefit:</span> Fast, secure payments and easy transaction
                    management.
                  </p>
                  <div className="mt-2">
                    <Link
                      href="https://calendly.com/convexitytech/chats"
                      target="_blank"
                      className="border-color rounded-full border px-5 py-2 text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "NGO Dashboard",
      content: (
        <div className="primary-400 relative flex w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[507px] xl:h-[380px] 2xl:h-[508px]">
          <div className="img-element-eighteen absolute bottom-0 left-10 max-sm:hidden"></div>
          <div className="img-element-eighteen-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
          <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
          <div className="flex w-full xl:items-center xl:justify-between">
            <div className="w-1/2 max-sm:hidden"></div>
            <div className="flex flex-col gap-4 xl:w-1/2 xl:pl-40">
              <p className="text-start text-[24px] font-bold">NGO Dashboard</p>
              <p>
                <span className="text-[#05F29A]">What it Does:</span> Enables NGOs to manage campaigns, verify
                beneficiaries, and generate reports for donors.
              </p>
              <p>
                <span className="text-[#05F29A]">Benefit:</span> Streamlines operations, builds trust with donors, and
                improves accountability.
              </p>
              <div className="mt-2">
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="border-color rounded-full border px-5 py-2 text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  // Define our wheel handler function
  const handleWheelEvent = (e: { deltaY: number; preventDefault: () => void }) => {
    if (isScrolling) return

    if (e.deltaY > 0) {
      // If not on the last tab, prevent scroll and move to next tab.
      if (activeTab < tabs.length - 1) {
        e.preventDefault()
        setActiveTab((prev) => prev + 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 600)
      }
    } else if (e.deltaY < 0) {
      // If not on the first tab, prevent scroll and move to previous tab.
      if (activeTab > 0) {
        e.preventDefault()
        setActiveTab((prev) => prev - 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 600)
      }
    }
  }

  // Global wheel listener attached to window
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      // Check if the component is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        handleWheelEvent(e)
      }
    }

    window.addEventListener("wheel", handleGlobalWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleGlobalWheel)
    }
  }, [activeTab, isScrolling, tabs.length])

  return (
    <div className="flex w-full" ref={cardRef}>
      <div className="paddings mxl:mb-16 w-full gap-6 max-md:flex-col">
        <div className="flex w-full flex-col items-center justify-center gap-6 xl:mt-14">
          <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm">Platform Breakdown</p>
          </div>
          <motion.h2
            className="h-full text-[24px] font-medium max-sm:text-[23px] md:leading-[32.4px] xl:max-w-[558px] xl:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Streamline aid distribution with tailored tools for donors, NGOs, vendors, and beneficiaries
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`border-color rounded-full border px-5 py-2 text-sm ${
                  activeTab === index ? "border-color-active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="h-full w-full xl:mt-6">
            <AnimatePresence>
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  className={`w-full ${index === activeTab ? "z-10" : "z-0"}`}
                  initial={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  animate={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  style={{
                    height: index === activeTab ? "100%" : "100%",
                    overflow: "hidden",
                    backgroundColor: index < activeTab ? "transparent" : "inherit",
                  }}
                >
                  {index === activeTab && tab.content}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
