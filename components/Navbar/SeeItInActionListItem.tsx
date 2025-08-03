import Link from "next/link"
import React, { useState } from "react"

const SeeItInActionListItem = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex min-h-[246px] w-full flex-col justify-between gap-4">
      {/* Background Image Div with Overlay */}
      <div
        className="group relative h-[115.5px] rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: "url('/9b5f84fecb3b03c6b8861c2ce579f9aa.jpeg')" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 rounded-[20px] bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-70"
          }`}
        ></div>
        {/* Content */}
        <Link
          href="https://youtube.com/playlist?list=PL2YlPy0isjpLck5eQcWLwsRRGLQzzDhHK&si=meA-bj_VAjuJwVi1"
          target="_blank"
          className="relative z-10 flex h-full items-center justify-center gap-2 px-4 text-sm font-bold uppercase text-white"
        >
          <img src="/logos_youtube-icon.png" alt="" className="h-[27.42px] w-[39px]" />
          <div className="flex w-full flex-col gap-1">
            <p>See It in Action: Stories That Inspire</p>
            {/* Animated Background Div */}
            <div
              className={`h-[7px] w-full rounded-[2px] bg-[length:200%_100%] ${
                isHovered
                  ? "animate-scroll-timeline bg-gradient-to-r from-[#05F29A] via-[#05F29A] to-[#05F29A]"
                  : "bg-[#ffffff]"
              }`}
            ></div>
          </div>
        </Link>
      </div>

      {/* Bottom Section */}
      <Link
        href="/resources"
        className="relative flex h-[115.5px] w-full items-center justify-center gap-4 rounded-[20px] bg-[#151E22] px-6"
      >
        <div className="img-element-eight absolute bottom-0 right-0"></div>
        <img src="/si_webcam-line.png" alt="" className="h-[33px] w-[33px]" />
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#FFFFFFE5]">
            Learn How CHATS is Revolutionizing Aid Distribution in Our Live Webinar!
          </p>
          <p className="text-xs text-[#05F29A]">Save your space</p>
        </div>
      </Link>
    </div>
  )
}

export default SeeItInActionListItem
