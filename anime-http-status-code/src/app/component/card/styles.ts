import styled from "styled-components";

export const CardWrapper = styled.div`
  perspective: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

export const Card = styled.div`
  width: 250px;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  margin-right: 10px;
  margin-bottom: 10px;

  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 280px;
  }

  @media (max-width: 550px) {
    width: 200px;
    height: 250px;
  }

  @media (max-width: 380px) {
    width: 280px;
    height: 300px;
  }
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
`;

export const CardFront = styled(CardSide)`
  background-color: #121212;
  padding: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid white;
    border-radius: 1px;
  }
`;

export const CardBack = styled(CardSide)`
  background-color: #121212;
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
  transition: transform 0.6s;
  background-clip: padding-box;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 4px solid white;
    border-radius: 6px;
  }
`;

export const StatusCode = styled.span<{ isback?: boolean }>`
  position: absolute;
  top: 10px;
  left: 33%;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px 20px;
  margin-top: -10px;
  border-radius: 5px;
  background-color: ${({ isback }) => (isback ? "inherit" : "inherit")};
  color: ${({ isback }) => (isback ? "cyan" : "red")};
  width: auto;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const CardImage = styled.img<{ isback?: boolean }>`
  width: 100%;
  height: ${({ isback }) => (isback ? "100%" : "80%")};
  object-fit: cover;
  border-radius: ${({ isback }) => (isback ? "8px" : "0px")};
`;

export const CardInfo = styled.p<{ isback?: boolean }>`
  font-size: 1rem;
  text-align: center;
  opacity: 0.9;
  margin-top: 10px;
  color: ${({ isback }) => (isback ? "cyan" : "#f0f0f0")};
`;

export const StatusText = styled.p<{ isback?: boolean }>`
  font-size: 1.1rem;
  color: ${({ isback }) => (isback ? "cyan" : "cyan")};
  padding-top: ${({ isback }) => (isback ? "10px" : "10px")};
  margin-left: 10px;
  text-align: center;
  margin-bottom: 15px;
`;
