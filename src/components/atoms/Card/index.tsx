import { FC } from "react";

import * as Style from "./Card.styles";

type TCard = {
  imgSrc: string;
  altText: string;
  title: string;
  onClick: () => void;
};

const Card: FC<TCard> = ({ imgSrc, altText, title, onClick }) => {
  return (
    <Style.Container>
      <Style.Button onClick={onClick}>
        <Style.Image src={imgSrc} alt={altText} />
        <Style.Title>{title}</Style.Title>
      </Style.Button>
    </Style.Container>
  );
};

export default Card;
