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
    <html suppressHydrationWarning lang="en" className="bg-fixed bg-gradient-to-tl from-blue-200 via-white to-pink-100 dark:bg-gradient-to-tl dark:from-gray-900 dark:via-slate-800 dark:to-purple-900">
      <head className=""></head>
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased",
          fontSans.variable,
          fontLocal.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {/* Navbar outside of main container */}
          <Navbar />
          
          {/* Main content with proper spacing */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Footer */}
          <footer
            className={clsx(
              "bg-primary border-t border-primary/20 w-full flex items-center justify-center py-4"
            )}
          >
            <span className="text-white mr-1">
              Copyright 2025 © All Rights Reserved. Developed and designed by
            </span>
            <Link
              className="text-white"
              href="https://www.linkedin.com/in/mohamed-rayen-trabelsi-8b3056296/"
            >
              {" "}
              Mohamed Rayen Trabelsi
            </Link>
          </footer>
        </Providers>
      </body>
    </html>
  );
}