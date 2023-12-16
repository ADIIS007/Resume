'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type inputType = {
  imgName: string;
  imgSrc: string;
};

function AnimatedLogo(props: inputType) {
  const [isHovered, setHovered] = useState(false);

  // Simplified example
  return (
    <div className='flex justify-center'>
      <motion.img
        src={props.imgSrc}
        alt={props.imgName}
        whileHover={{ scale: 1.2 }} // Increase scale by 20% on hover
        style={{ width: 100, height: 100 }} // Set initial size
      />
    </div>
  );
}

export default AnimatedLogo;
