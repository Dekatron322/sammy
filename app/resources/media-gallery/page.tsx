"use client"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import MobileNav from "components/Navbar/MobileNav"
import { queryAllBlog, querySingleBlog } from "utils/blogPosts"
import { useParams } from "next/navigation"
import Link from "next/link"

const blogEntries = [
  {
    img: "/resources/Frame 1618874266.webp",
    title: "Fresh Perspectives: Explore The Latest In Aid Innovation With CHATS...",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Blog"],
  },
  {
    img: "/resources/Frame 1618874266 (1).webp",
    title: "Dive Into The Data: Key Trends Shaping Humanitarian Aid",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Insight Reports"],
  },
  {
    img: "/resources/Frame 1618874266 (2).webp",
    title: "Explore Our Visual Stories And Moments",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Media Gallery"],
  },
  {
    img: "/resources/Frame 1618874266 (3).webp",
    title: "The CHATS Brand Kit Is Your Go-To Resource",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Brand Kit"],
  },
]

interface SingleBlogResponse {
  blogChats: {
    category: {
      name: string
    }
    description: string
    image: {
      url: string
    }
    slug: string
    title: string
    content: {
      html: string
    }
    publishedAt: string
  }
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

const MediaGallerySkeleton = () => (
  <div className="paddings xl:mt-32">
    <div className="xl:px-40">
      {/* Header Skeleton */}
      <div className="w-full">
        <div className="mb-[23px] flex gap-2">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="mb-5  h-10 w-[476px] animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>

      {/* Gallery Grid Skeleton */}
      <div className="mb-6 mt-3 grid w-full grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 overflow-hidden">
            {i % 3 === 1 ? (
              <div className="h-[400px] w-full animate-pulse rounded-[10px] bg-gray-200 dark:bg-gray-700"></div>
            ) : (
              <>
                <div className="h-[190px] w-full animate-pulse rounded-[10px] bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-[190px] w-full animate-pulse rounded-[10px] bg-gray-200 dark:bg-gray-700"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Author Section Skeleton */}
      <div className="border-color-100 mb-10 flex w-full items-center justify-between border-b border-t py-3">
        <div className="flex items-center gap-3">
          <div className="h-[57px] w-[57px] animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div>
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-2 flex gap-2">
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 w-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          ))}
        </div>
      </div>
    </div>

    {/* Read More Skeleton */}
    <div>
      <div className="mb-10 h-8 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-11">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="mb-6 overflow-hidden rounded-[10px] border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="h-64 w-full animate-pulse bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-10">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="mt-2 h-3 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Skeleton */}
    <div className="primary-100 mt-12 flex h-[371px] w-full animate-pulse flex-col items-center justify-center gap-4 rounded-[20px] bg-gray-200 dark:bg-gray-700">
      <div className="h-[69px] w-[162px] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-6 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-16 w-full max-w-[598px] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-10 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
    </div>
  </div>
)

const MediaGallery = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("All")
  const [blogPost, setBlogPost] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<SingleBlogResponse["blogChats"] | null>(null)
  const params = useParams()
  const slug = params.slug as string

  const filteredEntries =
    activeTab === "All" ? blogEntries : blogEntries.filter((entry) => entry.tags.includes(activeTab))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const getBlogPost = async () => {
    try {
      setLoading(true)
      const response = await querySingleBlog(slug)
      setPost(response.blogChats)
    } catch (error) {
      console.error("Error fetching blog post:", error)
    } finally {
      setLoading(false)
    }
  }

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
    if (slug) {
      getBlogPost()
    }
    getBlogData()
  }, [slug])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div>
        <DashboardNav />
        <MobileNav />
        <MediaGallerySkeleton />
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <DashboardNav />
      <MobileNav />
      <div className="paddings xl:mt-32">
        <div className="xl:px-40">
          {/* Animated Grid */}
          <div className="w-full">
            <ul className="mb-[23px] flex gap-2">
              <li>Blog</li>
              <li className="list-inside list-disc">Published November 28, 2024</li>
              <li className="list-inside list-disc">
                <span className="primary-text-900">15 min read</span>
              </li>
            </ul>
            <h2 className="mb-5 text-3xl xl:w-[476px]">Explore Our Visual Stories and Moments</h2>

            <div className="content-section">
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen
              </p>
            </div>
          </div>
          <motion.div
            className="mb-6 grid w-full grid-cols-3 justify-start gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874304.png" alt="" className="h-full rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874304.png" alt="" className="h-full rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900 flex flex-col gap-4 overflow-hidden" variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
          </motion.div>
          <div className="content-section">
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen
            </p>
          </div>

          <div className="border-color-100 mb-10 flex w-full items-center justify-between border-b border-t py-3">
            <div className="flex items-center">
              <Image src="/resources/Frame 1618874298.png" width={57} height={57} alt="" />
              <div>
                <p>Chats Team</p>
                <ul className="flex gap-2 text-xs">
                  <li className="">December 27, 2024 </li>
                  <li className="list-inside list-disc">
                    <span className="primary-text-900">15 min read</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/resources/skill-icons_instagram.png" alt="" className="h-6 w-6" />
              <img src="/resources/devicon_linkedin.png" alt="" className="h-6 w-6" />
              <img src="/resources/prime_twitter.png" alt="" className="h-6 w-6" />
              <img src="/resources/link-2.png" alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="mb-10 text-4xl">Read More</h2>
          <motion.div
            className="grid w-full xl:mt-16 xl:grid-cols-3 xl:gap-11"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPost.map((entry, index) => (
              <motion.a
                href={`/resources/${entry.slug}`}
                key={index}
                className="primary-900 mb-6 flex flex-col overflow-hidden rounded-[10px] bg-white dark:border-gray-700 dark:bg-gray-800"
                variants={itemVariants}
              >
                <img src={entry.image.url} alt={entry.title} className="h-64 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <p className="uppercase text-[#05F29A]">{"Blog"}</p>
                    <h3 className="mt-2 text-xl font-medium">{entry.title}</h3>
                  </div>
                  <div className="mt-auto pt-4">
                    <p>Chats Team</p>
                    <p className="paragraph text-sm">{entry.publishedAt ? formatDate(entry.publishedAt) : ""}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="primary-100 gridBackground flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
          <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
          <p className="faq-text-header text-xl">Still have questions?</p>
          <p className="faq-text-paragraph max-w-[598px] px-4 text-center">
            Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
            or concerns, and we&lsquo;ll get back to you promptly
          </p>
          <Link href="contact-us" className="faq-border rounded-md border px-5 py-2 text-sm">
            Get in touch
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MediaGallery
