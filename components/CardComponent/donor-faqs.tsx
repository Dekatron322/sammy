import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

const DonorFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How can I donate to a campaign on Chats.cash?",
      answer:
        "Donors can donate through the Donor Dashboard on the Chats.cash website. They can access open campaigns or be invited to specific campaigns by humanitarian organizations.",
    },
    {
      question: "Is my donation secure when using Chats.cash?",
      answer:
        "Yes, donations are secure. Chats.cash uses secure payment gateways and blockchain technology to protect transaction data and ensure the integrity of the donation process.",
    },
    {
      question: "Can I donate anonymously through Chats.cash?",
      answer:
        "Yes, Chats.cash allows donors to donate publicly or anonymously, providing options for different donor preferences.",
    },
    {
      question: "How do I receive reports about the campaigns I donate to?",
      answer:
        "Donors automatically receive detailed, tamper-proof campaign reports through the Donor Dashboard for every campaign they donate to. These reports provide insights into how the funds were utilized and the campaign's impact.",
    },
    {
      question: "What kind of information is included in the campaign reports for donors?",
      answer:
        "Reports include details on campaign progress, beneficiary reach, aid distribution metrics, and key performance indicators, all secured by blockchain for tamper-proof verification.",
    },
  ]

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative flex w-full  ">
      <div className=" w-full gap-6 max-md:px-0 max-sm:flex-col ">
        <div className="flex w-full  items-center justify-between gap-6  max-sm:flex-col">
          <div className="flex flex-col items-start gap-5">
            <motion.h2
              className="h-full max-w-[558px]  text-[32px] font-medium max-sm:text-3xl md:leading-[32.4px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Donor Dashboard <span className="text-[#05F29A]">FAQs</span>
            </motion.h2>
            <p className="paragraph max-w-[394px]">
              Learn how to donate securely, track contributions, and give anonymously or publicly.
            </p>
            <Link
              href="/contact-us"
              className="slide-button relative flex overflow-hidden rounded-full border px-5 py-2 text-sm"
            >
              <div className="btn-img-element absolute bottom-0 left-0"></div>
              <div className="btn-img-element-one absolute bottom-2 right-2"></div>
              Get in touch
            </Link>
          </div>

          <div className="mt-8 w-full max-w-[744px]">
            {faqs.map((faq, index) => (
              <div key={index} className="hero-container mb-4 rounded-lg">
                <motion.div
                  className="cursor-pointer  p-4 "
                  onClick={() => toggleAccordion(index)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <motion.span animate={{ rotate: activeIndex === index ? -180 : 0 }} transition={{ duration: 0.3 }}>
                      <CgChevronDown className="text-2xl" />
                    </motion.span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-grey-600 px-4 pb-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonorFaqs
