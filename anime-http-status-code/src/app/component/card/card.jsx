import React from "react";
import { CardWrapper,Card,CardBack,CardFront,StatusText,CardImage,ImageContainer,CardInfo,StatusCode } from "./styles";


const HTTPCard = ({ cardData }) => {
  return (
    <CardWrapper>
      <Card>
        <CardFront>
          <StatusText>{cardData.httpCode}</StatusText>
          <CardImage src={cardData.image} />
          <StatusText>{cardData.httpMessage}</StatusText>
        </CardFront>
        <CardBack>
          <StatusCode isback>{cardData.httpCode}</StatusCode>
          <ImageContainer>
            <CardImage src={cardData.image} isback />
          </ImageContainer>
          <StatusText isback>{cardData.httpMessage}</StatusText>
          <CardInfo>{cardData.description}</CardInfo>
        </CardBack>
      </Card>
    </CardWrapper>
  );
};

export default HTTPCard;
