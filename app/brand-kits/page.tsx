"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import Features from "components/CardComponent/features"
import Seamless from "components/CardComponent/seamless"
import HowItWorks from "components/CardComponent/how-it-works"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Image from "next/image"
import MobileNav from "components/Navbar/MobileNav"
import Link from "next/link"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)

  const [cvHover, setCvHover] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
  const [copied, setCopied] = useState(false)
  const [callCopied, setCallCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("cygnux696@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const handleCallCopy = () => {
    navigator.clipboard.writeText("08129859405")
    setCallCopied(true)
    setTimeout(() => setCallCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children
      },
    },
  }

  // Child item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full ">
        <DashboardNav />
        <MobileNav />
        <div className="paddings flex h-auto w-full  max-sm:pt-24 xl:mt-32">
          <div className="primary-400  relative   flex w-full overflow-hidden  rounded-[15px] p-6 max-sm:pb-20 xl:h-[423px]">
            <div className="img-element-twenty-six absolute bottom-10 left-0 max-sm:hidden"></div>
            <div className="img-element-twenty-seven absolute bottom-10 right-0 max-sm:hidden"></div>
            <div className="img-element-thirty-three absolute bottom-0 right-0 xl:hidden"></div>

            <div className="flex w-full items-center justify-between xl:pl-80">
              <div className=" flex max-w-[834px] flex-col">
                <p className="text-start text-[32px] font-bold ">CHATS Brand Kit</p>
                <p className="paragraph">Published November 28, 2024</p>
                <p className="paragraph mt-4">
                  The CHATS Brand Kit is your go-to resource for maintaining a consistent and professional
                  representation of our platform. It includes our{" "}
                  <span className="primary-800 font-medium">
                    official logos, color palette, typography, and guidelines
                  </span>{" "}
                  for their use across various media. Whether you&apos;re creating presentations, social media posts, or
                  marketing materials, the Brand Kit ensures every touchpoint reflects the CHATS identity with clarity
                  and impact.
                </p>
                <Link
                  href="https://drive.google.com/drive/folders/1EIc0LzPTSdrIOFsrvtbwdSKbVJ_H4qWo?usp=sharing"
                  target="_blank"
                  className="border-color-100 mt-4 max-w-[152px] rounded-md border px-5 py-2 text-sm"
                >
                  Download All
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="paddings flex flex-col justify-center xl:my-16 ">
          <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px] px-4">
            <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
            <p className="faq-text-header text-xl">Still have questions?</p>
            <p className="faq-text-paragraph max-w-[598px] text-center">
              Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
              or concerns, and we&lsquo;ll get back to you promptly
            </p>
            <Link href="contact-us" className="faq-border rounded-md border px-5 py-2 text-sm">
              Get in touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
