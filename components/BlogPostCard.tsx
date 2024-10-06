'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { Calendar} from 'lucide-react';
import { BlogPost } from '@/types/blog';

type BlogPostCardProps = {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
    <Card id={`post-${post.id}`} className="mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative aspect-video">
        <Image
          src={post.imageUrl}
          alt={`Image for ${post.title}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              {tag}
            </Badge>
          ))}
        </div>
        <Badge variant="outline" className="mt-2">
          {post.category}
        </Badge>
      </CardContent>
    </Card>
    </Link>
  )
}