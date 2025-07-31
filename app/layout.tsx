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
    { media: "(prefers-color-scheme: light)", color: "#f0f9ff" }, // blue-50
    { media: "(prefers-color-scheme: dark)", color: "#020617" }, // slate-950
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head></head>
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased transition-colors duration-300",
          fontSans.variable,
          fontLocal.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system", enableSystem: true }}>
          {/* Fixed background that responds to theme changes */}
          <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-100 via-white to-pink-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300" />
          
          {/* Navbar outside of main container */}
          <Navbar />
          
          {/* Main content with proper spacing */}
          <main className="min-h-screen text-gray-900 dark:text-gray-100 relative z-10">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="bg-blue-900 dark:bg-slate-800 text-white py-12 w-full relative z-10 transition-colors duration-300">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div className="col-span-1 md:col-span-1">
                  <div className="flex flex-col items-center md:items-start">
                    <img 
                      src="/images/logos/logo istic white.png" 
                      alt="IEEE ISTIC Logo" 
                      className="w-32 h-auto mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2">IEEE ISTIC SB</h3>
                    <p className="text-sm text-gray-300 text-center md:text-left">
                      A vibrant community of innovators, learners, and future leaders.
                    </p>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div className="col-span-1">
                  <h3 className="font-bold text-lg mb-4 text-center md:text-left">Quick Links</h3>
                  <ul className="space-y-2 text-center md:text-left">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
                    </li>
                    <li>
                      <Link href="/activities" className="text-gray-300 hover:text-white transition">Activities</Link>
                    </li>
                    <li>
                      <Link href="/subunits" className="text-gray-300 hover:text-white transition">Subunits</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
                    </li>
                  </ul>
                </div>
                
                {/* Our Values */}
                <div className="col-span-1">
                  <h3 className="font-bold text-lg mb-4 text-center md:text-left">Our Values</h3>
                  <ul className="space-y-2 text-center md:text-left">
                    <li className="text-gray-300">Curiosity & Lifelong Learning</li>
                    <li className="text-gray-300">Collaboration Over Competition</li>
                    <li className="text-gray-300">Innovation with Purpose</li>
                  </ul>
                </div>
                
                {/* Get in Touch */}
                <div className="col-span-1">
                  <h3 className="font-bold text-lg mb-4 text-center md:text-left">Get in Touch</h3>
                  <div className="space-y-2 text-center md:text-left">
                    <p className="text-gray-300 flex justify-center md:justify-start items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>sb.istic@ieee.org</span>
                    </p>
                    <p className="text-gray-300 flex justify-center md:justify-start items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>ISTIC Borj Cedria, Tunis</span>
                    </p>
                    <div className="flex space-x-3 justify-center md:justify-start pt-2">
                      <a href="https://www.facebook.com/ieee.istic.sb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/ieee-istic-sb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/ieee_istic_sb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Copyright Bar */}
              <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400 text-center md:text-left">
                  © 2025 IEEE ISTIC Student Branch. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  Developed by <a href="https://www.linkedin.com/in/mohamed-rayen-trabelsi-8b3056296/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Mohamed Rayen Trabelsi</a>
                </p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}