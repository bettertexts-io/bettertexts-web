'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Animation = () => {
  const element = useRef<HTMLSpanElement>();
  const typed = useRef<Typed>();

  useEffect(() => {
    const options = {
      strings: [
        'write little intrrduction fOr bettertexts.io',
        `Transform your words with just a click, thanks to bettertexts.io's Mac OS integration.`,
      ],
      typeSpeed: 25,
      backSpeed: 1,
      startDelay: 500,
    };

    typed.current = new Typed(element.current!, options);

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <p>
      <span
        className="transform transition-all duration-700"
        style={{ whiteSpace: 'pre' }}
        //@ts-ignore
        ref={element}
      ></span>
    </p>
  );
};