import "./globals.css";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { Providers } from "@/components/Layout/Providers/Providers";
import { Metadata } from "next";

const lato = Lato({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://miroslavbartunek.com"),
  title: {
    default: "Mirek Bartuněk",
    template: "%s | MB",
  },
  description: "Frontend developer",
  keywords: ["Miroslav Bartuněk", "Mirek Bartuněk", "Bartuněk"],
  openGraph: {
    title: "Mirek Bartuněk",
    locale: "en-CZ",
    siteName: "Mirek Bartuněk",
    type: "website",
    description: "Frontend developer", // TODO: Add url once deployed
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
      <body
        className={clsx(
          "bg-zinc-200 text-black, dark:bg-zinc-800 dark:text-white",
          lato.className
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
