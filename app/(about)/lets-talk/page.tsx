"use client"

import { DeleteIcon, DeleteIcon2, PlusIcon, RecentChatIcon, ReturnIcon } from "components/Icons/Icons"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface ChatMessage {
  sender: string
  text: string
}

interface ApiChatHistory {
  query: string
  resp: string
  email: string
  results: Array<{
    user: string
    bot: string
  }>
}

export default function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState<ChatMessage[][]>([])
  const [currentChat, setCurrentChat] = useState<ChatMessage[]>([
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
  const [isLoading, setIsLoading] = useState(false)

  const fetchChatHistory = async (email: string) => {
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch(`http://api.sammyokwandu.com/messages/${email}/`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: ApiChatHistory = (await response.json()) as any

      // Convert API response to chat history format
      const history: ChatMessage[][] = []
      data.results.forEach((result) => {
        history.push([
          { sender: "user", text: result.user },
          { sender: "bot", text: result.bot },
        ])
      })

      setChatHistory(history)
    } catch (error) {
      console.error("Failed to fetch chat history:", error)
      // Set empty array instead of leaving it undefined
      setChatHistory([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // If contact field contains an email, fetch chat history
    if (formData.contact.includes("@")) {
      await fetchChatHistory(formData.contact)
    }

    setIsChatOpen(true)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    // Add user message
    const updatedChat = [...currentChat, { sender: "user", text: newMessage }]
    setCurrentChat(updatedChat)
    setNewMessage("")

    setIsLoading(true)
    try {
      // Send message to API
      const response = await fetch(`http://api.sammyokwandu.com/messages/${formData.contact}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          query: newMessage,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // Add bot response to chat
      const withBotResponse = [
        ...updatedChat,
        {
          sender: "bot",
          text:
            typeof data === "object" && data !== null && "resp" in data
              ? (data as { resp: string }).resp
              : "Thanks for your message! I'll get back to you with more information soon.",
        },
      ]
      setCurrentChat(withBotResponse)
    } catch (error) {
      console.error("Failed to send message:", error)

      // Fallback response if API fails
      const withBotResponse = [
        ...updatedChat,
        {
          sender: "bot",
          text: "Thanks for your message! I'll get back to you with more information soon.",
        },
      ]
      setCurrentChat(withBotResponse)
    } finally {
      setIsLoading(false)
    }
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

    // Use optional chaining and provide fallback to prevent undefined error
    const chatToLoad = chatHistory[chatIndex] ?? [
      {
        sender: "bot",
        text: "Starting a new conversation. How can I help you today?",
      },
    ]

    setCurrentChat(chatToLoad)
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

      <div className=" flex h-[calc(100vh-80px)] items-center  gap-6 max-sm:h-screen md:mt-24 md:px-10 2xl:mt-0 2xl:px-24">
        {isChatOpen && (
          <div className=" flex h-[550px] w-[250px] flex-col justify-between rounded-xl bg-[#FFFFFFCC] p-2 max-sm:hidden">
            <div className="flex w-full flex-col gap-4">
              <p className="border-b border-[#80002033]">Chat History</p>
              <button
                onClick={startNewChat}
                className="flex items-center rounded-md bg-gray-200 px-4 py-2 text-[#101720CC] shadow-lg hover:bg-gray-300"
              >
                <PlusIcon />
                Start New Chat
              </button>
              {chatHistory.map((chat, index) => (
                <button
                  key={index}
                  onClick={() => loadChatFromHistory(index)}
                  className="itens-center flex w-full gap-2 overflow-hidden rounded-lg bg-[#FFFFFFCC] p-2 hover:bg-gray-100"
                >
                  <RecentChatIcon />
                  <p className="truncate">{chat[0]?.text.substring(0, 20)}...</p>
                </button>
              ))}
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
              <h1 className="headfont  text-5xl font-bold text-[#800020] max-sm:mt-14 max-sm:text-3xl">
                What would you like to know?
              </h1>

              <p className="mb-4 text-gray-600">
                I&apos;m always open to new projects and conversations. Feel free to reach out anytime let&apos;s create
                something unforgettable. Sláinte! 🍷
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
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="mt-1  w-full max-w-xl rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                    placeholder="Your email address"
                    required
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
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="rounded-md bg-[#73001A] px-8 py-3 text-white hover:bg-[#5a0015] disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Let's talk"}
                </motion.button>
              </form>
            </>
          ) : (
            <div className="flex h-[500px] flex-col max-sm:mt-14">
              <div className="mb-4 flex w-full justify-between border-b-2 border-[#80002033] pb-2">
                <button onClick={() => setIsChatOpen(false)}>
                  <ReturnIcon />
                </button>
                <button onClick={clearCurrentChat}>
                  <DeleteIcon2 />
                </button>
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
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-xs rounded-lg bg-gray-100 px-4 py-2 text-gray-800">Thinking...</div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2 ">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-md bg-[#F5F5F5] p-2 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#73001A] px-4 py-2 text-white hover:bg-[#5a0015] disabled:opacity-50"
                  disabled={isLoading || newMessage.trim() === ""}
                >
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
