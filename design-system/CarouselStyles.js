import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledCarouselWrapper = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 10vw;
  border: solid white 2px;
  overflow: hidden;
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
  width: 25%;
  height: auto;
  aspect-ratio: 1386/1188;
  position: relative;
  background-color: black;

  //Stlyes for middle-slide
  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      width: 50%;
      z-index: 1000;
      &:hover {
        transform: scale(1.15);
      }
    `}
  //styles for outer slides
  ${({ $slidePosition }) =>
    $slidePosition !== "middle" &&
    css`
      &:hover {
        transform: scale(1.15);
      }
    `}

    //Stlyes for first slide
    ${({ $slidePosition }) =>
    $slidePosition === "first" &&
    css`
      cursor: w-resize;
    `}

    //Stlyes for last slide
    ${({ $slidePosition }) =>
    $slidePosition === "last" &&
    css`
      cursor: e-resize;
    `}
 
  transform: ${({ $slidePosition }) =>
    $slidePosition === "first"
      ? "translateX(10%)"
      : $slidePosition === "last"
      ? "translateX(-10%)"
      : "translate(0, 0)"}
  
//auxiliary borders
  border: ${({ $slidePosition }) =>
    $slidePosition === "first"
      ? "solid red 2px"
      : $slidePosition === "middle"
      ? "solid yellow 2px"
      : "solid green 2px"};
`;

export const StyledSliderControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

export const StyledImage = styled(Image)`
  ${({ $slidePosition }) =>
    $slidePosition !== "middle" &&
    css`
      opacity: 0.5;
      &:hover {
        opacity: 0.75;
      }
    `}
`;
