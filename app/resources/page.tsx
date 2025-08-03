"use client"
import { useTheme } from "next-themes"
import DashboardNav from "components/Navbar/DashboardNav"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Footer from "components/Footer/Footer"
import MobileNav from "components/Navbar/MobileNav"
import CarAnimation from "components/CardComponent/carAnimation"
import { queryAllBlog } from "utils/blogPosts"

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface BlogPost {
  category: {
    name: string
  }
  description: string
  image: {
    url: string
  }
  slug: string
  title: string
  publishedAt?: string
}

interface BlogResponse {
  blogChatss: BlogPost[]
}

interface UnifiedBlogPost {
  img: string
  title: string
  date: string
  readTime: string
  tags: string[]
  url: string
  description?: string
  source: "api" | "static"
}

const blogEntries: UnifiedBlogPost[] = [
  {
    img: "/resources/Frame 1618874266 (1).webp",
    title: "Dive Into The Data: Key Trends Shaping Humanitarian Aid",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Insight Reports"],
    url: "/resources/dive",
    source: "static",
  },
  {
    img: "/resources/Frame 1618874266 (2).webp",
    title: "Explore Our Visual Stories And Moments",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Media Gallery"],
    url: "/resources/media-gallery",
    source: "static",
  },
  {
    img: "/resources/Frame 1618874266 (3).webp",
    title: "The CHATS Brand Kit Is Your Go-To Resource",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Brand Kit"],
    url: "/brand-kits",
    source: "static",
  },
]

const BannerSkeleton = () => (
  <div className="paddings relative h-auto w-full max-sm:mt-20 max-sm:rounded-xl xl:mt-32 xl:flex">
    {/* Mobile skeleton */}
    <div className="h-64 w-full animate-pulse rounded-t-lg bg-gray-200 dark:bg-gray-700 xl:hidden"></div>

    {/* Desktop skeleton */}
    <div className="primary-400 relative flex w-full overflow-hidden p-4 max-sm:rounded-b-lg xl:h-[408px] xl:rounded-[15px] xl:p-6">
      {/* Left image placeholder */}
      <div className="absolute left-0 top-0 h-full w-[40%] animate-pulse bg-gray-300 dark:bg-gray-600 max-sm:hidden"></div>

      {/* Content placeholder */}
      <div className="flex w-full xl:py-10">
        <div className="xl:w-[40%]"></div>
        <div className="flex flex-col items-start gap-4 xl:max-w-[704px] xl:pl-20">
          <div className="flex gap-3">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-64 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="h-8 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-16 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-10 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  </div>
)

