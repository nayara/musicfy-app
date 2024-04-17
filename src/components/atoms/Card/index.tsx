import { FC } from "react";

import * as Style from "./Card.styles";
import Button from "../Button";

type TCard = {
  title: string;
  imgProps: {
    src: string;
    alt: string;
    position?: string;
    size?: string;
  };
  subtitle?: string;
  clickable?: boolean;
  onClick?: () => void;
};

const Card: FC<TCard> = ({
  imgProps,
  title,
  subtitle,
  clickable = false,
  onClick,
}) => {
  return clickable && onClick ? (
    <Style.Container $imgPosition={imgProps.position} $clickable={clickable}>
      <Button onClick={onClick}>
        <Style.Image
          src={imgProps.src}
          alt={imgProps.alt}
          size={imgProps.size}
        />
        <Style.ContentWrapper $imgPosition={imgProps.position}>
          <Style.Title>{title}</Style.Title>
          {subtitle && <Style.Subtitle>{subtitle}</Style.Subtitle>}
        </Style.ContentWrapper>
      </Button>
    </Style.Container>
  ) : (
    <Style.Container $imgPosition={imgProps.position}>
      <Style.Image src={imgProps.src} alt={imgProps.alt} size={imgProps.size} />
      <Style.ContentWrapper $imgPosition={imgProps.position}>
        <Style.Title>{title}</Style.Title>
        {subtitle && <Style.Subtitle>{subtitle}</Style.Subtitle>}
      </Style.ContentWrapper>
    </Style.Container>
  );
};

export default Card;
