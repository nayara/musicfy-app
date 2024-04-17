import { apiInstance } from "../../client";
import { useQuery } from "react-query";
import { mockedData } from "./mockedPlaylistData";

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
  durationText: string;
  album: TAlbum;
};

type TContent = {
  items: TPlaylistItem[];
  totalCount: number;
};

type TGetPlaylistDetail = {
  contents: TContent;
};

const getPlaylistMusics = async (
  playListId: string
): Promise<TGetPlaylistDetail> => {
  const path = `playlist/contents?playlistId=${playListId}&limit=30`;

  // return apiInstance
  //   .get(path)
  //   .then(({ data }) => ({ contents: data.contents }));

  return { contents: mockedData.contents };
};

const QUERY_NAME = "playlist";

export function useGetPlaylistMusics(playListId: string) {
  return useQuery({
    queryKey: [QUERY_NAME],
    queryFn: () => getPlaylistMusics(playListId),
    onError: (error: { message: string }) =>
      console.error(`Something whent wrong: ${error.message}`),
    cacheTime: Infinity,
  });
}
