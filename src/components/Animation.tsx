"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Animation = () => {
  const element = useRef<HTMLSpanElement>();
  const typed = useRef<Typed>();

  useEffect(() => {
    const options = {
      strings: [
        "write little intrrduction fOr bettertexts.io",
        `Unleash the power of AI on your writing for game-changing content.`,
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
    <p className="mx-auto mt-10 max-w-4xl text-2xl tracking-tight text-slate-700">
      <span
        className="transform transition-all duration-700"
        style={{ whiteSpace: "pre" }}
        //@ts-ignore
        ref={element}
      ></span>
    </p>
  );
};
