"use client";

import React, { useState } from "react";

import { Navbar } from "./Navbar";
import { BlogPostCard } from "./BlogPostCard";
import { Sidebar } from "./Sidebar";
import { PostTimeline } from "./PostTimeline";
import { blogPosts } from "@/types/blogPosts";
import { BlogPost } from "@/types/blog";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<
    "tech" | "non-tech" | null
  >("tech");

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const latestPosts = [...filteredPosts]
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My {selectedCategory === "non-tech" ? "non-tech" : "tech"}{" "}
            experience in university life
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            เว็บไซต์นี้เป็นเพียงบันทึกประสบการณ์และการเรียนรู้ในระหว่างเรียนมหาวิทยาลัย
            ทั้งในด้านเทคโนโลยีและนอกเหนือจากเทคโนโลยี{" "}
            <span className=" text-blue-500 dark:text-blue-400">
              บาง blog อาจจะไม่มีเนื้อหา
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <aside className="md:col-span-1 lg:col-span-1 order-2 md:order-1">
            <div className="sticky top-24">
              <PostTimeline selectedCategory={selectedCategory} />
            </div>
          </aside>

          <div className="md:col-span-2 lg:col-span-2 order-1 md:order-2">
            {latestPosts.map((post: BlogPost) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <aside className="md:col-span-3 lg:col-span-1 order-3">
            <div className="md:sticky md:top-24">
              <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
