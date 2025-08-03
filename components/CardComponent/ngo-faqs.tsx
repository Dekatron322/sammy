import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronDown, CgChevronRight } from "react-icons/cg"

const NgoFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How can my organization start a campaign on Chats.cash?",
      answer:
        "Organizations can start campaigns through the NGO Dashboard. This involves setting up campaign details, onboarding beneficiaries and vendors (if applicable), inviting donors, and managing all aspects of the campaign lifecycle.",
    },
    {
      question: "How does Chats.cash help NGOs onboard and verify beneficiaries?",
      answer:
        "NGOs and their field agents can use the NGO Dashboard and Field Agent App to onboard beneficiaries. Verification processes are in place to ensure aid reaches the intended recipients, maintaining data integrity and reducing fraud.",
    },
    {
      question: "How can NGOs track the progress of their campaigns on Chats.cash?",
      answer:
        "The NGO Dashboard provides real-time tracking of campaign progress, including donation inflows, aid distribution status, vendor payments, and field agent activities, offering a comprehensive overview of campaign operations.",
    },
    {
      question: "How does Chats.cash facilitate reporting to donors?",
      answer:
        "Chats.cash automates the generation of detailed and tamper-proof campaign reports for donors. NGOs can easily share these reports, enhancing donor trust and demonstrating accountability.",
    },
    {
      question: "What are the different ways beneficiaries can receive aid through Chats.cash?",
      answer:
        "Beneficiaries can receive aid through QR code paper vouchers, SMS for feature phones, or via the Beneficiary App for smartphone users, ensuring accessibility across different technology levels.",
    },
  ]

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative flex w-full ">
      <div className=" w-full gap-6 max-md:flex-col max-md:px-0 ">
        <div className="flex w-full items-center  justify-between gap-6 max-sm:mt-4 max-sm:flex-col">
          <div className="flex flex-col items-start gap-5">
            <motion.h2
              className="h-full max-w-[558px]  text-[32px] font-medium max-sm:text-3xl md:leading-[32.4px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              NGO Dashboard <span className="text-[#05F29A]">FAQs</span>
            </motion.h2>
            <p className="paragraph max-w-[394px]">
              Quick answers for NGOs on managing campaigns, verifying beneficiaries, and sharing reports with donors.
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
              <div key={index} className="hero-container2 mb-4 rounded-lg">
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

export default NgoFaqs
