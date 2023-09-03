export const NowPlayingSkeleton = () => {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 flex-row flex p-5 gap-5 text-sm rounded-lg items-center relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-rose-100/10">
      <div className="absolute top-4 right-4 bg-zinc-200/90 dark:bg-rose-100/10 h-6 w-6 rounded-full"></div>
      <div className="h-24 w-24 bg-zinc-200 dark:bg-zinc-800"></div>
      <div className="flex flex-col gap-5">
        <div className="h-3 w-24 rounded-lg bg-zinc-200/90 dark:bg-rose-100/10"></div>
        <div className="h-3 w-64 rounded-lg bg-zinc-200/90 dark:bg-rose-100/10"></div>
      </div>
    </section>
  );
};
