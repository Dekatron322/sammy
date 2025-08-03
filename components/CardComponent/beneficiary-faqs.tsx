import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronDown, CgChevronRight } from "react-icons/cg"

const BeneficiaryFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How will I know if I am registered to receive aid through Chats.cash?",
      answer:
        "Beneficiaries will be onboarded by field agents or directly by the NGO and will receive notification through their chosen method (SMS, App, or paper voucher distribution process) confirming their registration and aid details.",
    },
    {
      question: "What if I don't have a smartphone? Can I still receive aid through Chats.cash?",
      answer:
        "Yes. Chats.cash supports beneficiaries without smartphones through SMS-based systems for feature phones and QR code paper vouchers, ensuring inclusivity.",
    },
    {
      question: "Is my personal information secure on Chats.cash?",
      answer:
        "Yes, beneficiary data is handled with utmost security and privacy. Chats.cash is designed to protect personal information while ensuring efficient aid delivery and verification.",
    },
  ]

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative flex w-full ">
      <div className=" w-full gap-6 max-md:flex-col max-md:px-0 ">
        <div className="flex w-full  items-center justify-between gap-6  max-sm:flex-col">
          <div className="flex flex-col items-start gap-5">
            <motion.h2
              className="h-full max-w-[558px]  text-[32px] font-medium max-sm:text-3xl md:leading-[32.4px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Beneficiary App <span className="text-[#05F29A]">FAQs</span>
            </motion.h2>
            <p className="paragraph max-w-[394px]">
              Understand how beneficiaries can access aid using NFC, apps, or SMS/USSD.
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

export default BeneficiaryFaqs
