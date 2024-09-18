// Sidebar.tsx
'use client'

import React  from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "../types/blogPosts";
import { Clock, Tag, Cpu, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";

const sortedPosts = [...blogPosts].sort((a, b) => parseInt(b.id) - parseInt(a.id));
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

type SidebarProps = {
  selectedCategory: 'tech' | 'non-tech' | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<'tech' | 'non-tech' | null>>;
}

export function Sidebar({ selectedCategory, setSelectedCategory }: SidebarProps) {
  const filteredPosts = selectedCategory
    ? sortedPosts.filter(post => post.category === selectedCategory).slice(0, 5)
    : sortedPosts.slice(0, 5);

  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-base sm:text-lg">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Button
              variant={selectedCategory === 'tech' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('tech')}
            >
              <Cpu className="w-4 h-4 mr-2" />
              Tech
            </Button>
            <Button
              variant={selectedCategory === 'non-tech' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('non-tech')}
            >
              <Coffee className="w-4 h-4 mr-2" />
              Non-Tech
            </Button>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {filteredPosts.map((post) => (
              <li key={post.id} className="group">
                <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors">
                  <h3 className="text-xs sm:text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {post.date}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-base sm:text-lg">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs sm:text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-100 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
