"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import NgoFaqs from "components/CardComponent/ngo-faqs"
import DonorFaqs from "components/CardComponent/donor-faqs"
import VendorFaqs from "components/CardComponent/vendor-faqs"
import BeneficiaryFaqs from "components/CardComponent/beneficiary-faqs"
import MobileNav from "components/Navbar/MobileNav"

export default function Dashboard() {
  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full ">
        <DashboardNav />
        <MobileNav />
        <div className="paddings flex h-auto w-full max-sm:mt-20 xl:mt-32">
          <div className="primary-200  relative  flex  w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[604px] xl:h-[408px]">
            <div className="img-element-twenty-five absolute right-0 top-0 max-sm:hidden"></div>
            <div className="img-element-twenty-five-mobile absolute right-0 top-0 xl:hidden"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 xl:pl-20">
                <div className="flex max-w-[105px] items-center gap-2 rounded-full bg-[#304342] px-[20px] py-2">
                  <img src="/chats transparent 1.png" alt="" className="w-7" />
                  <p className="text-sm text-white">FAQs</p>
                </div>
                <p className="text-start text-[45px] font-bold leading-[50px] text-[#FFFFFF]">
                  Frequently Asked Question
                </p>
                <p className="text-[#FFFFFF]">
                  We&apos;ve got answers! Our FAQ section is designed to address common inquiries about CHATS, from
                  platform features and dashboards to disbursement options and account setup.
                </p>

                <div className="relative mt-4 max-w-[261.7px] bg-[#2D3539]">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full max-w-[400px] rounded-lg border border-[#CDCDCD4D] bg-transparent py-2 pl-10 pr-4 text-white focus:border-[#4A6B6A] focus:outline-none"
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
              </div>
            </div>
          </div>
        </div>
        <section className="section-1  flex flex-col justify-center  px-64 pt-10">
          <NgoFaqs />
        </section>
        <section className="paddings flex w-full flex-col   px-64 ">
          <DonorFaqs />
        </section>
        <section className="paddings section-1 flex w-full flex-col   px-64 ">
          <VendorFaqs />
        </section>
        <section className="paddings flex w-full flex-col   px-64 ">
          <BeneficiaryFaqs />
        </section>
      </div>
      <Footer />
    </section>
  )
}
