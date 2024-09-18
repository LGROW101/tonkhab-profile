// app/certificate.tsx
'use client'
import React from 'react';
import { certificates } from '@/types/certificates';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';

export default function CertificatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center">
        My <span className="text-blue-600 dark:text-blue-400">certificate</span> experience in university life
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="relative aspect-[4/3]">
              <Image 
                src={cert.imageUrl}
                alt={`Certificate for ${cert.title}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{cert.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{cert.date}</p>
              <p className="text-blue-600 dark:text-blue-400 text-sm">Issued by: {cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}