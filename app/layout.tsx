import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramishka Madhushan | Portfolio",
  description: "Personal portfolio of Ramishka Madhushan, Project Management Intern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>
        <Header />
        <main style={{ minHeight: "calc(100vh - 80px - 100px)", paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
