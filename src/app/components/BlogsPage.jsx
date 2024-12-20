"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "A beginner's guide to understanding and building React applications.",
    date: "January 10, 2024",
    link: "/blogs/react-basics",
  },
  {
    id: 2,
    title: "SEO Best Practices in 2024",
    description: "Learn the latest strategies for improving your website's SEO performance.",
    date: "January 15, 2024",
    link: "/blogs/seo-2024",
  },
  {
    id: 3,
    title: "MERN Stack: A Complete Overview",
    description: "An in-depth guide on how to build scalable web applications using the MERN stack.",
    date: "January 20, 2024",
    link: "/blogs/mern-overview",
  },
];

const BlogsPage = () => {
  return (
    <section className="py-16" id="blogs">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center uppercase text-4xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-8"
        >
          My Blogs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-[#ADB7BE] text-lg lg:text-xl mb-12"
        >
          I share my knowledge on web development, SEO strategies, and emerging technologies.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-[#181818] rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{blog.title}</h3>
              <p className="text-[#ADB7BE] mb-4">{blog.description}</p>
              <p className="text-sm text-[#ADB7BE] mb-6">{blog.date}</p>
              <Link
                href={blog.link}
                className="inline-block text-white bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
