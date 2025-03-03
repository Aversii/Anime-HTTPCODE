import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 15vh;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const MediaContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const InfoData = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
`;

export const SocialIcon = styled.a`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border-radius: 50%;
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s;

  svg {
    color: cyan;
    transition: transform 0.6s ease-out;
  }

  &:hover {
    background-color: inherit;
    transform: scale(1.2);

    svg {
      color: lightblue;
      transform: rotateY(360deg);
    }
  }
`;

export const TextFooter = styled.p`
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const NameSpan = styled.span`
  display: inline-block;
  position: relative;
  animation: glow 3.5s infinite alternate;

  @keyframes glow {
    0% {
      color: inherit;
    }
    100% {
      color: cyan;
    }
  }
`;
