"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
  headerProps,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  headerProps: {
    title: string;
    description: string;
  };
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 2000 : 1500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -2000 : -1500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-700, 300]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] md:h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header title={headerProps.title} description={headerProps.description} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 space-x-10 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative py-20 md:py-40 px-8 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-foreground to-lime-400 drop-shadow-lg tracking-tight [text-wrap:balance] [text-shadow:_4px_4px_8px_rgb(0_0_0_/_30%)] animate-text-shimmer">
        {title}
      </h1>
      <p className="max-w-2xl md:text-xl mt-8 text-neutral-800 leading-relaxed backdrop-blur-lg bg-gradient-to-r from-cyan-200 to-card-900 p-6 rounded-xl shadow-3xl font-large">
        {description}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 md:h-96 w-[20rem] md:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white/10 backdrop-blur-sm transition-all duration-300 group-hover/product:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover/product:border-white/20"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-40 bg-black pointer-events-none rounded-lg transition-opacity"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-base md:text-lg font-semibold transition-opacity">
        {product.title}
      </h2>
    </motion.div>
  );
};
