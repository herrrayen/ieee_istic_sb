import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const fontLocal = localFont({
  src: '/Gwendolyn-Bold.ttf',
  variable: '--font-local',
})