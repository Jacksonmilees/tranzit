"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  link: string;
  linkText: string;
  linkColor: string;
}

export default function TeamMember({ name, role, imageUrl, link, linkText, linkColor }: TeamMemberProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-gray-200 mb-8 relative">
          <Image
            src={imageUrl}
            alt={name}
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">{name}</h4>
          <p className="text-gray-600 mb-2">{role}</p>
          <span className={`text-sm ${linkColor}`}>{linkText}</span>
        </div>
      </div>
    </a>
  );
}
