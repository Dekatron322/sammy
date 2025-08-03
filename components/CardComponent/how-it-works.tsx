import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

const HowItWorks = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ensure theme is only set on the client-side
  if (!mounted) return null

  return (
    <section className="section-1 flex w-full">
      <div className="w-full gap-4 max-md:flex-col max-md:px-0 xl:my-10">
        <div className="flex w-full flex-col items-center justify-center gap-4 ">
          <motion.h2
            className="h-full max-w-[754px] text-center text-4xl font-medium max-sm:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            How it works
          </motion.h2>
          <p className="paragraph max-w-[478px] text-center">
            The cash transfer platform is designed to fit with current systems in a flexible and simple way.
          </p>
        </div>

        <div className="mt-20 grid xl:grid-cols-2">
          <Image src="/how-it-works/Frame 1618874171.png" alt="" width={618} height={829} className="max-sm:hidden" />
          <div className="relative flex flex-col gap-10">
            {[
              {
                number: "1",
                title: "Quick registration",
                text: "Everything begins with enrollment-this is why we have developed a quick, open-source and powerful system. We connect directly to ChatToolbox, support manual upload of data, excel imports and have a powerful API to make it simple and quick to register a recipient and vendor. Reduced aid delivery time by 96%.",
              },
              {
                number: "2",
                title: "Safe cash disbursement",
                text: "We Have Built An Open-Source Program That Allows You To Distribute Relief Funds In Hours, Rather Than Days Or Weeks Transparently To Beneficiaries. Every Situation Is Special, So We Endorse Transfers Of Offline SMS, Android App And Tap To Pay Cards. 100% Personalized For Your Brand.",
              },
              {
                number: "3",
                title: "Monitoring in Real-time",
                text: "In order to monitor operations at all times, we provide a dashboard for real-time analytics. We have personalized filters, searches, a personalizable map, and other useful tools to help you gain insight into every program that you run. This provides an immutable and auditable third-party record for donors. All transactions are logged on the Ethereum Blockchain.  Additionally, our system allows you to set up custom alerts and notifications, ensuring that you are immediately informed of any critical changes or anomalies in your operations. This proactive approach helps you maintain control and respond swiftly to any issues that may arise.",
              },
            ].map((item, index, arr) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex size-12  items-center justify-center rounded-full bg-[#FFD817] text-2xl font-bold text-black">
                    {item.number}
                  </div>

                  {index !== arr.length - 1 && (
                    <div className="-mb-7 mt-2 ">
                      <Image
                        src={theme === "dark" ? "/how-it-works/Vector 456 (1).png" : "/how-it-works/Vector 456.png"}
                        alt="Step connector"
                        width={19}
                        height={5}
                        className={`size-auto  ${index === 1 ? " -scale-x-100 pl-7" : "pl-4"}`}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="mb-3 h-full max-w-[754px] text-2xl font-medium max-sm:text-xl">{item.title}</h2>
                  <p className="text-base leading-6 max-xl:text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
