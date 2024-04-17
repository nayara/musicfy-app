import { useQuery } from "react-query";
import { apiInstance } from "../../client";

export type TArtist = {
  name: string;
};

type TCover = {
  url: string;
};

type TAlbum = {
  name: string;
  artists: TArtist[];
  cover: TCover[];
};

type TPlaylistItem = {
  name: string;
  album: TAlbum;
};

type TContent = {
  items: TPlaylistItem[];
};

type TGetPlaylistDetail = {
  contents: TContent;
};

const getPlaylistMusics = async (
  playListId: string
): Promise<TGetPlaylistDetail> => {
  const path = `playlist/contents?playlistId=${playListId}&limit=6`;

  return apiInstance
    .get(path)
    .then(({ data }) => ({ contents: data.contents }));
};

const QUERY_NAME = "playlistMetadata";

export function useGetPlaylistMusics(playListId: string) {
  return useQuery({
    queryKey: [QUERY_NAME],
    queryFn: () => getPlaylistMusics(playListId),
    onError: (error: { message: string }) =>
      console.error(`Something whent wrong: ${error.message}`),
    cacheTime: Infinity,
  });
}
