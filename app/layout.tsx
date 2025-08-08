import "@/styles/globals.css";
import clsx from "clsx";
import { fontSans, fontLocal } from "@/config/fonts";
import { Providers } from "@/app/(site)/providers";

export const metadata = {
  title: "IEEE ISTIC SB",
  description: "IEEE ISTIC Student Branch",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontLocal.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}