import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gloport Enterprise | Smart Automotive Technology Solutions",
  description:
    "Gloport has partnered with CarTelSol Germany to develop a futuristic telematics control unit built for the Indian automotive ecosystem — combining decades of embedded engineering with local deployment expertise.",
  keywords: [
    "Gloport Enterprise",
    "CarTelSol Germany",
    "Telematics Control Unit",
    "Automotive Technology",
    "Embedded Engineering",
    "Indian Automotive Ecosystem",
    "IoT Solutions",
    "Smart Mobility",
  ],
  authors: [{ name: "Gloport Enterprise" }],
  creator: "Gloport Enterprise",
  publisher: "Gloport Enterprise",
  metadataBase: new URL("https://gloportenterprise.com"),
  openGraph: {
    title: "Gloport Enterprise | Futuristic Automotive Telematics",
    description:
      "Gloport has partnered with CarTelSol Germany to develop a futuristic telematics control unit built for the Indian automotive ecosystem.",
    url: "https://gloportenterprise.com",
    siteName: "Gloport Enterprise",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gloport Enterprise",
    description:
      "Advanced telematics and embedded engineering solutions for the future of mobility.",
  },
  icons: {
    icon: "/LogoGloport.png",
    shortcut: "/LogoGloport.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-black flex flex-col">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        {/* Main App */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <p>
              © {new Date().getFullYear()} Gloport Enterprise. All rights
              reserved.
            </p>

            <p className="max-w-2xl text-center md:text-right">
              Gloport has partnered with CarTelSol Germany to develop a
              futuristic telematics control unit built for the Indian automotive
              ecosystem.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}