const LoadingCard = () => (
  <div className="mb-6 overflow-hidden rounded-[10px] border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
    <div className="h-64 w-full animate-pulse bg-gray-200 dark:bg-gray-700"></div>
    <div className="p-6">
      <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 w-4/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="h-3 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  </div>
)

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const isDarkMode = theme === "dark"
  const [activeTab, setActiveTab] = useState("All")
  const [blogPost, setBlogPost] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [bannerPost, setBannerPost] = useState<UnifiedBlogPost | null>(null)

  const getBlogData = async () => {
    try {
      setLoading(true)
      const res: BlogResponse = await queryAllBlog()
      setBlogPost(res?.blogChatss || [])
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlogData()
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  const normalizedApiPosts: UnifiedBlogPost[] = blogPost.map((post) => ({
    img: post.image.url,
    title: post.title,
    date: post.publishedAt ? formatDate(post.publishedAt) : "",
    readTime: "15 min read",
    tags: [post.category.name],
    url: `/resources/${post.slug}`,
    description: post.description,
    source: "api",
  }))

  const combinedPosts: UnifiedBlogPost[] = [...normalizedApiPosts, ...blogEntries]

  useEffect(() => {
    if (blogPost.length > 0) {
      const randomIndex = Math.floor(Math.random() * blogPost.length)
      const randomPost = blogPost[randomIndex]! // Non-null assertion here
      const normalizedRandomPost: UnifiedBlogPost = {
        img: randomPost.image.url,
        title: randomPost.title,
        date: randomPost.publishedAt ? formatDate(randomPost.publishedAt) : "",
        readTime: "15 min read",
        tags: [randomPost.category.name],
        url: `/resources/${randomPost.slug}`,
        description: randomPost.description,
        source: "api",
      }
      setBannerPost(normalizedRandomPost)
    }
  }, [blogPost])

  const filteredPosts =
    activeTab === "All"
      ? combinedPosts
      : activeTab === "Blog"
      ? combinedPosts.filter((post) => post.source === "api")
      : combinedPosts.filter((post) => post.tags.includes(activeTab))

  const bannerImage = bannerPost?.img

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="h-full w-full">
      <div className="max-sm:w-full">
        <DashboardNav />
        <MobileNav />

        {/* Banner Section */}
        {loading ? (
          <BannerSkeleton />
        ) : bannerPost ? (
          <div className="paddings relative h-auto w-full max-sm:mt-20 max-sm:rounded-xl xl:mt-32 xl:flex">
            <img src={bannerPost.img} alt={bannerPost.title} className="rounded-t-lg xl:hidden" />
            <div className="primary-400 relative flex w-full overflow-hidden p-4 max-sm:rounded-b-lg xl:h-[408px] xl:rounded-[15px] xl:p-6">
              <div
                className="absolute left-0 top-0 max-sm:hidden"
                style={{
                  background: `url(${bannerImage}) center/cover no-repeat`,
                  width: "40%",
                  height: "100%",
                }}
              ></div>
              <div className="flex w-full xl:py-10">
                <div className="xl:w-[40%]"></div>
                <div className="flex flex-col items-start gap-2 xl:max-w-[704px] xl:pl-20">
                  <ul className="flex gap-2 max-sm:text-xs">
                    <li>{bannerPost.tags[0]}</li>
                    <li className="list-inside list-disc">Published {bannerPost.date}</li>
                    <li className="list-inside list-disc">
                      <span className="primary-text-900">{bannerPost.readTime}</span>
                    </li>
                  </ul>
                  <h2 className="text-start text-[32px] font-medium max-sm:text-2xl">{bannerPost.title}</h2>
                  <p className="paragraph">{bannerPost.description}</p>
                  <Link
                    href={bannerPost.url}
                    className="slide-button relative mt-2 flex overflow-hidden rounded-full border px-5 py-2 text-sm"
                  >
                    <div className="btn-img-element absolute bottom-0 left-0"></div>
                    <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="paddings relative h-auto w-full max-sm:mt-20 max-sm:rounded-xl xl:mt-32 xl:flex">
            <img src="/resources/Frame 1618874260 (3).webp" alt="Default Banner" className="rounded-t-lg xl:hidden" />
            <div className="primary-400 relative flex w-full overflow-hidden p-4 max-sm:rounded-b-lg xl:h-[408px] xl:rounded-[15px] xl:p-6">
              <div
                className="absolute left-0 top-0 max-sm:hidden"
                style={{
                  background: `url(/resources/Frame 1618874260 (3).webp) center/cover no-repeat`,
                  width: "40%",
                  height: "100%",
                }}
              ></div>
              <div className="flex w-full xl:py-10">
                <div className="xl:w-[40%]"></div>
                <div className="flex flex-col items-start gap-2 xl:max-w-[704px] xl:pl-20">
                  <ul className="flex gap-2 max-sm:text-xs">
                    <li>Blog</li>
                    <li className="list-inside list-disc">Published Nov 28, 2024</li>
                    <li className="list-inside list-disc">
                      <span className="primary-text-900">15 min read</span>
                    </li>
                  </ul>
                  <h2 className="text-start text-[32px] font-medium max-sm:text-2xl">
                    How CHATS is Revolutionizing Aid Distribution for Greater Impact
                  </h2>
                  <p className="paragraph">
                    In today&apos;s fast-paced world, ensuring aid reaches those in need efficiently, transparently, and
                    securely is more important than ever. CHATS, a cutting-edge platform designed for seamless cash and
                    voucher aid distribution........
                  </p>
                  <Link
                    href="/resources/blog-detail"
                    className="slide-button relative mt-2 flex overflow-hidden rounded-full border px-5 py-2 text-sm"
                  >
                    <div className="btn-img-element absolute bottom-0 left-0"></div>
                    <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <CarAnimation />

        <div className="paddings">
          <h2 className="mt-5 text-4xl max-sm:text-2xl">Recent Articles</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "All" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("All")}
            >
              All
            </div>
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "Blog" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Blog")}
            >
              Blog
            </div>
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "Insight Reports" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Insight Reports")}
            >
              Insight Reports
            </div>
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "Media Gallery" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Media Gallery")}
            >
              Media Gallery
            </div>
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "Brand Kit" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Brand Kit")}
            >
              Brand Kit
            </div>
          </div>

          <motion.div
            className="mt-16 grid w-full max-sm:gap-2 xl:grid-cols-3 xl:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <LoadingCard />
                  </motion.div>
                ))
              : filteredPosts.map((entry, index) => (
                  <motion.a
                    href={entry.url}
                    key={index}
                    className="primary-900 flex flex-col overflow-hidden rounded-[10px] bg-white dark:border-gray-700 dark:bg-gray-800"
                    variants={itemVariants}
                  >
                    <img src={entry.img} alt={entry.title} className="h-64 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-6">
                      <div>
                        <p className="uppercase text-[#05F29A]">{entry.tags[0] || "Blog"}</p>
                        <h3 className="mt-2 text-xl font-medium">{entry.title}</h3>
                      </div>
                      <div className="mt-auto pt-4">
                        <p>Chats Team</p>
                        <p className="paragraph text-sm">{entry.date}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
