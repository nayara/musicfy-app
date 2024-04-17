import { FC } from "react";
import { TContentItem } from "../../../api/queries/use-get-home";
import Card from "../../../components/atoms/Card";
import * as Style from "./Track.styles";
import { useNavigate } from "react-router-dom";

type TTrack = {
  id: string;
  title: string;
  contentsItems: TContentItem[];
};

const Track: FC<TTrack> = ({ id, title, contentsItems }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/playlist/${id}`);
  };

  return (
    <>
      <Style.Title>{title}</Style.Title>
      <Style.Wrapper>
        {contentsItems.map((item: TContentItem, index) => (
          <Style.Track key={index}>
            <Card
              imgSrc={item.images[0][0].url}
              altText={`Playlist ${item.name} cover`}
              title={item.name}
              onClick={() => handleClick(id)}
              key={`card-${index}`}
            />
          </Style.Track>
        ))}
      </Style.Wrapper>
    </>
  );
};

export default Track;
