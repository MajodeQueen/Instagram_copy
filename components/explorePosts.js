import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


export default function ExplorePosts({ explorePost }) {
  const [postHovered, setMouseHover] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        onClick={() => router.push('#')}
        className="relative w-auto"
      >
          
      </div>
    </div>
  );
}
