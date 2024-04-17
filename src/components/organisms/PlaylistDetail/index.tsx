import { useParams } from "react-router-dom";
import {
  TArtist,
  useGetPlaylistMusics,
} from "../../../api/queries/Playlist/use-get-playlist-musics";
import Card from "../../../components/atoms/Card";

const PlaylistDetail = () => {
  const { playListId } = useParams();

  if (!playListId) return;

  const { data } = useGetPlaylistMusics(playListId);

  if (!data) return <></>;

  const getArtistsNames = (artists: TArtist[]) => {
    const names: string[] = [];

    artists.forEach((artist) => {
      names.push(artist.name);
    });

    return names.join(",").replace(",", " feat. ").toString();
  };

  return (
    <>
      {data.contents.items.map((playlistItem, index) => (
        <div
          key={`playlist-item-${index}`}
          style={{ display: "flex", margin: "10px", color: "white" }}
        >
          <Card
            title={playlistItem.name}
            imgProps={{
              src: playlistItem.album.cover[0].url,
              alt: `Album cover for music ${playlistItem.name}`,
              size: "small",
              position: "start",
            }}
            subtitle={getArtistsNames(playlistItem.album.artists)}
          />
        </div>
      ))}
    </>
  );
};

export default PlaylistDetail;
