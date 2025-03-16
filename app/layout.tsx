import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Primary font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Secondary font for body text
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

// Custom display font for headings and statement pieces
const displayFont = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AHockett | Creative Web Development & Animation",
  description:
    "Crafting stunning, interactive websites with advanced animations that bring brands to life and elevate user experience beyond template solutions.",
  metadataBase: new URL("https://www.ahockett.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${displayFont.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
