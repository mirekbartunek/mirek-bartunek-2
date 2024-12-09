import "./globals.css";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { ThemeProvider } from "@/components/Layout/Providers/Providers";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://miroslavbartunek.com"),
  title: {
    default: "Mirek Bartuněk",
    template: "%s | MB",
  },
  description: "Frontend developer",
  openGraph: {
    title: "Mirek Bartuněk",
    locale: "en-CZ",
    siteName: "Mirek Bartuněk",
    type: "website",
    description: "Frontend developer",
    url: "https://miroslavbartunek.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script 
 defer 
 data-site-id="miroslavbartunek.com" 
 src="https://assets.onedollarstats.com/tracker.js"> 
</script>
      <body
        className={clsx(
          "bg-zinc-200 text-black, dark:bg-zinc-800 dark:text-white",
          lato.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
