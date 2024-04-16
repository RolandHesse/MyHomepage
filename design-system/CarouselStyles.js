import styled, { css } from "styled-components";

export const StyledCarouselWrapper = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 10vw;
  border: solid white 2px;
`;

export const StyledSlideList = styled.ul`
  border: hotpink solid 2px;
  width: 100%;
  height: 90%;
  // position: absolute;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledSlide = styled.li`
  list-style: none;
  height: 100%;
  width: 25%;
  position: relative;
  border: ${({ $slidePosition }) =>
    $slidePosition === "first"
      ? "solid red 2px"
      : $slidePosition === "middle"
      ? "solid yellow 2px"
      : "solid green 2px"};
  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      width: 50%;
    `}
`;

export const StyledSliderControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  // position: absolute;
  bottom: 0;
`;

export const StyledButton = styled.button`
  --size: 3rem;
  align-items: center;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 100%;
  display: flex;
  height: var(--size);
  padding: 0;
  width: var(--size);
  &:focus {
    border-color: var(--color-focus);
    outline: none;
  }
  ${({ $isPrevious }) =>
    $isPrevious &&
    css`
      transform: rotate(180deg);
    `}
`;
