import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledCarouselWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 0;
  // border: solid white 2px;
`;

export const StyledSlideList = styled.ul`
  // border: hotpink solid 2px;
  width: 100%;
  height: 90%;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledSlide = styled.li`
  list-style: none;
  width: 25%;
  height: auto;
  max-height: calc(0.9 * 50vh);
  max-width: calc(0.9 * 50vh * 1386 / 1188);
  aspect-ratio: 1386/1188;
  position: relative;
  background-color: black;
  border-radius: 1rem;

  //Stlyes for middle-slide
  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      width: 50%;
      z-index: 1000;
    `}

  //styles for outer slides
  ${({ $slidePosition }) => $slidePosition !== "middle" && css``}

    //Stlyes for first slide
    ${({ $slidePosition }) =>
    $slidePosition === "first" &&
    css`
      cursor: w-resize;
      transform: translateX(10%);
      &:hover {
        transform: translateX(12%);
        z-index: 1001;
      }
    `}

    //Stlyes for last slide
    ${({ $slidePosition }) =>
    $slidePosition === "last" &&
    css`
      cursor: e-resize;
      transform: translateX(-10%);
      &:hover {
        transform: translateX(-12%);
        z-index: 1001;
      }
    `} //auxiliary borders
`;

export const StyledImage = styled(Image)`
  border-radius: 1rem;
  ${({ $slidePosition }) =>
    $slidePosition !== "middle" &&
    css`
      opacity: 0.5;
      &:hover {
        opacity: 0.75;
      }
    `}
  ${({ $slidePosition }) =>
    $slidePosition === "middle" &&
    css`
      &:hover {
        opacity: 0;
      }
    `}
    ${({ $showSlideContent }) =>
    $showSlideContent &&
    css`
      opacity: 0.25;
    `}
`;

export const StyledSlideContent = styled.article`
  position: absolute;
  // top: 50%;
  // transform: translateY(-50%);
  width: 100%;
  height: 100%;
  padding: 25%;
  // background-color: rgb(0, 0, 0, 0.85);
  z-index: 100;
  border-radius: 1rem;
`;

export const StyledSlideLink = styled(Link)`
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.125rem;
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2.5rem 1.125rem;

  &:focus {
    outline-color: var(--color-focus);
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 3px;
  }

  &:active {
    transform: translateY(1px);
  }
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
