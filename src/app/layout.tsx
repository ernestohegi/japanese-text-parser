import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Yochimu | Japanese Text Parser",
  description:
    "Yochimu lets you look for Japanese definitions and sentences for learning the language, save them to a list and export them as a file you can then add import to Anki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-xl`}
      >
        <ClientLayout>
          <section className="flex flex-col min-h-screen gap-4 p-4 pb-18">
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
        </ClientLayout>
      </body>
    </html>
  );
}
