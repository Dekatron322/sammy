"use client"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import DashboardNav from "components/Navbar/DashboardNav"
import MobileNav from "components/Navbar/MobileNav"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
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

const calculateReadTime = (htmlContent: string) => {
  const text = htmlContent.replace(/<[^>]*>/g, "")
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / 200)) // Ensure at least 1 minute
  return `${minutes} min read`
}

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

const BlogDetails = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("All") // Set "Blog" as the default tab
  const [blogPost, setBlogPost] = useState<BlogPost[]>([])
  const filteredEntries =
    activeTab === "All" ? blogEntries : blogEntries.filter((entry) => entry.tags.includes(activeTab))

  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  }

  // Animation variants for each grid item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  const [post, setPost] = useState<SingleBlogResponse["blogChats"] | null>(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const slug = params.slug as string

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

  useEffect(() => {
    if (slug) {
      getBlogPost()
    }
  }, [slug])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

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
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <DashboardNav />
        <MobileNav />
        <div className="paddings xl:mt-32">
          <div className="flex w-full justify-center gap-10">
            {/* Left sidebar loading */}
            <div className="hidden w-1/3 flex-col gap-12 max-sm:hidden">
              <div className="primary-900 h-[302px] w-full animate-pulse rounded-[10px] bg-gray-200 p-4 dark:bg-gray-700">
                <div className="h-6 w-1/3 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
                <div className="mt-6 h-[198px] w-full animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex h-[595px] w-full animate-pulse flex-col items-center justify-center gap-10 rounded-[10px] bg-gray-200 px-6 dark:bg-gray-700">
                <div className="h-8 w-1/2 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
                <div className="relative h-[159px] w-[316px] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-16 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-10 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>

            {/* Main content loading */}
            <div className="w-full">
              <div className="mb-[23px] flex gap-2">
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div className="mb-5 h-10 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>

              <div className="relative mb-12 h-96 w-full animate-pulse overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700"></div>

              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                ))}
              </div>

              <div className="border-color-100 flex w-full items-center justify-between border-b border-t py-3">
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
          </div>

          {/* Related posts loading */}
          <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-11">
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

          <div className="primary-100 mt-12 flex h-[371px] w-full animate-pulse flex-col items-center justify-center gap-4 rounded-[20px] bg-gray-200 dark:bg-gray-700">
            <div className="h-[69px] w-[162px] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-16 w-full max-w-[598px] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-10 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <DashboardNav />
        <div className="paddings pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <Link href="/resources" className="mt-4 inline-block text-blue-500 hover:underline">
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <DashboardNav />
      <MobileNav />
      <div className="paddings mt-32 max-sm:mt-20">
        <div className="flex w-full justify-center gap-10 ">
          <div className="flex w-1/3 flex-col gap-12 max-sm:hidden">
            {/* <div className="primary-900  h-[302px] w-full overflow-hidden rounded-[10px] p-4">
              <h5 className="text-xl font-bold">QUICK LINK</h5>
              <div className="custom-scrollbar mt-6 flex h-[198px] w-full flex-col justify-center gap-7 overflow-y-auto pl-10">
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
                <p className="paragraph">About our processes</p>
              </div>
            </div> */}

            <div className="flex h-[595px] w-full flex-col items-center justify-center gap-10 rounded-[10px] bg-[#05F29A] px-6">
              <h2 className="text-2xl font-bold text-[#151E22]">NGO DASHBOARD</h2>
              <div className="relative ">
                <div className="img-element-thirty-two absolute left-0 top-10 "></div>
                <img src="/resources/Celestial-Blue.png" alt="" className=" z-50 h-[159px] w-[316.04px]" />
              </div>
              <p className="text-center text-[#151E22]">
                Manage campaigns, verify beneficiaries, and report to donors seamlessly—unlock the power of the NGO
                Dashboard today!
              </p>
              <Link
                href="https://calendly.com/convexitytech/chats"
                target="_blank"
                className="slide-button2 relative flex overflow-hidden rounded-full border bg-[#151E22] px-5 py-2 text-sm"
              >
                <div className="btn-img-element absolute bottom-0 right-[-20]"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full">
            <ul className="mb-[23px] flex flex-wrap gap-2">
              <li>Blog</li>
              <li className="list-inside list-disc">Published {formatDate(post.publishedAt)}</li>
              <li className="list-inside list-disc">
                <span className="primary-text-900">
                  {post.content?.html ? calculateReadTime(post.content.html) : "15 min read"}
                </span>
              </li>
            </ul>
            <h2 className="mb-5 text-3xl xl:w-[876px]">{post.title}</h2>
            <div className="relative mb-12 h-96 w-full overflow-hidden rounded-xl">
              <img src={post.image.url} alt={post.title} className="h-full w-full object-cover" />
            </div>
            <div className="content-section">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              />
            </div>

            <div className="border-color-100 flex w-full items-center justify-between border-b border-t py-3 max-sm:hidden">
              <div className="flex items-center">
                <Image src="/resources/Frame 1618874298.png" width={57} height={57} alt="" />
                <div>
                  <p>Chats Team</p>
                  <ul className="flex gap-2 text-xs">
                    <li className="">{formatDate(post.publishedAt)}</li>
                    <li className="list-inside list-disc">
                      <span className="primary-text-900">
                        {post.content?.html ? calculateReadTime(post.content.html) : "15 min read"}
                      </span>
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
        </div>
        <div className="">
          {/* Animated Grid */}
          <motion.div
            className="mt-16 grid w-full xl:grid-cols-3 xl:gap-11 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPost.map((entry, index) => (
              <motion.a
                href={`/resources/${entry.slug}`}
                key={index}
                className="primary-900 mb-6 flex flex-col overflow-hidden rounded-[10px]  bg-white dark:border-gray-700 dark:bg-gray-800"
                variants={itemVariants}
              >
                <img src={entry.image.url} alt={entry.title} className="h-64 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <p className="uppercase text-[#05F29A]">{entry.category.name}</p>
                    <h3 className="mt-2 text-xl font-medium">{entry.title}</h3>
                    <p className="paragraph mt-2 text-sm">{entry.description}</p>
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

        <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
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

export default BlogDetails
