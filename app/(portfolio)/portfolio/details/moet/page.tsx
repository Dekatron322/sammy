"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import DashboardNav from "components/Navbar/DashboardNav"

export default function HeroSection() {
  const router = useRouter()
  const handleReturn = () => router.back()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <motion.div
        className="paddings mt-24 flex flex-col max-sm:mt-14"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.button
          onClick={handleReturn}
          className="mt-2 h-10 w-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
        >
          <img src="/fresh-images/return.png" className="h-full w-full" />
        </motion.button>

        <motion.div className="relative mt-10" variants={containerVariants}>
          <motion.div
            className="relative flex h-[400px] w-full items-center justify-between overflow-visible rounded-lg bg-[#4B4A4A] p-8 max-sm:h-[300px]"
            variants={scaleUp}
          >
            <div className="relative z-10 max-sm:mb-10">
              <motion.p className="headfont text-3xl text-white" variants={fadeInVariants}>
                Moet Hennessy
              </motion.p>
              <motion.p className="text-white" variants={fadeInVariants}>
                Portfolio
              </motion.p>
            </div>
            <motion.img
              src="/fresh-images/moet.png"
              alt=""
              className="absolute z-10 w-[151px] max-sm:-top-[20%] max-sm:right-0 max-sm:w-[120px] md:-top-[20%] md:right-8"
              variants={slideInFromRight}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 flex h-[122px] items-center rounded-b-lg bg-[#FF972D] p-8"
              variants={itemVariants}
            >
              <img src="/fresh-images/path221.svg" alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-7 flex w-full flex-col justify-center md:items-center md:text-center"
            variants={containerVariants}
          >
            <motion.p
              className="headfont text-5xl font-semibold text-[#800020] max-sm:text-3xl"
              variants={itemVariants}
            >
              My Moët Hennessy Story
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              Expanding luxury markets and reshaping how Africa connects with premium wines and spirits
            </motion.p>

            <motion.div
              className="mt-7 flex w-full flex-col md:items-center md:rounded-xl md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              variants={scaleUp}
            >
              <motion.p className="mt-2 text-lg font-bold text-[#10172099] md:text-center" variants={fadeInVariants}>
                Purpose and deeper achievements
              </motion.p>
              <motion.p className="mt-2 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                At Moët Hennessy, Sammy spearheaded transformative brand education programs that reached more than 5,000
                stakeholders and produced the company&apos;s first Africa-adapted consumer brochure, setting new
                standards for accessible luxury. He played a vital role in expanding Moët Hennessy&apos;s presence in
                Nigeria&apos;s prestige markets, driving a 15% growth in high-end outlets in just one year. His
                pioneering digital learning platform trained over 700 service professionals in six months, earning him
                Moët & Chandon&apos;s global &apos;Wine Credo&apos; award. Sammy&apos;s work elevated the market share
                of key brands like Belvedere Vodka and Hennessy Cognac through immersive consumer experiences and
                data-driven strategies that continue to shape the premium lifestyle space in Africa
              </motion.p>
              <motion.p className="my-4 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                Sammy Okwandu is a dynamic marketing and brand strategy leader with over seven years of experience
                elevating premium wines and spirits across Nigeria and West Africa. At Moët Hennessy Nigeria, Sammy
                became known for his passion for brand storytelling, consumer engagement, and innovative approaches that
                reshaped how luxury brands connect with their audience.
              </motion.p>

              <motion.div
                className="flex items-center justify-between gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="font-bold text-white max-sm:text-center max-sm:text-sm" variants={fadeInVariants}>
                  5,000+ engaged in education initiative
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.div className="mt-10 grid gap-10 max-sm:gap-4 md:grid-cols-2" variants={containerVariants}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    className="flex w-full flex-col gap-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={`/fresh-images/01${item}.svg`} alt="" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
