"use client"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <>
      <section id="contact" className="paddings footer-bg w-full ">
        <div className="border-color-100 flex w-full border-b py-10  ">
          <div className=" flex w-full justify-between gap-10 max-sm:grid max-sm:w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 max-sm:mb-7  xl:max-w-[361px]">
              <img src="/chats transparent 1 (1).png" alt="" className="h-[55px] w-[179.08px]" />
              <p className="paragraph">
                CHATS empowers humanitarian efforts with seamless, transparent, and secure cash and voucher aid
                distribution.
              </p>
              <p className="paragraph text-sm">Sign up to receive updates, stories, and news</p>
              <div className="flex gap-2 ">
                <input
                  type="text"
                  id="placement"
                  placeholder="Email"
                  className="border-color rounded-md border bg-transparent p-2 text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <button className="primary-100 primary-text-200 flex items-center justify-center gap-2 rounded-lg px-4 text-sm font-normal uppercase max-sm:text-[10px]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex w-full justify-between max-sm:grid max-sm:grid-cols-2">
              {/* Column 2 */}
              <div className="flex flex-col gap-4 max-sm:mb-7 ">
                <p className="font-bold xl:text-xl">Quick Link</p>
                <Link href="/" className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]">
                  Home
                </Link>
                <Link
                  href="/solutions"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Solutions
                </Link>
                <Link href="/faqs" className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]">
                  FAQs
                </Link>
                <Link href="/glossary" className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]">
                  Glossary
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Contact Us
                </Link>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 max-sm:mb-7">
                <p className="font-bold xl:text-xl">Resources</p>
                <Link
                  href="/resources/dive"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Insight Report
                </Link>
                <Link
                  href="/resources"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Blog
                </Link>
                <Link
                  href="/resources/media-gallery"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Media Gallery
                </Link>
                <Link
                  href="/brand-kits"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Brand Kit
                </Link>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4 max-sm:mb-7">
                <p className="font-bold xl:text-xl">Legal</p>
                <Link
                  href="/privacy-policy"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]">
                  Disclaimer
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  Cookie Policy
                </Link>
              </div>

              {/* Column 5 */}
              <div className="flex flex-col gap-4 max-sm:mb-7 xl:w-[207px]">
                <p className="font-bold">Contact Us</p>
                <p className="text-sm">3 Rabat Street, off Herbert Macaulay Way, Zone 6 Wuse</p>
                <Link
                  href="tel:+234 909 550 2060 "
                  className="text-sm transition-all duration-300 ease-in-out hover:text-[#05F29A]"
                >
                  +234 909 550 2060
                </Link>
                <div className="flex w-full gap-[15px]">
                  <Link href="https://instagram.com/withconvexity" target="_blank">
                    <img src="/skill-icons_instagram.png" className="h-[23.53px] w-[23.53px]" />
                  </Link>
                  <Link href="https://linkedin.com/convexity">
                    <img src="/devicon_linkedin.png" className="h-[23.53px] w-[23.53px]" />
                  </Link>
                  <Link href="https://www.youtube.com/@withconvexity" target="_blank">
                    <img src="/Frame 1618874081 (1).png" className="h-[23.53px] w-[23.53px]" />
                  </Link>
                  <Link href="https://facebook.com/convexity" target="_blank">
                    <img src="/15707884.png" className="h-[23.53px] w-[23.53px]" />
                  </Link>
                  <Link href="https://twitter.com/withconvexity_" target="_blank">
                    <img src="/prime_twitter.png" className="h-[23.53px] w-[23.53px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-10 ">
          <p className="paragraph max-sm:text-center">
            © 2024 CHATS Platform. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer
