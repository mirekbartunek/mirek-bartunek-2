import "./globals.css";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { NowPlaying } from "@/components/NowPlaying/NowPlaying";

const lato = Lato({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: {
    default: "Mirek Bartuněk",
    template: "%s | MB",
  },
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-zinc-200 text-black, dark:bg-zinc-800 dark:text-white",
          lato.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
