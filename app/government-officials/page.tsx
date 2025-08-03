"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Slider from "components/CardComponent/slider"
import Image from "next/image"
import AllInOne from "components/CardComponent/all-in-one"
import WhyChats from "components/CardComponent/why-chats"
import MobileNav from "components/Navbar/MobileNav"
import CarAnimation from "components/CardComponent/carAnimation"
import Link from "next/link"

export default function Dashboard() {
  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full ">
        <MobileNav />
        <DashboardNav />
        <div className="paddings mt-24 flex h-auto w-full justify-between max-sm:mb-10 xl:mt-32">
          <div className="flex w-full max-md:flex-col max-md:px-0 max-sm:gap-4 md:mb-16 xl:gap-24">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
                <img src="/chats transparent 1.png" alt="" className="w-7" />
                <p className="text-sm">Government agencies</p>
              </div>
              <motion.h2
                className="max-w-[703px] text-4xl font-medium max-sm:text-3xl md:leading-[50px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Take Control of Aid Delivery: Streamline <span className="text-[#05F29A]">Disbursement</span> & Track
                Impact
              </motion.h2>

              <motion.p
                className="paragraph mt-2 max-w-[583px] text-base font-normal"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Support causes that align with your values through a platform built for transparency and impact. Whether
                you choose to donate publicly or anonymously, the donor dashboard gives you full control, real-time
                updates, and detailed insights into how your contributions are making a difference
              </motion.p>

              <Link
                href="https://calendly.com/convexitytech/chats"
                target="_blank"
                className="slide-button relative mt-4 flex overflow-hidden rounded-full border px-5 py-2 text-sm"
              >
                <div className="btn-img-element absolute bottom-0 left-0"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Signup
              </Link>
            </div>

            {/* Wrapper for the image and overlay */}
            <div className="relative">
              {/* Overlay Image */}
              <div className="absolute right-52 top-[50%] z-10 h-[50%] w-full max-sm:hidden">
                <Image
                  src="/gov/image 47.webp" // Replace with your overlay image path
                  alt="Overlay"
                  height={221} // 50% of the original image height
                  width={445} // Same as the original image width
                  className="object-cover"
                />
              </div>

              {/* Overlay Image - Positioned at the bottom on mobile */}
              <div className="absolute bottom-[-60px] left-10 z-10 w-[80%] max-md:right-auto max-md:top-auto max-md:h-[30%] xl:hidden">
                <Image
                  src="/gov/image 47.webp" // Replace with your overlay image path
                  alt="Overlay"
                  height={221} // 50% of the original image height
                  width={445} // Same as the original image width
                  className="object-cover"
                />
              </div>

              <div className="absolute right-14 top-0 z-10 h-[50%] w-full xl:top-[10%]">
                <Image
                  src="/gov/Vector.png" // Replace with your overlay image path
                  alt="Overlay"
                  height={109.17} // 50% of the original image height
                  width={111} // Same as the original image width
                  className="object-cover"
                />
              </div>

              {/* Original Image */}
              <Image src="/gov/Frame 1618874207.webp" alt="" height={442} width={600} />
            </div>
          </div>
        </div>
        <Slider />
        <AllInOne />
        <WhyChats />
        <TestimonialSection />
        <CarAnimation />

        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
