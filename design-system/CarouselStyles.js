import styled, { css } from "styled-components";

export const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledSlideList = styled.ul`
  border: hotpink solid 2px;
  width: 100%;
  height: 1rem;
  // margin: 0 auto;

  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSlide = styled.li`
  list-style: none;
  border: solid green 2px;
  width: 100px;

  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      border: solid red 2px;
      width: 200px;
    `}
`;

export const StyledSliderControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
