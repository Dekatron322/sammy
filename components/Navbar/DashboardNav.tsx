import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { FaC } from "react-icons/fa6"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "components/Icons/Icons"

const DashboardNav = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = theme === "light"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  if (!mounted) {
    return null
  }

  // Function to check if a link is active
  const isActive = (href: string) => {
    return pathname === href
  }

  // Hamburger menu variants for animation
  const hamburgerVariants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0 },
  }

  const hamburgerVariants2 = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  }

  const hamburgerVariants3 = {
    open: { rotate: -45, y: -7 },
    closed: { rotate: 0 },
  }

  return (
    <>
      {/* Mobile Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="fixed left-0 right-0 top-0 z-50 flex justify-center backdrop-blur xl:hidden"
      >
        <div className="hero-container paddings z-50 flex w-full items-center justify-between py-3 backdrop-blur">
          {/* Logo/Image */}

          {/* Hamburger Menu Button */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center rounded-md focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="mb-1.5 h-0.5 w-6 bg-current"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={hamburgerVariants}
            />
            <motion.span
              className="mb-1.5 h-0.5 w-6 bg-current"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={hamburgerVariants2}
            />
            <motion.span
              className="h-0.5 w-6 bg-current"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={hamburgerVariants3}
            />
          </button>
          <Link target="_blank" href="https://calendly.com/convexitytech/chats">
            <Image src="/fresh-images/image.png" height={40} width={40} alt="Logo" />
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 mt-16 w-full bg-white/90 dark:bg-black/90"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex h-full w-full flex-col items-center justify-between py-8">
            <div></div>
            <div className="flex flex-col items-center space-y-8">
              <Link
                className={`text-2xl transition-all duration-200 ease-in-out hover:text-[#800020] ${
                  isActive("/") ? "font-medium text-[#800020]" : ""
                }`}
                href="/"
              >
                About
              </Link>

              <Link
                className={`text-2xl transition-all duration-200 ease-in-out hover:text-[#800020] ${
                  isActive("/meet-sammy") ? "font-medium text-[#800020]" : ""
                }`}
                href="/meet-sammy"
              >
                Meet Sammy
              </Link>

              <Link
                className={`text-2xl transition-all duration-200 ease-in-out hover:text-[#800020] ${
                  isActive("/portfolio") ? "font-medium text-[#800020]" : ""
                }`}
                href="/portfolio"
              >
                Portfolio
              </Link>

              <Link
                className={`text-2xl transition-all duration-200 ease-in-out hover:text-[#800020] ${
                  isActive("/services") ? "font-medium text-[#800020]" : ""
                }`}
                href="/services"
              >
                Services
              </Link>
            </div>

            {/* Social icons container fixed at bottom */}
            <div className="flex w-full items-center justify-between px-20 pb-8">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <YoutubeIcon />
              <TwitterIcon />
            </div>
          </div>
        </motion.div>
      )}

      {/* Desktop Navbar (hidden on mobile) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="fixed left-0 right-0 top-0 z-50 hidden justify-center backdrop-blur max-xl:hidden xl:flex"
      >
        <div className="hero-container paddings z-50 flex w-full items-center justify-between backdrop-blur">
          <div className="flex cursor-pointer items-center gap-10">
            <Link
              className={`transition-all duration-200 ease-in-out hover:text-[#800020] ${
                isActive("/") ? "font-medium text-[#800020]" : ""
              }`}
              href="/"
            >
              About
            </Link>

            <Link
              className={`transition-all duration-200 ease-in-out hover:text-[#800020] ${
                isActive("/meet-sammy") ? "font-medium text-[#800020]" : ""
              }`}
              href="/meet-sammy"
            >
              Meet Sammy
            </Link>

            <Link
              className={`transition-all duration-200 ease-in-out hover:text-[#800020] ${
                isActive("/portfolio") ? "font-medium text-[#800020]" : ""
              }`}
              href="/portfolio"
            >
              Portfolio
            </Link>

            <Link
              className={`transition-all duration-200 ease-in-out hover:text-[#800020] ${
                isActive("/services") ? "font-medium text-[#800020]" : ""
              }`}
              href="/services"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link target="_blank" href="https://calendly.com/convexitytech/chats">
              <Image src="/fresh-images/image.png" height={48} width={48} alt="" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default DashboardNav
