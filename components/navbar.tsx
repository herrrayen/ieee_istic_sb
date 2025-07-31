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
        "transition-all duration-300 pt-5 z-50",
        "bg-transparent shadow-none"
      )}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className={clsx(
        "w-full px-4 py-4 sm:p-8 rounded-2xl sm:rounded-4xl flex justify-between items-center mx-4 sm:mx-0 transition-all duration-300",
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

        {/* Mobile Menu Toggle - visible on small screens */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-4"
        />
        
        <NavbarItem>
          <Button 
            as={Link}
            href="https://ieee.org/membership/join"
            target="_blank"
            variant="light"
            className="relative font-medium text-white overflow-hidden transition-scale duration-500 hover:scale-110 bg-gradient-to-r from-blue-500 to-blue-300 border-none"
          >
            Join Us
          </Button>
        </NavbarItem>
        
        <ThemeSwitch />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "w-full text-lg"
                )}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};