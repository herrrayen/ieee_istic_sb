"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState , useEffect } from "react";
import {Image} from "@heroui/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add body overflow control when mobile menu is open and apply custom styles
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Fix for menu display on mobile
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Reset styles when menu closes
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "transition-all duration-300 z-50",
        "bg-transparent shadow-none fixed top-0 left-0 right-0 w-screen"
      )}
      style={{ width: '100vw' }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className={clsx(
        "w-full px-4 py-4 sm:p-8 rounded-2xl sm:rounded-4xl flex justify-between items-center mx-auto sm:mx-auto mt-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm" 
          : "bg-white/95 dark:bg-gray-800/95 shadow-xl backdrop-blur-sm"
      )}>
        <NavbarBrand as="li" className="justify-start">
          <NextLink className="flex gap-50" href="/">
            <Image isBlurred={true} src="/logo.png" className="w-53" />
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation - hidden on small screens */}
        <ul className="hidden md:flex gap-4 mr-8 justify-end flex-1">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "primary", size: "md" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium justify-center"
                )}
                color="secondary"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>

        {/* Custom Hamburger Menu Toggle */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={clsx(
            "md:hidden ml-4 focus:outline-none z-50 cursor-pointer p-3 rounded-xl transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80",
            isMenuOpen ? "bg-gray-100/60 dark:bg-gray-700/60" : ""
          )}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={clsx(
              "block absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-500 ease-in-out",
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            )} />
            <span className={clsx(
              "block absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-300 ease-in-out",
              isMenuOpen ? "opacity-0" : ""
            )} />
            <span className={clsx(
              "block absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-500 ease-in-out",
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            )} />
          </div>
        </div>
        
        {/* Join Us Button - only visible on desktop */}
        <NavbarItem className="hidden md:flex">
          <Button 
            as={Link}
            href="https://ieee.org/membership/join"
            target="_blank"
            variant="light"
            className="relative font-medium text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 border-none px-6 py-2.5 rounded-xl"
          >
            <span className="relative z-10">Join Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </Button>
        </NavbarItem>
        
        <ThemeSwitch />
      </NavbarContent>

      {/* Mobile Menu - Clean Full Screen Overlay */}
      <NavbarMenu 
        className={clsx(
          "!fixed !inset-0 !m-0 !p-0 !h-screen !w-screen !max-h-none !max-w-none z-40 overflow-hidden transition-all duration-500 ease-in-out bg-white dark:bg-gray-900",
          isMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        )}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0, 
          padding: 0,
          height: '100vh',
          width: '100vw',
          maxHeight: 'none',
          maxWidth: 'none',
        }}
      >

        {/* Content Container */}
        <div className="flex flex-col justify-center items-center h-full w-full p-8">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 z-50 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <div className="flex flex-col items-center gap-2 mb-12">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem 
                key={`${item.href}-${index}`} 
                className="text-center"
              >
                <NextLink
                  className="text-3xl font-medium text-gray-800 dark:text-gray-200 py-4 px-8 block transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
          </div>
          
          {/* Premium Join Us Button */}
          <NavbarMenuItem 
            className={clsx(
              "transform transition-all duration-700 ease-out",
              isMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            )}
            style={{ 
              transitionDelay: isMenuOpen ? `${siteConfig.navItems.length * 100 + 400}ms` : '0ms' 
            }}
          >
            <Button 
              as={Link}
              href="https://ieee.org/membership/join"
              target="_blank"
              className="relative group font-semibold text-blue-600 bg-white hover:bg-blue-50 border-none px-10 py-4 text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-blue-500/25 overflow-hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 flex items-center gap-3">
                Join Us
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Button>
          </NavbarMenuItem>

          {/* Social Links or Additional Info */}
          <div className={clsx(
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 transition-all duration-700 ease-out",
            isMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          )}
          style={{ 
            transitionDelay: isMenuOpen ? `${siteConfig.navItems.length * 100 + 600}ms` : '0ms' 
          }}>
            <div className=" text-blue-700 text-sm text-center">
              <p className="font-light">IEEE Student Branch</p>
              <p className="text-xs opacity-75 mt-1">Advancing Technology for Humanity</p>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};