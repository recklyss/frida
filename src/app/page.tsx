'use client';

import { HeroParallax } from '@/components/ui/hero-parallax';
import homepagePics from '@@/homepage-pics.json';

export default function Home() {
  return (
    <div>
      {/* Parallax Gallery Section */}
      <div id="parallax-section">
        <HeroParallax
          products={products}
          headerProps={{
            title: 'Crafted with Passion',
            description:
              'Hi, I\'m Frida, a knitter and crafter. Every stitch, every thread, and every detail is infused with love and dedication. Where traditional craftsmanship meets contemporary imagination.',
          }}
        />
      </div>
    </div>
  );
}

const products = homepagePics;
