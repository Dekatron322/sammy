"use client"
import Footer from "components/Footer/Footer"
import DashboardNav from "components/Navbar/DashboardNav"
import MobileNav from "components/Navbar/MobileNav"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const blogEntries = [
  {
    img: "/resources/Frame 1618874266.webp",
    title: "Fresh Perspectives: Explore The Latest In Aid Innovation With CHATS...",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Blog"],
  },
  {
    img: "/resources/Frame 1618874266 (1).webp",
    title: "Dive Into The Data: Key Trends Shaping Humanitarian Aid",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Insight Reports"],
  },
  {
    img: "/resources/Frame 1618874266 (2).webp",
    title: "Explore Our Visual Stories And Moments",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Media Gallery"],
  },
  {
    img: "/resources/Frame 1618874266 (3).webp",
    title: "The CHATS Brand Kit Is Your Go-To Resource",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Brand Kit"],
  },
]

const BlogDetails = () => {
  const [activeTab, setActiveTab] = useState("All") // Set "Blog" as the default tab

  const filteredEntries =
    activeTab === "All" ? blogEntries : blogEntries.filter((entry) => entry.tags.includes(activeTab))

  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  }

  // Animation variants for each grid item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div>
      <DashboardNav />
      <MobileNav />
      <div className="paddings xl:mt-32">
        <div className="flex w-full justify-center gap-10 ">
          <div className="flex w-1/3 flex-col gap-12 max-sm:hidden">
            <div className="primary-900  h-[302px] w-full overflow-hidden rounded-[10px] p-4">
              <h5 className="text-xl font-bold">QUICK LINK</h5>
              <div className="custom-scrollbar mt-6 flex h-[198px] w-full flex-col justify-center gap-7 overflow-y-auto pl-10">
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
              </div>
            </div>

            <div className="flex h-[595px] w-full flex-col items-center justify-center gap-10 rounded-[10px] bg-[#05F29A] px-6">
              <h2 className="text-2xl font-bold text-[#151E22]">NGO DASHBOARD</h2>
              <div className="relative ">
                <div className="img-element-thirty-two absolute left-0 top-10 "></div>
                <img src="/resources/Celestial-Blue.png" alt="" className=" z-50 h-[159px] w-[316.04px]" />
              </div>
              <p className="text-center text-[#151E22]">
                Manage campaigns, verify beneficiaries, and report to donors seamlessly—unlock the power of the NGO
                Dashboard today!
              </p>
              <Link
                href="https://calendly.com/convexitytech/chats"
                target="_blank"
                className="slide-button2 relative flex overflow-hidden rounded-full border bg-[#151E22] px-5 py-2 text-sm"
              >
                <div className="btn-img-element absolute bottom-0 right-[-20]"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full">
            <ul className="mb-[23px] flex gap-2">
              <li>Blog</li>
              <li className="list-inside list-disc">Published November 28, 2024</li>
              <li className="list-inside list-disc">
                <span className="primary-text-900">15 min read</span>
              </li>
            </ul>
            <h2 className="mb-5 text-3xl xl:w-[476px]">
              How CHATS Is Revolutionizing Aid Distribution For Greater Impact
            </h2>

            <div className="content-section">
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="content-section">
              <h4 className="text-2xl">How CHATS is Revolutionizing Aid Distribution for Greater Impact</h4>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="content-section">
              <h4 className="text-2xl">How CHATS is Revolutionizing Aid Distribution for Greater Impact</h4>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen
              </p>
            </div>
            <div className="content-section">
              <h4 className="text-2xl">How CHATS is Revolutionizing Aid Distribution for Greater Impact</h4>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen
              </p>
            </div>
            <div className="border-color-100 flex w-full items-center justify-between border-b border-t py-3">
              <div className="flex items-center">
                <Image src="/resources/Frame 1618874298.png" width={57} height={57} alt="" />
                <div>
                  <p>Chats Team</p>
                  <ul className="flex gap-2 text-xs">
                    <li className="">December 27, 2024 </li>
                    <li className="list-inside list-disc">
                      <span className="primary-text-900">15 min read</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="/resources/skill-icons_instagram.png" alt="" className="h-6 w-6" />
                <img src="/resources/devicon_linkedin.png" alt="" className="h-6 w-6" />
                <img src="/resources/prime_twitter.png" alt="" className="h-6 w-6" />
                <img src="/resources/link-2.png" alt="" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* Animated Grid */}
          <motion.div
            className="mt-16 grid w-full xl:grid-cols-3 xl:gap-11 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={index}
                className="primary-900 mb-6 overflow-hidden rounded-[10px]"
                variants={itemVariants}
              >
                <img src={entry.img} alt={entry.title} />
                <div className="p-6">
                  <p className="uppercase text-[#05F29A]">{entry.tags}</p>
                  <h3 className="mt-2 text-xl font-medium">{entry.title}</h3>
                  <div className="mt-10">
                    <p>Chats Team</p>
                    <p className="paragraph text-sm">
                      {entry.date} • {entry.readTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
          <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
          <p className="faq-text-header text-xl">Still have questions?</p>
          <p className="faq-text-paragraph max-w-[598px] px-4 text-center">
            Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
            or concerns, and we&lsquo;ll get back to you promptly
          </p>
          <Link href="contact-us" className="faq-border rounded-md border px-5 py-2 text-sm">
            Get in touch
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogDetails
