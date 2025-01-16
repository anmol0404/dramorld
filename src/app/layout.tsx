import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"; // Import Link for navigation
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRAMORLD",
  description: "KDRAMA CDRAMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative w-full min-h-screen`}>
        <header className="fixed bg-gray-800 hover:bg-gray-500 px-1 rounded-sm mt-3 left-14 lg:left-6 z-20 transition-colors duration-300 ease-in-out">
          <Link href="/" className="block">
            <span
              className="text-base  font-semibold bg-clip-text shadow-sm"
              style={{
                background: "linear-gradient(20deg, #3bd3eb, #07c346)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DRAMORLD
            </span>
          </Link>
        </header>

        <div className="flex w-full min-h-screen">
          <div className="flex flex-row w-full flex-1">
            <aside className="sticky top-0 z-10 h-screen">
              <Nav />
            </aside>

            <div className="flex-1 overflow-y-auto">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <main>{children}</main>
                <Toaster />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
