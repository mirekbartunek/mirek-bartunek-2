import querystring from "querystring";
import * as process from "process";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-cache",
  });

  return response.json();
};
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 60,
    },
  });
  if (res.status === 204) {
    // not playing
    return {
      status: res.status,
      message: "Not Playing",
    };
  }
  if (!res.ok) {
    return {
      status: res.status,
      message: `Something went wrong`,
    };
  }

  const song = (await res.json()) as Song;

  return {
    status: res.status,
    song: song,
  };
};
