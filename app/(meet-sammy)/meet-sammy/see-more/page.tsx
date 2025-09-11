"use client"

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "components/Icons/Icons"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there, great to have you here!",
    },
    {
      sender: "bot",
      text: "Wines and spirits are a fusion of artistry, culture, and craftsmanship. Wines, made from fermented grapes, vary in flavor based on region and aging. Spirits like whiskey, rum, and vodka are distilled, each with unique characteristics.",
    },
    {
      sender: "bot",
      text: "I explore and share insights on flavors, pairings, and the stories behind renowned brands, helping enthusiasts and newcomers appreciate every sip.",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsChatOpen(true)
    // You can add logic here to send the form data to your backend if needed
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    // Add user message
    setMessages([...messages, { sender: "user", text: newMessage }])
    setNewMessage("")

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your message! I'll get back to you with more information soon.",
        },
      ])
    }, 1000)
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/fresh-images/see-more.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <DashboardNav />

      <div className="mx-auto flex h-[calc(100vh-105px)] items-center max-sm:h-svh md:mt-10  md:px-20 3xl:mt-0">
        <div className="flex w-full max-w-3xl flex-col rounded-b-lg bg-[#FFFFFFCC] bg-opacity-90 shadow-lg backdrop-blur-sm max-sm:h-svh max-sm:p-4 max-sm:pt-20 md:h-[600px] md:p-8  3xl:h-[696px]">
          <div className="flex-1">
            {!isChatOpen ? (
              <>
                <h1 className="headfont mb-2 text-5xl font-bold text-[#800020] max-sm:text-3xl">
                  Everything about me!
                </h1>

                <p className="headfont text-xl text-gray-600 md:mb-14">Experience</p>

                <div className="grid w-full gap-4 md:grid-cols-2" onSubmit={handleFormSubmit}>
                  <div className="flex"></div>

                  <div className=""></div>
                  <div>
                    <div className="group w-full rounded-lg bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:bg-[#800020]">
                      <p className="headfont text-xl font-normal text-[#800020] group-hover:text-white">
                        -2018 - Present
                      </p>
                      <p className="text-xl font-semibold  group-hover:text-white">
                        Area Manager Nigeria, Ghana and West African Growth markets
                      </p>
                    </div>
                  </div>

                  <div className="group w-full rounded-lg bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:bg-[#800020]">
                    <p className="headfont text-xl font-normal text-[#800020] group-hover:text-white">-2016 - 2018</p>
                    <p className="text-xl font-semibold group-hover:text-white">Head of Customer Marketing </p>
                  </div>
                  <div>
                    <div className="group w-full rounded-lg bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:bg-[#800020]">
                      <p className="headfont text-xl font-normal text-[#800020] group-hover:text-white">-2015 - 2016</p>
                      <p className="text-xl font-semibold group-hover:text-white">Country Manager Nigeria & Ghana</p>
                    </div>
                  </div>

                  <div className="group w-full rounded-lg bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:bg-[#800020]">
                    <p className="headfont text-xl font-normal text-[#800020] group-hover:text-white">-2013 - 2015</p>
                    <p className="text-xl font-semibold group-hover:text-white">National On-Trade Manager</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-[500px] flex-col">
                <div className="mb-4 flex-1 space-y-4 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs rounded-lg px-4 py-2 ${
                          message.sender === "user" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Continue the conversation..."
                    className="flex-1 rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                  />
                  <button type="submit" className="rounded-md bg-[#73001A] px-4 py-2 text-white hover:bg-[#5a0015]">
                    Send
                  </button>
                </form>

                <button onClick={() => setIsChatOpen(false)} className="mt-4 text-sm text-[#800020] hover:underline">
                  Clear conversation
                </button>
              </div>
            )}
          </div>

          <div className="mt-auto flex w-full  gap-6 py-4">
            <Link href="https://www.facebook.com/share/16nYsPrn6z/?mibextid=LQQJ4d" target="_blank">
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sammy-okwandu-041ba643?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.instagram.com/simplypsalms?igsh=MXM2aDU4c29yczFvaQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </section>
  )
}
