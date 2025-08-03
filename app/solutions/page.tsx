"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import Image from "next/image"
import MobileNav from "components/Navbar/MobileNav"
import CarAnimation from "components/CardComponent/carAnimation"
import Link from "next/link"

export default function Dashboard() {
  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full ">
        <DashboardNav />
        <MobileNav />
        <div className="paddings mt-32 flex h-auto w-full">
          <div className="solutionImage relative h-[590px] w-full gap-6 rounded-[19px] max-md:flex-col max-md:px-0 md:mb-16">
            {/* Floating Buttons */}
            <div className="animate-float absolute left-4 top-10 xl:left-10 xl:top-1/4">
              <Link
                href="/ngos"
                className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg"
              >
                NGO Dashboard
              </Link>
              <Image src="/solutions/Vector (4).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>
            <Link
              href="https://calendly.com/convexitytech/chats"
              target="_blank"
              className="animate-float absolute right-10 top-20 delay-100 xl:top-1/3"
            >
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Beneficiary App
              </button>
              <Image src="/solutions/Vector (2).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </Link>
            <Link href="/donors" className="animate-float absolute left-1/4 top-[24%] delay-200 xl:bottom-1/4">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Donor Dashboard
              </button>
              <Image src="/solutions/Vector (3).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </Link>
            <Link
              href="https://calendly.com/convexitytech/chats"
              target="_blank"
              className="animate-float absolute bottom-1/3 right-3 delay-300 max-sm:bottom-10 xl:right-1/4"
            >
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Vendor App
              </button>
              <Image src="/solutions/Vector (5).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </Link>
            <Link
              href="https://calendly.com/convexitytech/chats"
              target="_blank"
              className="animate-float absolute bottom-7 right-1/2 delay-300 max-sm:left-10"
            >
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Field Agent App
              </button>
              <Image src="/solutions/Vector (6).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </Link>

            {/* Content */}
            <div className=" flex h-full w-full flex-col items-center justify-center gap-3  max-sm:px-10">
              <motion.h2
                className="max-w-[603px] justify-center text-center text-4xl font-medium text-[#FFFFFF] max-sm:text-3xl md:leading-[55px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Find the Right <span className="text-[#05F29A]">Solutions</span> for Your Aid Distribution
              </motion.h2>
              <p className="text-center text-[#FFFFFF] xl:w-[503px]">
                Check out our thoughtfully designed solutions crafted to simplify aid management, enhance transparency,
                and drive impact
              </p>
            </div>
          </div>
        </div>
        <section className="paddings">
          <div className="primary-400 relative flex w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[460px] xl:h-[380px] 2xl:h-[508px]">
            <div className="img-element-eighteen absolute bottom-0 left-10 max-sm:hidden"></div>
            <div className="img-element-eighteen-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
            <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
            <div className="flex w-full xl:items-center xl:justify-between">
              <div className="w-1/2 max-sm:hidden"></div>
              <div className="flex flex-col gap-4 xl:w-1/2 xl:pl-40">
                <p className="text-start text-[24px] font-bold">NGO Dashboard</p>
                <p>
                  <span className="text-[#05F29A]">What it Does:</span> Enables NGOs to manage campaigns, verify
                  beneficiaries, and generate reports for donors.
                </p>
                <p>
                  <span className="text-[#05F29A]">Benefit:</span> Streamlines operations, builds trust with donors, and
                  improves accountability.
                </p>
                <div className="mt-3">
                  <Link
                    href="https://calendly.com/convexitytech/chats"
                    target="_blank"
                    className="border-color rounded-full border px-5 py-2 text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="primary-200 relative  mt-10 flex  w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[427px] xl:h-[380px] 2xl:h-[508px]">
            <div className="img-element-three absolute bottom-0 left-10 max-sm:hidden"></div>
            <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
            <div className="img-element-three-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
            <div className="flex w-full justify-between xl:items-center">
              <div className="xl:w-1/2"></div>
              <div className="flex flex-col gap-2 xl:w-1/2 xl:pl-20">
                <p className="text-start text-[24px] font-bold text-[#FFFFFF]">Donor Dashboard</p>
                <p className="text-[#FFFFFF]">
                  <span className="text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to
                  campaigns, track their impact, and receive detailed reports.
                </p>
                <p className="text-[#FFFFFF]">
                  <span className="text-[#05F29A]">Benefit:</span> Transparency and real-time updates build confidence
                  and ensure funds are used effectively.
                </p>
                <div className="mt-3">
                  <Link
                    href="https://calendly.com/convexitytech/chats"
                    target="_blank"
                    className="border-color rounded-full border px-5 py-2 text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex h-full w-full overflow-hidden rounded-[15px]  xl:h-[380px] xl:bg-[#05F29A] xl:p-6 2xl:h-[508px] 2xl:p-10">
            <div className=" grid w-full gap-10 xl:grid-cols-2 xl:gap-6">
              <div className="relative h-full w-full overflow-auto rounded-[10px] bg-[#151E22] max-sm:h-[507px]">
                <div className="img-element-sixteen absolute bottom-0 left-10 max-sm:hidden"></div>
                <div className="img-element-sixteen-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>

                <div className="h-full w-full grid-cols-2 items-center justify-between p-6 xl:grid">
                  <div className="max-sm:hidden"></div>
                  <div className="flex  flex-col gap-4 max-sm:w-full ">
                    <p className="w-full text-start text-[24px] font-bold text-[#ffffff]">Field Agent App</p>
                    <p className="w-full text-[#ffffff]">
                      <span className="text-[#05F29A]">What it Does:</span> Field agents can verify beneficiaries,
                      distribute aid, and report on-ground activities.
                    </p>
                    <p className="text-[#ffffff]">
                      <span className="text-[#05F29A]">Benefit:</span> Simplifies fieldwork and ensures accurate,
                      real-time data collection.
                    </p>
                    <div>
                      <Link
                        href="https://calendly.com/convexitytech/chats"
                        target="_blank"
                        className="border-color rounded-full border px-5 py-2 text-sm"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="primary-3000 relative h-full w-full overflow-auto rounded-[10px] max-sm:h-[507px] max-sm:bg-[#05F29A]">
                <div className="img-element-seventeen absolute bottom-0 left-10 max-sm:hidden"></div>
                <div className="img-element-seventeen-sm absolute bottom-0 right-1/2 translate-x-1/2 transform xl:hidden"></div>
                <div className="h-full w-full grid-cols-2 items-center justify-between p-6 xl:grid">
                  <div className="max-sm:hidden"></div>
                  <div className="flex  flex-col gap-4 max-sm:w-full ">
                    <p className="text-start text-[24px] font-bold">Vendor App</p>
                    <p>
                      <span className="text-[#05F29A] max-sm:text-[#ffffff]">What it Does:</span> Vendors can redeem
                      digital vouchers, process NFC payments, and track disbursements
                    </p>
                    <p>
                      <span className="text-[#05F29A] max-sm:text-[#ffffff]">Benefit:</span> Fast, secure payments and
                      easy transaction management.
                    </p>
                    <div>
                      <Link
                        href="https://calendly.com/convexitytech/chats"
                        target="_blank"
                        className="border-color rounded-full border px-5 py-2 text-sm"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="primary-400 relative mt-10 flex w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[427px] xl:mt-10 xl:h-[380px] 2xl:h-[508px]">
            <div className="img-element-fifteen absolute bottom-0 left-56 max-sm:hidden"></div>
            <div className="img-element-fifteen-sm absolute bottom-0 right-1/2 z-20 translate-x-1/2 transform xl:hidden"></div>
            <div className="img-element-twenty-two absolute bottom-0 left-0"></div>
            <div className="img-element-four absolute bottom-0 right-0 max-sm:hidden"></div>
            <div className="flex w-full justify-between xl:items-center">
              <div className="xl:w-1/2"></div>
              <div className="flex flex-col gap-2 xl:w-1/2 xl:pl-20">
                <p className="text-start text-[24px] font-bold">Beneficiary App</p>
                <p>
                  <span className="text-[#05F29A]">What it Does:</span> Allows beneficiaries to access aid, check
                  balances, and redeem funds at approved vendors.
                </p>
                <p>
                  <span className="text-[#05F29A]">Benefit:</span> Provides an easy, reliable way for beneficiaries to
                  receive and utilize aid.
                </p>
                <div className="mt-3">
                  <Link
                    href="https://calendly.com/convexitytech/chats"
                    target="_blank"
                    className="border-color rounded-full border px-5 py-2 text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="primary-400 relative mt-10 flex  w-full overflow-hidden rounded-[15px] p-4 xl:p-6">
            <div className="img-element-twenty-three absolute top-0  max-sm:hidden xl:right-10"></div>
            <div className="img-element-four absolute bottom-0 right-0"></div>
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full flex-col items-center justify-center gap-2 xl:pl-20">
                <Image src="/solutions/Frame 1618874244.png" alt="" width={138} height={57.84} />
                <p className="text-start text-[24px] font-bold">CHATS Disbursement Options to Beneficiaries</p>
                <p className="paragraph max-w-[498px] text-center">
                  CHATS provides flexible and secure disbursement options to ensure aid reaches beneficiaries
                  efficiently and transparently.
                </p>

                <div className="my-10 grid gap-5 xl:grid-cols-2 ">
                  <div className="paperImage flex flex-col justify-center rounded-[10px]  p-4 xl:h-[146px] xl:w-[393px] xl:p-6">
                    <h5 className="text-white xl:text-xl">Paper payment voucher</h5>
                    <p className="text-[#FFFFFFCC] max-sm:text-sm">
                      Beneficiaries can get unique payment vouches that would be scannedby the vendor for the payment
                    </p>
                  </div>
                  <div className="paperImage1 flex flex-col justify-center rounded-[10px]  p-4 xl:h-[146px] xl:w-[393px] xl:p-6">
                    <h5 className="text-white xl:text-xl">NFC TAP to Pay</h5>
                    <p className="text-[#FFFFFFCC] max-sm:text-sm">
                      Physical card enable transactions offline via NFC Embedded devices, ideal for those without phones
                    </p>
                  </div>
                  <div className="paperImage2 flex flex-col justify-center rounded-[10px]  p-4 xl:h-[146px] xl:w-[393px] xl:p-6">
                    <h5 className="text-white xl:text-xl">Android Application</h5>
                    <p className="text-[#FFFFFFCC] max-sm:text-sm">
                      Funds are credited directly to beneficiaries , cHATS linked wallet, accessible to all
                    </p>
                  </div>
                  <div className="paperImage2 flex flex-col justify-center rounded-[10px]  p-4 xl:h-[146px] xl:w-[393px] xl:p-6">
                    <h5 className="text-white xl:text-xl">SMS/USSD (For Feature Phone)</h5>
                    <p className="text-[#FFFFFFCC] max-sm:text-sm">
                      Text based codes allow easy fund redemption for beneficiaries without smartphone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CarAnimation />
        {/* <CardComponent />
        <HowBeneficiariesCanRecieve />
        <section className="paddings mb-10 flex  w-full">
          <div className="flex w-full flex-col items-center justify-center   max-sm:mt-10   ">
            <div className=" mt-10  ">
              <img src="/Frame 1618873988.png" alt="" />
            </div>
          </div>
        </section> */}

        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
