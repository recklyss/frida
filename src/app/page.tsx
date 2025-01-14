"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
  return (
    <div>
      {/* Parallax Gallery Section */}
      <div id="parallax-section">
        <HeroParallax
          products={products}
          headerProps={{
            title: "Crafted with\nPassion",
            description:
              "Every stitch, every thread, and every detail is infused with love and dedication. Where traditional craftsmanship meets contemporary imagination.",
          }}
        />
      </div>
      <div id="about-section" className="h-[100vh]">
        
      </div>
    </div>
  );
}

const products = [
  {
    title: "Cozy Winter Scarf",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Knitted Sweater",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Embroidered Wall Art",
    link: "/showcase",
    thumbnail: "/frida.jpg",
  },
  {
    title: "Handmade Mittens",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket2",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Handmade Mittens2",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket3",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Handmade Mittens3",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket4",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Handmade Mittens4",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket5",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Crochet Blanket6",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket7",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
  {
    title: "Crochet Blanket8",
    link: "/showcase",
    thumbnail: "/handmade-01.jpg",
  },
  {
    title: "Crochet Blanket9",
    link: "/showcase",
    thumbnail: "/handmade-02.jpg",
  },
];
