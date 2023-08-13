import "./globals.css";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { Providers } from "@/components/Layout/Providers/Providers";

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
