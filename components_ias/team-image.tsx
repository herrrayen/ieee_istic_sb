'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TeamImageProps {
  src: string;
  name: string;
  isSpecial?: boolean;
}

export default function TeamImage({ src, name, isSpecial }: TeamImageProps) {
  const [error, setError] = useState(false);
  const defaultImage = '/images/team/default.jpg';
  
  return (
    <div className={`w-28 h-28 rounded-full mb-6 overflow-hidden border-4 ${isSpecial ? 'border-green-500' : 'border-green-500'} relative`}>
      <Image 
        src={error ? defaultImage : src} 
        alt={`Photo of ${name}`}
        fill
        sizes="112px"
        className="object-cover"
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}
