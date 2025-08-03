import { motion } from "framer-motion"
import React from "react"

const Features = () => {
  return (
    <div className="paddings my-10">
      <div className="flex flex-col gap-6">
        <div className="card flex w-[126px] items-center gap-2 rounded-full px-[20px] py-2">
          <img src="/chats transparent 1.png" alt="" className="w-7" />
          <p className="text-sm">Features</p>
        </div>
        <motion.h2
          className=" max-sm:text-3xlfont-medium  h-full max-w-[756px]  text-4xl max-sm:text-2xl md:leading-[50px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Everything You’re Looking For to Manage Campaigns, Track Progress, and Drive Real Impact
        </motion.h2>

        <div className="grid w-full gap-10 xl:grid-cols-2">
          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px]">
              <img src="/Frame 1618874149.png" alt="" className="max-h-[306px] max-sm:hidden xl:max-w-[560px]" />
              <img src="/Frame 1618874149 (7).png" className="px-4 pt-10 xl:hidden" />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Campaign Management Dashboard</h2>
            <p className="paragraph xl:max-w-[529px]">
              Effortlessly plan, organize, and oversee your campaigns from start to finish. CHATS gives you full control
              and visibility into every aspect of your humanitarian initiatives
            </p>
          </div>
          <div>
            <div className="primary-400 ] flex items-end justify-center rounded-[10px] xl:h-[357px]">
              <img src="/Frame 1618874149 (1).png" alt="" className="max-h-[306px] max-w-[560px] max-sm:hidden" />
              <img src="/Frame 1618874149 (8).png" className="px-4 pt-10 xl:hidden" />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Beneficiary Verification</h2>
            <p className="paragraph max-w-[529px]">
              Ensure aid reaches the right people with advanced verification tools. Validate beneficiary information
              quickly and securely, reducing errors and building trust with stakeholders.
            </p>
          </div>

          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px]  xl:h-[357px]">
              <img src="/Frame 1618874149 (2).png" alt="" className="max-h-[306px] max-w-[560px] max-sm:hidden" />
              <img src="/Frame 1618874149 (9).png" className="px-4 pt-10 xl:hidden" />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Vendor Transactions Overview</h2>
            <p className="paragraph max-w-[629px]">
              Easily access detailed transaction records for vendors within a selected campaign. View total amounts
              received, withdrawals made, and the remaining balance for full transparency and financial oversight.
            </p>
          </div>
          <div>
            <div className="primary-400 flex items-end justify-center rounded-[10px] xl:h-[357px] ">
              <img src="/Frame 1618874149 (3).png" alt="" className="max-h-[306px] max-w-[560px] max-sm:hidden" />
              <img src="/Frame 1618874149 (10).png" className="px-4 pt-10 xl:hidden" />
            </div>
            <h2 className="mb-2 mt-6 text-2xl font-medium">Donor Reporting</h2>
            <p className="paragraph max-w-[529px]">
              Generate detailed, real-time reports to keep donors informed and engaged. Highlight campaign progress,
              fund allocation, and impact metrics to maintain transparency and accountability
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
