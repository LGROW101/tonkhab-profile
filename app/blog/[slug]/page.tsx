'use client';
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";

import Image from "next/image";
import { blogPosts } from "@/types/blogPosts";

import { BlogPost } from "@/types/blog";
import { CalendarIcon } from 'lucide-react';

type Params = {
  slug: string;
};

export default function BlogPostPage({ params }: { params: Params }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === params.slug);
    setPost(foundPost || null);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-2xl font-bold text-gray-500">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.imageUrl2 && (
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.imageUrl2}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
          <div
            className="prose dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}