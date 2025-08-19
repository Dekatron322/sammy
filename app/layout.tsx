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
  title: "sammyokwandu",
  description:
    "I'm Sammy Okwandu, a passionate connoisseur of wines and spirits. Unraveling flavors is more than a pastime — it's a journey.",

  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "#",
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
