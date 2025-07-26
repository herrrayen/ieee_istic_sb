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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState , } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="!bg-transparent shadow-none pt-5"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="w-full px-4 py-4 sm:p-8 shadow-xl rounded-2xl sm:rounded-4xl bg-white flex justify-between items-center mx-4 sm:mx-0">
        <NavbarBrand as="li" className="justify-start max-w-fit">
          <NextLink className="flex gap-50" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation - hidden on small screens */}
        <ul className="hidden md:flex gap-4 mr-8 justify-end flex-1">
          {siteConfig.navItems.map((item) =>
            item.label === "Subunits" ? (
              <NavbarItem key={item.href}>
                <Dropdown>
                  <DropdownTrigger>
                    <span
                      className={clsx(
                        linkStyles({ color: "primary", size: "md" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium justify-center px-2 cursor-pointer"
                      )}
                    >
                      {item.label}
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Subunits">
                    {siteConfig.DropdownItems.map((sub) => (
                      <DropdownItem key={sub.href} as={NextLink} href={sub.href}>
                        {sub.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            ) : (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "primary", size: "md" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium justify-center "
                  )}
                  color="secondary"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle - visible on small screens */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-4"
        />
        <Button className="bg-primary text-white"> Join IEEE </Button>
        <ThemeSwitch />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
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
