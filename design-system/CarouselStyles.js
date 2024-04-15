import styled, { css } from "styled-components";

export const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledSlideList = styled.ul`
  border: hotpink solid 2px;
  width: 100%;
  // height: 1rem;
  // margin: 0 auto;

  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSlide = styled.li`
  list-style: none;
  border: ${({ $slidePosition }) =>
    $slidePosition === "first" ? "solid red 2px" : "solid green 2px"};

  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      border: solid yellow 2px;
    `}
`;

export const StyledSliderControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
