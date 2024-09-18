'use client'
import React from 'react';
import { blogPosts } from "../types/blogPosts";
import { Calendar} from 'lucide-react';

type PostTimelineProps = {
  selectedCategory: 'tech' | 'non-tech' | null;
}

export function PostTimeline({ selectedCategory }: PostTimelineProps) {
  const sortedPosts = [...blogPosts]
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .filter(post => selectedCategory ? post.category === selectedCategory : true);

  const scrollToPost = (postId: string) => {
    const element = document.getElementById(`post-${postId}`);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = window.innerHeight * 0.20;
      const scrollPosition = absoluteElementTop - offset;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
        {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Experience Timeline` : 'Experience Timeline'}
      </h3>
      <ul className="space-y-4 sm:space-y-6">
        {sortedPosts.map((post, index) => (
          <li key={post.id} className="relative pl-6 sm:pl-8">
            {index !== sortedPosts.length - 1 && (
              <div className="absolute left-[0.6rem] sm:left-[0.9rem] top-6 w-0.5 h-full bg-blue-300 dark:bg-blue-700" />
            )}
            <div className="flex items-center mb-2">
              <div className="absolute left-0 p-1 bg-blue-500 rounded-full">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 ml-2">
                {post.date}
              </div>
            </div>
            <div 
              className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-md shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              onClick={() => scrollToPost(post.id)}
            >
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}