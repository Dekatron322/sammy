"use client"

import { DeleteIcon, DeleteIcon2, PlusIcon, RecentChatIcon, ReturnIcon } from "components/Icons/Icons"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState<Array<Array<{ sender: string; text: string }>>>([])
  const [currentChat, setCurrentChat] = useState<Array<{ sender: string; text: string }>>([
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
    const updatedChat = [...currentChat, { sender: "user", text: newMessage }]
    setCurrentChat(updatedChat)
    setNewMessage("")

    // Simulate bot response after a delay
    setTimeout(() => {
      const withBotResponse = [
        ...updatedChat,
        {
          sender: "bot",
          text: "Thanks for your message! I'll get back to you with more information soon.",
        },
      ]
      setCurrentChat(withBotResponse)
    }, 1000)
  }

  const startNewChat = () => {
    if (currentChat.length > 0) {
      setChatHistory([...chatHistory, currentChat])
    }
    setCurrentChat([
      {
        sender: "bot",
        text: "Hi there! Starting a new conversation. How can I help you today?",
      },
    ])
  }

  const clearCurrentChat = () => {
    if (currentChat.length > 0) {
      setChatHistory([...chatHistory, currentChat])
    }
    setCurrentChat([])
    setIsChatOpen(false)
  }

  const loadChatFromHistory = (chatIndex: number) => {
    if (currentChat.length > 0) {
      setChatHistory([...chatHistory, currentChat])
    }
    setCurrentChat(chatHistory[chatIndex] as any)
    setIsChatOpen(true)
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/fresh-images/bgimage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <DashboardNav />

      <div className=" flex h-[calc(100vh-80px)]  items-center gap-6 max-sm:h-screen md:px-24">
        {isChatOpen && (
          <div className="flex h-[550px] w-[250px] flex-col justify-between rounded-xl bg-[#FFFFFFCC] p-2 max-sm:hidden">
            <div className="flex w-full flex-col gap-4">
              <p className="border-b border-[#80002033]">Chat History</p>
              <button
                onClick={startNewChat}
                className="flex items-center rounded-md bg-gray-200 px-4 py-2 text-[#101720CC] shadow-lg hover:bg-gray-300"
              >
                <PlusIcon />
                Start New Chat
              </button>
              <div className="itens-center flex w-full gap-2 overflow-hidden rounded-lg bg-[#FFFFFFCC] p-2">
                <RecentChatIcon />
                <p>More about what you...</p>
              </div>
            </div>
            <button
              onClick={clearCurrentChat}
              className="flex items-center rounded-md bg-gray-200 px-4 py-2 text-[#101720CC] shadow-lg hover:bg-gray-300"
            >
              <DeleteIcon />
              Clear conversation
            </button>
          </div>
        )}

        <div className="w-full max-w-3xl rounded-lg bg-[#FFFFFFCC] bg-opacity-90 p-8 shadow-lg backdrop-blur-sm max-sm:h-screen max-sm:p-4">
          {!isChatOpen ? (
            <>
              <h1 className="headfont mb-2 text-5xl font-bold text-[#800020] max-sm:mt-14 max-sm:text-3xl">
                What would you like to know?
              </h1>

              <p className="mb-14 text-gray-600">
                I'm always open to new projects and conversations. Feel free to reach out anytime let's create something
                unforgettable. Sláinte! 🍷
              </p>

              <div className="mb-8 border-l-2 border-[#800020] pl-2 ">
                <div className="flex items-center gap-2">
                  <Image src="/fresh-images/whatsapp.png" alt="" height={20} width={20} />
                  <p className="text-gray-700">+44(0)7308475893</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/fresh-images/email.png" alt="" height={20} width={20} />
                  <p className="text-gray-700">info@sammyokwandu.com</p>
                </div>
              </div>

              {chatHistory.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#800020]">Previous Conversations</h3>
                  <div className="space-y-2">
                    {chatHistory.map((chat, index) => (
                      <button
                        key={index}
                        onClick={() => loadChatFromHistory(index)}
                        className="w-full rounded-md bg-gray-100 p-2 text-left hover:bg-gray-200"
                      >
                        <p className="truncate text-gray-700">
                          Chat {index + 1} - {chat[0]?.text.substring(0, 50)}...
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1  w-full max-w-xl rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="mt-1  w-full max-w-xl rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                    placeholder="Where can I reach you?"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let's talk wines & spirits. what's on your mind?"
                    className="mt-1  w-full max-w-xl rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="rounded-md bg-[#73001A] px-8 py-3 text-white hover:bg-[#5a0015]"
                >
                  Let's talk
                </motion.button>
              </form>
            </>
          ) : (
            <div className="flex h-[500px] flex-col max-sm:mt-14">
              <div className="mb-4 flex w-full justify-between border-b-2 border-[#80002033] pb-2">
                <ReturnIcon />
                <DeleteIcon2 />
              </div>
              <div className="mb-4 flex-1 space-y-4 overflow-y-auto">
                {currentChat.length === 0 ? (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-gray-500">No messages in this chat yet</p>
                  </div>
                ) : (
                  currentChat.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs rounded-lg px-4 py-2 ${
                          message.sender === "user" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2 ">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                />
                <button type="submit" className="rounded-md bg-[#73001A] px-4 py-2 text-white hover:bg-[#5a0015]">
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
