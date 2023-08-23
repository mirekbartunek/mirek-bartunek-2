import "server-only";
import { getNowPlaying } from "@/lib/spotify";
import Image from "next/image";
import Spotify from "@/components/svg/Spotify/Spotify";
import Link from "next/link";
export const NowPlaying = async () => {
  const res = await getNowPlaying();
  const className =
    "bg-zinc-300 dark:bg-zinc-900 flex-row flex p-5 gap-5 text-sm rounded-lg items-center relative overflow-hidden text-ellipsis whitespace-nowrap w-full cursor-pointer";
  if (res.status === 204 || res?.song?.is_playing === false) {
    return (
      <article className={className}>
        <Spotify
          width={20}
          height={20}
          className="absolute top-5 right-5 fill-zinc-500"
        />
        <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="flex flex-col">
          <h5 className="text-lg">Nothing playing</h5>
          <p>Perhaps check back later?</p>
        </div>
      </article>
    );
  }
  if (res?.song?.item === null || !res.song) {
    return (
      <article className={className}>
        <Spotify
          width={20}
          height={20}
          className="absolute top-5 right-5 fill-red-500"
        />
        <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-800"></div>
        <h3 className="text-xl">
          Something went wrong while fetching the song
        </h3>
      </article>
    );
  }
  return (
    <article className={className}>
      <Spotify
        width={20}
        height={20}
        className="absolute top-5 right-5 fill-[#1DB954]"
      />
      <Image
        src={res.song.item.album.images.at(0)?.url!}
        alt={`Cover of ${res.song.item.album.name}`}
        width={95}
        height={95}
      />
      <Link
        className="flex flex-col"
        target="_blank"
        href={res.song.item.external_urls.spotify}
      >
        <h5 className="text-lg break-words overflow-hidden">
          {res.song.item.name}
        </h5>
        <span className="text-xs">
          {res.song.item.artists.at(0)?.name} - {res.song.item.album.name}
        </span>
      </Link>
    </article>
  );
};
