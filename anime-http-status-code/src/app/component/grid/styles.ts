import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px 80px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  justify-content: center;
  place-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 40px 40px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    padding: 20px 20px;
  }

  @media (max-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 25px 10px;
  }

  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding: 25px 10px;
  }
`;
