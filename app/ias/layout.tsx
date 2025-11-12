import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";

import { Providers } from "./providers";
import { Navbar } from "@/components_ias/navbar";

// COPY SAME FONTS USED IN HOME (site) LAYOUT
import { fontSans, fontLocal } from "@/config/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "IEEE ISTIC IAS Student Branch Chapter",
    template: `%s - IEEE ISTIC IAS Student Branch Chapter`,
  },
  description:
    "IEEE Industrial Applications Society ISTIC Student Branch Chapter - Powering Industrial Innovation",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function IASLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers
      themeProps={{
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
      }}
    >
      {/* Apply the SAME font classes as home page */}
      <div
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased transition-colors duration-300",
          fontSans.variable,
          fontLocal.variable
        )}
      >
        <div className="fixed inset-0 -z-50 bg-gradient-to-br from-emerald-200 via-white to-teal-100 dark:bg-gradient-to-br dark:from-slate-950 dark:via-gray-900 dark:to-emerald-950 transition-colors duration-300" />

        <Navbar />

        <main className="min-h-screen text-gray-900 dark:text-gray-100 relative z-10">
          {children}
        </main>

        {/* IAS-themed Footer (new dark green like main site) */}
        <footer className="relative z-10 w-full mt-24 text-emerald-50">
          {/* Solid dark green gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900" />
          {/* Subtle top glow & border */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="container mx-auto px-6 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* About */}
              <div>
                <div className="flex gap-5 mb-6 items-center">
                  {/* Light mode IAS */}
                  <img
                    src="/images/logos/ias.png"
                    alt="IEEE IAS Logo"
                    className="w-20 h-auto drop-shadow-sm dark:hidden"
                  />
                  {/* Dark mode IAS */}
                  <img
                    src="/images/logos/ias-logo-white.png"
                    // src="/images/logos/IEEE%20IAS%20Logo%20White.png"
                    alt="IEEE IAS Logo White"
                    className="w-20 h-auto drop-shadow-sm hidden dark:block"
                  />
                </div>
                <h3 className="font-semibold text-lg tracking-wide">
                  IEEE IAS & PES ISTIC
                </h3>
                <p className="mt-3 text-sm text-emerald-100/80 leading-relaxed">
                  Powering Industrial Innovation and Sustainable Energy
                  Solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4 tracking-wide">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Home", href: "/ias" },
                    { label: "About IAS", href: "/ias/about" },
                    { label: "Activities", href: "/ias/activities" },
                    { label: "Contact", href: "/ias/contact" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-emerald-100/75 hover:text-emerald-50 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Areas */}
              <div>
                <h3 className="font-semibold text-lg mb-4 tracking-wide">
                  Focus Areas
                </h3>
                <ul className="space-y-2 text-emerald-100/75">
                  <li>Industrial Automation</li>
                  <li>Power Systems</li>
                  <li>Renewable Energy</li>
                  <li>Smart Manufacturing</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-lg mb-4 tracking-wide">
                  Get in Touch
                </h3>
                <ul className="space-y-3 text-sm text-emerald-100/80">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 inline-flex items-center justify-center rounded bg-emerald-600/40 text-emerald-100 text-xs">
                      @
                    </span>
                    sb-istic@ieee.org
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 inline-flex items-center justify-center rounded bg-emerald-600/40 text-emerald-100 text-xs">
                      📍
                    </span>
                    ISTIC Borj Cedria, Tunisia
                  </li>
                </ul>
                <div className="flex gap-5 pt-6">
                  {[
                    {
                      href: "https://www.facebook.com/profile.php?id=100089888870583",
                      path: "M16 8.049C16 3.603 12.418 0 8 0S0 3.603 0 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.72V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16C13.074 15.396 16 12.066 16 8.049Z",
                    },
                    {
                      href: "https://www.linkedin.com/company/ieee-istic-sb",
                      path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146ZM4.943 13.394V6.169H2.542v7.225h2.401Zm-.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248Zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.17H7.23c.03.678 0 7.225 0 7.225h2.401Z",
                    },
                    {
                      href: "https://www.instagram.com/ieee.istic.sb/",
                      multi: true,
                    },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600/25 text-emerald-200 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          {s.multi ? (
                            <>
                              <path d="M8 0C5.83 0 5.553.01 4.7.05c-.852.04-1.433.174-1.942.372a3.91 3.91 0 0 0-1.417.923A3.93 3.93 0 0 0 .42 2.76c-.198.51-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.851.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.917 3.917 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.445.01 10.172 0 8 0Z" />
                              <path d="M8 3.889a4.111 4.111 0 1 0 0 8.222 4.111 4.111 0 0 0 0-8.222Zm5.146-.757a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z" />
                            </>
                          ) : (
                            <path d={s.path as string} />
                          )}
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-emerald-600/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200">
              <p>© 2025 IEEE ISTIC IAS Chapter. All rights reserved.</p>
              <p>
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/mohamed-rayen-trabelsi-8b3056296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-emerald-300/50 hover:decoration-emerald-200 hover:text-emerald-50 transition"
                >
                  Mohamed Rayen Trabelsi
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Providers>
  );
}
