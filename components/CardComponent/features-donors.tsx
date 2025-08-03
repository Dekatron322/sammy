import { motion } from "framer-motion"
import React from "react"

const FeaturesDonors = () => {
  return (
    <div className="paddings my-10">
      <div className="flex flex-col gap-6">
        <div className="card flex w-[126px] items-center gap-2 rounded-full px-[20px] py-2">
          <img src="/chats transparent 1.png" alt="" className="w-7" />
          <p className="text-sm">Features</p>
        </div>
        <motion.h2
          className=" h-full  max-w-[756px] text-4xl font-medium max-sm:text-3xl md:leading-[50px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Everything You’re Looking For to Manage Campaigns, Track Progress, and Drive Real Impact
        </motion.h2>

        <div className="grid w-full gap-10 xl:grid-cols-2">
          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px] ">
              <img
                src="/donors/Frame 1618874149 (4).png"
                alt=""
                className="max-sm:px-4 max-sm:pt-10 xl:max-h-[306px] xl:max-w-[560px]"
              />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Campaign Selection and Contributions</h2>
            <p className="paragraph max-w-[529px]">
              Browse active campaigns and contribute to those that align with your goals. Donate publicly or anonymously
              and track your contributions effortlessly.
            </p>
          </div>
          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px]">
              <img
                src="/donors/Frame 1618874149 (5).png"
                alt=""
                className="max-sm:px-4 max-sm:pt-10 xl:max-h-[306px] xl:max-w-[560px]"
              />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Flexible Payment Options</h2>
            <p className="paragraph max-w-[529px]">
              Make donations seamlessly using cryptocurrency or traditional fiat currencies. Enjoy secure and convenient
              payment methods tailored to your preferences.
            </p>
          </div>

          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px] ">
              <img
                src="/donors/image 46.png"
                alt=""
                className="max-sm:px-4 max-sm:pt-10 xl:max-h-[306px] xl:max-w-[560px]"
              />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Vendor Transactions Overview</h2>
            <p className="paragraph max-w-[629px]">
              Easily access detailed transaction records for vendors within a selected campaign. View total amounts
              received, withdrawals made, and the remaining balance for full transparency and financial oversight.
            </p>
          </div>
          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px] ">
              <img
                src="/donors/Frame 1618874149 (6).png"
                alt=""
                className="max-sm:px-4 max-sm:pt-10 xl:max-h-[306px] xl:max-w-[560px]"
              />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Anonymous Giving</h2>
            <p className="paragraph max-w-[529px]">
              Choose to donate without revealing your identity. Support causes discreetly while still receiving updates
              on the impact of your contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesDonors
