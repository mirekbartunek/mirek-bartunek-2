import { NowPlaying } from "@/components/NowPlaying/NowPlaying";
import { Suspense } from "react";
import { NowPlayingSkeleton } from "@/components/NowPlaying/NowPlayingSkeleton";

export const Footer = () => {
  return (
    <footer
      className="border-t border-t-zinc-800 dark:border-t-zinc-300 flex flex-col items-center py-10
    justify-center overflow-hidden"
    >
      <Suspense fallback={<NowPlayingSkeleton />}>
        <div className="flex flex-col max-w-sm px-10">
          <NowPlaying />
        </div>
      </Suspense>
      <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-500 mt-5 text-center p-2">
        All trademarks are the property of their respective owners. THIS PROJECT
        IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND
      </p>
    </footer>
  );
};
