import { useParams } from "react-router-dom";
import {
  TArtist,
  useGetPlaylistMusics,
} from "../../../api/queries/Playlist/use-get-playlist-musics";
import Card from "../../../components/atoms/Card";
import { useGetPlaylistMetadata } from "../../../api/queries/Playlist/use-get-playlist-metadata";
import * as Styled from "./PlaylistDetail.styles";

const PlaylistDetail = () => {
  const { playListId } = useParams();

  if (!playListId) return;

  const playlistMusics = useGetPlaylistMusics(playListId);
  const metadata = useGetPlaylistMetadata(playListId);

  if (!playlistMusics.data) return <></>;
  if (!metadata.data) return <></>;

  const getArtistsNames = (artists: TArtist[]) => {
    const names: string[] = [];

    artists.forEach((artist) => {
      names.push(artist.name);
    });

    return names.join(",").replace(",", " feat. ").toString();
  };

  return (
    <>
      <Styled.PageTitle>Playlist details</Styled.PageTitle>
      <Styled.Container>
        <Styled.PlaylistInfoWrapper>
          <Card
            title={metadata.data.name}
            subtitle={metadata.data.description}
            imgProps={{
              src: metadata.data.images[0][0].url,
              alt: `Playlist ${metadata.data.name} cover`,
              size: "large",
            }}
          />
        </Styled.PlaylistInfoWrapper>
        <Styled.MusicListWrapper>
          <Styled.Subtitle>Musics</Styled.Subtitle>
          {playlistMusics.data.contents.items.map((playlistItem, index) => (
            <Card
              title={playlistItem.name}
              imgProps={{
                src: playlistItem.album.cover[0].url,
                alt: `Album cover for music ${playlistItem.name}`,
                size: "small",
                position: "start",
              }}
              subtitle={getArtistsNames(playlistItem.album.artists)}
              key={`playlist-item-${index}`}
            />
          ))}
        </Styled.MusicListWrapper>
      </Styled.Container>
    </>
  );
};

export default PlaylistDetail;
