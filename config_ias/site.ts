export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "IEEE IAS ISTIC ",
  description: "Welcome to Our Chapter.",
  navItems: [
    {
      label: "Home",
      href: "/ias",
    },
    {
      label: "About",
      href: "/ias/about",
    },
    {
      label: "Activities",
      href: "/ias/activities",
    },
    {
      label: "Contact",
      href: "/ias/contact",
    },
  ],
  DropdownItems: [
    {
      label: "CS",
      href: "/subunits/cs",
    },
    {
      label: "WIE",
      href: "/subunits/wie",
    },
    {
      label: "IAS",
      href: "/subunits/ias",
    },
    {
      label: "SIGHT",
      href: "/subunits/sight",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
