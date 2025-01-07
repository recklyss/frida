"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RefObject, useEffect, useId, useRef, useState } from "react";

import { CloseIcon } from "@/app/_components/CloseIcon";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function ShowcasePage() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Showcase
        </h1>
        <p className="text-lg text-center text-gray-200">
          Explore my collection of handcrafted pieces
        </p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    View More
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-3xl mx-auto w-full">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
          <div className="flex flex-col gap-1">
            {cards.slice(0, 8).map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="flex items-center py-3 hover:bg-white/40 rounded-lg cursor-pointer transition-colors px-3"
              >
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="flex-shrink-0"
                >
                  <Image
                    width={48}
                    height={48}
                    src={card.src}
                    alt={card.title}
                    className="h-12 w-12 rounded-lg object-cover object-center shadow-sm"
                  />
                </motion.div>
                <div className="flex-grow ml-4">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="text-base font-semibold text-neutral-800 dark:text-neutral-200"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="flex-shrink-0 ml-4 px-4 py-1.5 text-sm rounded-full font-medium bg-white/80 hover:bg-green-500 hover:text-white text-black transition-colors"
                >
                  {card.ctaText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </ul>

      <div className="max-w-3xl mx-auto mt-4">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-gray-800 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-colors"
        >
          <IconArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

const cards = [
  {
    description: "Winter Warmth",
    title: "Hand-Knitted Scarf",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "#",
    content: () => (
      <p>
        A luxurious hand-knitted scarf crafted with premium merino wool. This
        piece features an intricate cable pattern that showcases traditional
        knitting techniques. Perfect for cold winter days, the scarf combines
        both style and warmth.
        <br /> <br />
        Each stitch is carefully placed to ensure both beauty and durability,
        making this not just a winter accessory, but a piece of wearable art.
      </p>
    ),
  },
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "/handmade-01.jpg",
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];
