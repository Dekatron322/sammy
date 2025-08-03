import Image from "next/image"
import React from "react"

const Slider = () => {
  return (
    <section className="primary-700 relative flex  w-full">
      <div className="img-element absolute bottom-0 left-[-10px]"></div>
      <div className="my-4 w-full gap-4 max-md:flex-col max-md:px-0">
        <div className="flex w-full flex-col items-center justify-center gap-4 ">
          <div className="border-color-100 w-full overflow-hidden ">
            <div className="scroll-containers animate-infinite-scroll flex w-max gap-[21px]">
              <div className="flex gap-[21px]">
                <Image height={163} width={463} src="/donors/Frame 1618874193.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874194.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874195.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874196.webp" alt="" />
              </div>

              <div className="flex gap-[21px]">
                <Image height={163} width={463} src="/donors/Frame 1618874193.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874194.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874195.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874196.webp" alt="" />
              </div>
              <div className="flex gap-[21px]">
                <Image height={163} width={463} src="/donors/Frame 1618874193.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874194.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874195.webp" alt="" />
                <Image height={163} width={463} src="/donors/Frame 1618874196.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
