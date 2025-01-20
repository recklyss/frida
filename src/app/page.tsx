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
            title: "Crafted with Passion",
            description:
              "Hi, I'm Frida, a knitter and crafter. Every stitch, every thread, and every detail is infused with love and dedication. Where traditional craftsmanship meets contemporary imagination.",
          }}
        />
      </div>
    </div>
  );
}

const products = [
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/A333AC78-2C2D-4EF9-94E2-970EFBBDF216-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/F91B1738-3C56-4E04-BFBE-78E4692DDD54_1_105_c-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/68393BEF-751D-44E6-A360-B98310B9E48B_1_105_c-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/FD3B95EB-A752-48AD-980C-258EB4E6A032_1_105_c-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/5B755A30-5074-4B26-9A0D-97D8AA50A78D_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/79FA6AE7-EDA0-4B33-A3DA-577678F075ED_1_102_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/9A76B1DE-8CFE-4B4D-B35D-5153105404B3_1_102_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/065B07D9-4305-4009-A258-E29CB7F6E26D_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/B52D0EF9-B451-4F73-B855-E195F321C709_1_102_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/DB48020B-7900-4929-8E7A-8285C98CE466_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/F1BBE8D7-13F7-40C6-AAE3-91DBC2C8C0B9_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/D95BDD15-D01D-4480-9F5A-A4ED3BCF8B6D_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/813458BF-719D-46A2-8F41-2101B81D0B0B_1_201_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/294BDD96-5EBD-4E8D-B42E-144773B17521_1_102_a-mac15.jpeg",
  },
  {
    title: "Wanna know more about me? Click here",
    link: "/about",
    thumbnail: "https://cdn.jsdelivr.net/gh/recklyss/FigureCloud@master/uPic/9938993E-EDE8-44B3-B862-62E4AD9A9426_1_102_a-mac15.jpeg",
  },
];
