"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("/knitting.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Craft World
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover unique handmade creations crafted with passion and dedication
            </p>
          </div>

          {/* Featured Works */}
          <BentoGrid className="gap-4">
            <BentoGridItem
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all col-span-2"
              header={
                <Link href="/showcase" className="block h-48 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      {/* Stacked images */}
                      <div className="absolute top-2 left-2 w-full h-full bg-gray-200 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                      <div className="absolute top-1 left-1 w-full h-full bg-gray-300 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
                      <div className="absolute w-full h-full bg-gray-100 rounded-lg shadow-lg transition-transform group-hover:translate-y-1">
                        <Image 
                          src="/handmade-01.jpg" 
                          alt="Latest Creation" 
                          width={100}
                          height={100}  
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              }
              title="Latest Creation"
              description="Explore my most recent handcrafted piece"
            />
            <BentoGridItem
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all col-span-2"
              header={
                <Link href="/showcase" className="block h-48 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      {/* Stacked images */}
                      <div className="absolute top-2 left-2 w-full h-full bg-gray-200 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                      <div className="absolute top-1 left-1 w-full h-full bg-gray-300 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
                      <div className="absolute w-full h-full bg-gray-100 rounded-lg shadow-lg transition-transform group-hover:translate-y-1">
                        <Image 
                          src="/handmade-02.jpg" 
                          alt="Workshop Preview" 
                          width={100}
                          height={100}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              }
              title="Workshop Preview"
              description="Take a peek into my creative process"
            />
          </BentoGrid>
        </div>
      </main>

      <Footer />
    </div>
  );
}
