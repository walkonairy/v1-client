import styled from "@emotion/styled";
import btnImg from "./img/AI_anniu.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Left = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex: 1;
  }
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 104px;
  gap: 24px;

  padding-inline: 24px;

  @media screen and (min-width: 640px) {
    padding-inline: 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 700px;
    flex: 2;
  }

  @media screen and (min-width: 1440px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1800px) {
    max-width: 1200px;
  }
`;

export const Right = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    margin-top: 104px;
    flex: 1;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  transition: all 0.3s ease-in-out;
  user-select: none;
  outline: none;
  border-radius: 6px;
  background: rgba(158, 205, 245, 0.38);
  color: #fff;
  width: 306px;
  height: 61px;
  background-image: url(${btnImg});
`;
