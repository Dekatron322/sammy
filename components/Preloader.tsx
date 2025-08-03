"use client"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#151E22] ">
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-[#05F29A] dark:border-gray-800"></div>
          </div>
          <img
            src="/chats transparent 1.png"
            alt="CHATS Logo"
            className="absolute inset-0 m-auto h-10 w-10 animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}
