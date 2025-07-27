import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontLocal } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="">
      <head></head>
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased bg-gradient-to-b from-primary to-secondary",
          fontSans.variable,
          fontLocal.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto pt-20 flex-grow">
              {children}
            </main>
            <footer
              className={clsx(
                "bg-primary border-t border-primary/20 w-full flex items-center justify-center py-4"
              )}
            >
                <span className="text-white mr-1">Copyright 2025 © All Rights Reserved. Developed and designed by  </span>
                <Link className="text-white" href="https://www.linkedin.com/in/mohamed-rayen-trabelsi-8b3056296/"> Mohamed Rayen Trabelsi</Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
