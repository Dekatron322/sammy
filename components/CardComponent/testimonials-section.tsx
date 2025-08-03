import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { CgGlobe } from "react-icons/cg"
import { FaGlobeAmericas } from "react-icons/fa"
import { PiDotsThreeOutlineFill, PiShareFatThin } from "react-icons/pi"

const TestimonialSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Facebook Users",
      content: (
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture.png" alt="" width={32} height={32} />
                <div>
                  <p className="text-xs">Johnson Cole</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px]">16h ·</p>
                    <FaGlobeAmericas className="size-[11px]" />
                  </div>
                </div>
              </div>
              <PiShareFatThin />
            </div>
            <p className="mt-4 text-xs">
              I can’t stop talking about how amazing CHATS has been for our campaigns. It’s so easy to use, and it gives
              us full control over everything—from verifying beneficiaries to keeping donors updated. Honestly, it’s
              taken a lot of stress off our team, and we’re seeing real results. If you’re in the NGO space, you NEED
              this platform. 🙌 #Grateful #CHATSWorks
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-1">
                <img src="/testimonials/Frame 160.png" width={25} height={14} />
                <p className="text-[11px]">50</p>
              </div>
              <div className="flex gap-10">
                <p className="text-[11px]">5 comments</p>
                <p className="text-[11px]">5 shares</p>
              </div>
            </div>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture.png" alt="" width={32} height={32} />
                <div>
                  <p className="text-xs">Johnson Cole</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px]">16h ·</p>
                    <FaGlobeAmericas className="size-[11px]" />
                  </div>
                </div>
              </div>
              <PiShareFatThin />
            </div>
            <p className="mt-4 text-xs">
              I can’t stop talking about how amazing CHATS has been for our campaigns. It’s so easy to use, and it gives
              us full control over everything—from verifying beneficiaries to keeping donors updated. Honestly, it’s
              taken a lot of stress off our team, and we’re seeing real results. If you’re in the NGO space, you NEED
              this platform. 🙌 #Grateful #CHATSWorks
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-1">
                <img src="/testimonials/Frame 160.png" width={25} height={14} />
                <p className="text-[11px]">50</p>
              </div>
              <div className="flex gap-10">
                <p className="text-[11px]">5 comments</p>
                <p className="text-[11px]">5 shares</p>
              </div>
            </div>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture.png" alt="" width={32} height={32} />
                <div>
                  <p className="text-xs">Johnson Cole</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px]">16h ·</p>
                    <FaGlobeAmericas className="size-[11px]" />
                  </div>
                </div>
              </div>
              <PiShareFatThin />
            </div>
            <p className="mt-4 text-xs">
              I can’t stop talking about how amazing CHATS has been for our campaigns. It’s so easy to use, and it gives
              us full control over everything—from verifying beneficiaries to keeping donors updated. Honestly, it’s
              taken a lot of stress off our team, and we’re seeing real results. If you’re in the NGO space, you NEED
              this platform. 🙌 #Grateful #CHATSWorks
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-1">
                <img src="/testimonials/Frame 160.png" width={25} height={14} />
                <p className="text-[11px]">50</p>
              </div>
              <div className="flex gap-10">
                <p className="text-[11px]">5 comments</p>
                <p className="text-[11px]">5 shares</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "X Users",
      content: (
        <div className="paragraph-sm grid gap-4 xl:grid-cols-3 ">
          <div className="primary-600  flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture copy.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Chukuemeka Willi</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">@williwilli</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              Been using CHATS for a few months now, and wow—it’s a lifesaver! Managing campaigns is so much smoother,
              and the transparency it offers has made a huge difference for our donors. Highly recommend! 💡
            </p>

            <p className="mt-4 text-xs">
              7:45 am · 20 Mar 2023 · <span className="font-bold">256K </span>
              <span className="paragraph">Views</span>
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-10">
                <p className="text-[11px]">
                  256K <span className="paragraph">Retweets</span>
                </p>
                <p className="text-[11px]">
                  69K <span className="paragraph">Likes</span>
                </p>
              </div>
            </div>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture copy.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Chukuemeka Willi</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">@williwilli</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              Been using CHATS for a few months now, and wow—it’s a lifesaver! Managing campaigns is so much smoother,
              and the transparency it offers has made a huge difference for our donors. Highly recommend! 💡
            </p>

            <p className="mt-4 text-xs">
              7:45 am · 20 Mar 2023 · <span className="font-bold">256K </span>
              <span className="paragraph">Views</span>
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-10">
                <p className="text-[11px]">
                  256K <span className="paragraph">Retweets</span>
                </p>
                <p className="text-[11px]">
                  69K <span className="paragraph">Likes</span>
                </p>
              </div>
            </div>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture copy.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Chukuemeka Willi</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">@williwilli</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              Been using CHATS for a few months now, and wow—it’s a lifesaver! Managing campaigns is so much smoother,
              and the transparency it offers has made a huge difference for our donors. Highly recommend! 💡
            </p>

            <p className="mt-4 text-xs">
              7:45 am · 20 Mar 2023 · <span className="font-bold">256K </span>
              <span className="paragraph">Views</span>
            </p>

            <div className="border-color-100 mt-4 flex w-full justify-between border-t pt-4">
              <div className="flex gap-10">
                <p className="text-[11px]">
                  256K <span className="paragraph">Retweets</span>
                </p>
                <p className="text-[11px]">
                  69K <span className="paragraph">Likes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stakeholders Reviews",
      content: (
        <div className="paragraph-sm grid gap-4 xl:grid-cols-3">
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture1.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Bryan Lookman</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">CTO Look Entr</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              As a donor, transparency and impact are everything to me, and CHATS delivers on both. The real-time
              updates and detailed reports give me confidence that my contributions are making a difference. It’s
              refreshing to see a platform that truly prioritizes accountability and trust. Highly impressed!
            </p>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture1.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Bryan Lookman</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">CTO Look Entr</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              As a donor, transparency and impact are everything to me, and CHATS delivers on both. The real-time
              updates and detailed reports give me confidence that my contributions are making a difference. It’s
              refreshing to see a platform that truly prioritizes accountability and trust. Highly impressed!
            </p>
          </div>
          <div className="primary-600 relative flex w-full flex-col rounded-[5px] p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/testimonials/Profile Picture1.png" alt="" width={42} height={42} />
                <div>
                  <p className="text-xs font-bold">Bryan Lookman</p>
                  <div className="flex gap-1">
                    <p className="text-[11px]">CTO Look Entr</p>
                  </div>
                </div>
              </div>
              <PiDotsThreeOutlineFill />
            </div>
            <p className="mt-4 text-xs">
              As a donor, transparency and impact are everything to me, and CHATS delivers on both. The real-time
              updates and detailed reports give me confidence that my contributions are making a difference. It’s
              refreshing to see a platform that truly prioritizes accountability and trust. Highly impressed!
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="flex w-full px-4">
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 ">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10 xl:px-20">
          <motion.h2
            className="h-full max-w-[558px] text-center text-4xl font-medium max-sm:text-3xl md:leading-[32.4px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Testimonials Showcasing Trust
          </motion.h2>
          <p className="paragraph max-w-[771px] text-center">
            Discover how CHATS is transforming aid distribution through the words of those who trust our platform. From
            NGOs to donors, our users share their experiences and the impact we’re making together.
          </p>
          <div className="flex flex-wrap gap-2 ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`border-color rounded-full border px-3 py-2 text-sm xl:px-5 ${
                  activeTab === index ? "border-color-active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="relative w-full  xl:mt-6">
            <AnimatePresence>
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  className={` w-full ${index === activeTab ? "z-10" : "z-0"}`}
                  initial={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  animate={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
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

export default TestimonialSection
