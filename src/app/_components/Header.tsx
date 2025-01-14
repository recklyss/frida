"use client"

import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconPalette, IconTools, IconUser, IconX } from "@tabler/icons-react";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full backdrop-blur-sm bg-white/30 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={() => isMenuOpen && setIsMenuOpen(false)}
              className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
            >
              Frida&apos;s crafting world 🌸
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/showcase"
              className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <IconPalette className="w-5 h-5 mr-1" />
              Showcase
            </Link>
            <Link 
              href="/workshop"
              className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <IconTools className="w-5 h-5 mr-1" />
              Workshop
            </Link>
            <Link 
              href="/about"
              className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <IconUser className="w-5 h-5 mr-1" />
              About Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                <Link 
                  href="/showcase"
                  onClick={handleToggleMenu}
                  className="flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <IconPalette className="w-5 h-5 mr-1" />
                  Showcase
                </Link>
                <Link 
                  href="/workshop"
                  onClick={handleToggleMenu}
                  className="flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <IconTools className="w-5 h-5 mr-1" />
                  Workshop
                </Link>
                <Link 
                  href="/about"
                  onClick={handleToggleMenu}
                  className="flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <IconUser className="w-5 h-5 mr-1" />
                  About Me
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}; 