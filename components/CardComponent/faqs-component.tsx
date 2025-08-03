import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

const FAQsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is Chats.cash and what does CHATS stand for?",
      answer:
        "Chats.cash is a humanitarian aid transfer solution. CHATS stands for Convexity Humanitarian Aid Transfer Solution. It is an aid distribution platform designed for cash, voucher, and item-based campaigns.",
    },
    {
      question: "What problem does Chats.cash solve in humanitarian aid?",
      answer:
        "Chats.cash addresses the challenges of transparency, accountability, and efficiency in aid distribution. It ensures aid reaches beneficiaries directly, reduces fraud, and provides donors with tamper-proof reports, fostering trust and effective aid delivery.",
    },
    {
      question: "Who are the main users of the Chats.cash platform?",
      answer:
        "The primary users are Donors, Humanitarian Organizations (NGOs/Government Institutions/individuals running campaigns), Field Agents, Vendors, and Beneficiaries. Each has a dedicated platform or app within the Chats.cash ecosystem.",
    },
    {
      question: "What are the key benefits of using Chats.cash for humanitarian aid distribution?",
      answer:
        "Key benefits include enhanced transparency, tamper-proof reporting using blockchain, efficient aid delivery, reduced operational costs for NGOs, increased donor trust, and dignified aid receipt for beneficiaries.",
    },
    {
      question: "What types of aid campaigns can be managed on Chats.cash?",
      answer:
        "Chats.cash supports cash-based assistance, voucher-based assistance, and item-based distribution campaigns, offering flexibility for various humanitarian needs.",
    },
    {
      question: "How does Chats.cash ensure transparency and accountability in aid distribution?",
      answer:
        "By utilizing blockchain technology, Chats.cash provides a tamper-proof record of all transactions and campaign activities. This ensures transparency and allows donors to verify the impact of their donations through detailed reports.",
    },
    {
      question: "How does Chats.cash ensure transparency and accountability in aid distribution?",
      answer:
        "By utilizing blockchain technology, Chats.cash provides a tamper-proof record of all transactions and campaign activities. This ensures transparency and allows donors to verify the impact of their donations through detailed reports.",
    },
  ]

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative z-20 flex w-full max-sm:px-4">
      <div className="img-element-nineteen absolute left-[-123.21px] top-[175px]"></div>
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10">
          <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
            <Image width={28} height={28} src="/chats transparent 1.png" alt="" />
            <p className="text-sm"> FAQs</p>
          </div>
          <motion.h2
            className="h-full max-w-[558px] text-center text-[40px] font-medium max-sm:text-3xl md:leading-[32.4px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="paragraph max-w-[662px] max-sm:text-center">
            Have questions about CHATS? We’ve got you covered. Browse our frequently asked questions to find quick,
            clear answers about our platform, processes, and how you can get involved.
          </p>

          <div className="mt-8 w-full max-w-[809px]">
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
          <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
            <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
            <p className="faq-text-header text-xl">Still have questions?</p>
            <p className="faq-text-paragraph max-w-[598px] text-center max-sm:px-4">
              Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
              or concerns, and we&lsquo;ll get back to you promptly
            </p>
            <Link href="contact-us" className="faq-border rounded-md border px-5 py-2 text-sm">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQsComponent
