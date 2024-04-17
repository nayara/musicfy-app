import { FC } from "react";
import { TContentItem } from "../../../api/queries/use-get-home";
import Card from "../../../components/atoms/Card";
import * as Style from "./Track.styles";

type TTrack = {
  title: string;
  contentsItems: TContentItem[];
};

const handleClick = () => {
  alert("To be implemented");
};

const Track: FC<TTrack> = ({ title, contentsItems }) => {
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
              onClick={handleClick}
              key={`card-${index}`}
            />
          </Style.Track>
        ))}
      </Style.Wrapper>
    </>
  );
};

export default Track;
