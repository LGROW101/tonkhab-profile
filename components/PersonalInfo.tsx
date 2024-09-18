'use client';
import Link from 'next/link';
import { FaMedium } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

interface PersonalInfoProps {
  text: string;
}

export default function PersonalInfo({ text }: PersonalInfoProps) {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-gray-800 dark:text-blue-300 md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {`Hi! I'm a`}
        <span className="wrap">{text}</span>
      </h2>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      I am learning about DevOps and I will be doing a 6-month DevOps internship.
      </p>
      <div className="text-5xl flex justify-center items-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <Link href="https://github.com/LGROW101" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <ImGithub />
         
        </Link>
        <Link href="https://www.linkedin.com/in/chaloemrat-hengsahatsawat-6253682a7/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <BsLinkedin />
        </Link>
        <Link href="https://medium.com/@Chaloemrat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FaMedium />
         
        </Link>
      </div>
    </div>
  );
}