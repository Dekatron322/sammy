import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const GetInTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="paddings flex w-full flex-col items-center justify-center"
    >
      <h2 className="mb-[15px] text-5xl max-sm:text-3xl">Get in touch with our team</h2>
      <p className="paragraph text-xl">Lets know how we can help you</p>

      <div className="my-10 grid w-full gap-5 max-sm:px-6 xl:grid-cols-3">
        <div className="primary-900 flex h-[283px] w-full flex-col gap-[35px] rounded-[10px] px-5 py-10 xl:px-20">
          <Image src="/contact-us/Frame 1618873473.png" alt="" height={61} width={61} />
          <div>
            <h2 className="text-2xl font-bold">Chat to support</h2>
            <p className="paragraph">Our team is here to help!</p>
          </div>
          <Link href="mailto:info@withconvexity.com" className="underline">
            Send a message
          </Link>
        </div>
        <div className="primary-900 flex h-[283px] w-full flex-col gap-[35px] rounded-[10px] px-5 py-10 xl:px-20">
          <Image src="/contact-us/Frame 1618873473 (1).png" alt="" height={61} width={61} />
          <div>
            <h2 className="text-2xl font-bold">Visit Us</h2>
            <p className="paragraph">Our sales team is here to help!</p>
          </div>
          <Link href="#" className="underline">
            view on google map
          </Link>
        </div>
        <div className="primary-900 flex h-[283px] w-full flex-col gap-[35px] rounded-[10px] px-5 py-10 xl:px-20">
          <Image src="/contact-us/Frame 1618873473 (2).png" alt="" height={61} width={61} />
          <div>
            <h2 className="text-2xl font-bold">Call us</h2>
            <p className="paragraph">Mon-Fri from 9am - 4pm</p>
          </div>
          <Link href="tel:+234 909 550 2060 " className="underline">
            +234 909 550 2060
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default GetInTouch
