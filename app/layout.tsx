import "styles/tailwind.css"
import { Metadata } from "next"
import ThemeProviders from "components/ProvidersComponents/ThemeProviders"
// import PreloaderWrapper from "components/PreloaderWrapper"

const satoshi = {
  className: "font-satoshi",
  style: {
    fontFamily: "Satoshi, sans-serif",
    fontDisplay: "swap",
  },
}

export const metadata: Metadata = {
  title: "Chats",
  description:
    "CHATS transforms the future of humanitarian efforts with verifiable solutions for cash and voucher aid. Our platform enhances donor confidence and enables NGOs to deliver impactful, transparent campaign",
  icons: {
    icon: [
      { url: "/chats transparent 1.png" },
      { url: "/chats transparent 1.png", sizes: "16x16", type: "image/png" },
      { url: "/chats transparent 1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://github.com/Dekatron322/chat-landing/blob/main/public/body.jpeg?raw=true",
    images: [
      {
        width: 1200,
        height: 630,
        url: "#",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={satoshi.className} style={satoshi.style}>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
