"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Practices for Building High-Performance React Apps",
      excerpt:
        "Deep dive into optimizing React application performance, including code splitting, lazy loading, memoization, and more...",
      date: "December 1, 2025",
      category: "React",
      readTime: "8 min read",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Complete Guide to Next.js 14 New Features",
      excerpt:
        "Explore Next.js 14's innovative features including Server Actions, Partial Prerendering, and more...",
      date: "November 25, 2025",
      category: "Next.js",
      readTime: "12 min read",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "TypeScript Type Gymnastics: From Beginner to Expert",
      excerpt:
        "Master TypeScript's advanced type system to improve code quality and development efficiency...",
      date: "November 18, 2025",
      category: "TypeScript",
      readTime: "15 min read",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 4,
      title: "Modern CSS Techniques: Grid vs Flexbox Deep Dive",
      excerpt:
        "Learn when to use Grid, when to use Flexbox, and how to combine them effectively...",
      date: "November 10, 2025",
      category: "CSS",
      readTime: "10 min read",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "Framer Motion Animation Design Guide",
      excerpt:
        "Create smooth, natural web animations to enhance user experience and interaction...",
      date: "November 5, 2025",
      category: "Animation",
      readTime: "7 min read",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "Ultimate Web Performance Optimization Guide",
      excerpt:
        "Comprehensive strategies and techniques for improving website performance from resource loading to rendering...",
      date: "October 28, 2025",
      category: "Performance",
      readTime: "20 min read",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const categories = [
    "All",
    "React",
    "Next.js",
    "TypeScript",
    "CSS",
    "Animation",
    "Performance",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden ">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Navigation />

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold text-white mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Tech Blog
            </motion.h1>
            <motion.p
              className="text-xl text-white/80"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sharing my development experience and technical insights
            </motion.p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 98, 98, 0.3)",
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Gradient Header */}
                <motion.div
                  className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <motion.span
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {post.category}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>

                  <motion.h2
                    className="text-xl font-bold text-white leading-tight"
                    whileHover={{ x: 5, transition: { duration: 0.15 } }}
                  >
                    {post.title}
                  </motion.h2>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <motion.button
                    className="flex items-center gap-2 text-[#FF6262] font-medium text-sm group-hover:gap-3 transition-all"
                    whileHover={{ x: 5, transition: { duration: 0.15 } }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-20 bg-gradient-to-br from-[#FF6262]/20 to-[#353A84]/20 backdrop-blur-sm rounded-2xl p-12 border border-[#FF6262]/30 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Subscribe to My Blog Updates
            </motion.h3>
            <motion.p
              className="text-white/80 mb-8"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get the latest technical articles and development tips delivered
              to your inbox weekly
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FF6262] transition-colors"
              />
              <motion.button
                className="px-8 py-3 bg-[#FF6262] text-white rounded-lg font-semibold whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ff4444",
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 left-20 w-20 h-20 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
