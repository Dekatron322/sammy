"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import NgoFaqs from "components/CardComponent/ngo-faqs"
import DonorFaqs from "components/CardComponent/donor-faqs"
import VendorFaqs from "components/CardComponent/vendor-faqs"
import BeneficiaryFaqs from "components/CardComponent/beneficiary-faqs"
import GetInTouch from "components/CardComponent/get-in-touch"
import Glossary from "components/CardComponent/glossary"
import MobileNav from "components/Navbar/MobileNav"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("FAQ") // State to manage the active tab

  return (
    <section className="h-full w-full">
      <div className="max-sm:w-full ">
        <DashboardNav />
        <MobileNav />
        <div className="paddings h-auto w-full max-sm:mt-20 xl:mt-32 xl:flex">
          <img src="/contact-us/n9nbashnfdg3rdd8mbgc.webp" alt="" className=" max-sm:rounded-t-xl xl:hidden" />
          <div className="primary-200 relative flex w-full overflow-hidden p-6 max-sm:rounded-b-xl xl:h-[408px] xl:rounded-[15px]">
            <div className="img-element-twenty-eight absolute right-0 top-0 max-sm:hidden"></div>
            <div className="img-element-twenty-nine absolute left-0 max-sm:bottom-0 xl:top-10"></div>

            <div className="flex w-full flex-col justify-between py-10 xl:pl-20">
              <div className="flex max-w-[831px] flex-col gap-2 ">
                <p className="text-start text-[45px] font-bold text-[#FFFFFF] max-sm:text-4xl">How can we help ?</p>
                <p className="text-[#FFFFFF]">Lets know how we can help you</p>
              </div>
              <div className="relative mt-4  max-w-[459px] bg-[#2D3539] ">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full max-w-[459px] rounded-lg border border-[#CDCDCD4D] bg-transparent py-2 pl-10 pr-4 text-white focus:border-[#4A6B6A] focus:outline-none xl:pl-20"
                />

                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#FFFFFF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="z-20 flex flex-wrap gap-2 max-sm:mt-6">
                <div
                  className={`cursor-pointer rounded-full px-5  py-2 max-sm:text-sm ${
                    activeTab === "FAQ" ? "bg-[#05F29A] text-[#151E22]" : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("FAQ")}
                >
                  FAQ
                </div>
                <div
                  className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 max-sm:text-sm ${
                    activeTab === "GLOSSARY"
                      ? "bg-[#05F29A] text-[#151E22]"
                      : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("GLOSSARY")}
                >
                  GLOSSARY
                </div>
                <div
                  className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 max-sm:text-sm ${
                    activeTab === "GET IN TOUCH"
                      ? "bg-[#05F29A] text-[#151E22]"
                      : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("GET IN TOUCH")}
                >
                  GET IN TOUCH
                </div>
              </div>
            </div>
          </div>
        </div>
        {activeTab === "FAQ" && (
          <div>
            <section className="section-1 flex flex-col justify-center px-64 pt-10">
              <NgoFaqs />
            </section>
            <section className="paddings flex w-full flex-col px-64">
              <DonorFaqs />
            </section>
            <section className="paddings section-1 flex w-full flex-col px-64">
              <VendorFaqs />
            </section>
            <section className="paddings flex w-full flex-col px-64">
              <BeneficiaryFaqs />
            </section>
          </div>
        )}
        {activeTab === "GLOSSARY" && (
          <div>
            {/* Add Glossary content here */}
            <Glossary />
          </div>
        )}
        {activeTab === "GET IN TOUCH" && (
          <div>
            <GetInTouch />
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}
