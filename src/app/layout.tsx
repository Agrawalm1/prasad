import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prasadventures.com"),
  title: {
    default: "Prasad Ventures LLC | Houston, TX",
    template: "%s | Prasad Ventures LLC",
  },
  description:
    "Prasad Ventures LLC is a Houston-based firm specializing in real estate, asset management, electricity brokerage, and strategic investments.",
  keywords: [
    "Prasad Ventures",
    "Houston investment firm",
    "real estate Houston",
    "asset management Houston",
    "electricity brokerage Texas",
    "virtual office Houston",
    "strategic investments Houston",
  ],
  authors: [{ name: "Prasad Ventures LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.prasadventures.com",
    siteName: "Prasad Ventures LLC",
    title: "Prasad Ventures LLC | Houston, TX",
    description:
      "A Houston-based firm specializing in real estate, asset management, electricity brokerage, and strategic investments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad Ventures LLC | Houston, TX",
    description:
      "A Houston-based firm specializing in real estate, asset management, electricity brokerage, and strategic investments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
