export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
    imageUrl: string;
    imageUrl2?: string; 
    category: "tech" | "non-tech"; 
  };