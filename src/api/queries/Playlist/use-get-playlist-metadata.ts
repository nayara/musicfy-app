import { apiInstance } from "../../client";
import { useQuery } from "react-query";

type TPlaylistMetadata = {
  name: string;
  description: string;
  images: { url: string }[][];
};

const getPlaylistMetadata = async (
  playListId: string
): Promise<TPlaylistMetadata> => {
  const path = `playlist/metadata?playlistId=${playListId}`;

  return apiInstance.get(path).then(({ data }) => data);
};

const QUERY_NAME = "playlist";

export function useGetPlaylistMetadata(playListId: string) {
  return useQuery({
    queryKey: [QUERY_NAME],
    queryFn: () => getPlaylistMetadata(playListId),
    onError: (error: { message: string }) =>
      console.error(`Something whent wrong: ${error.message}`),
  });
}
