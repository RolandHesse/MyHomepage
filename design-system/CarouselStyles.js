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
`;

export const StyledSlideList = styled.ul`
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
  transition: transform calc(var(--base-duration) / 2),
    width calc(var(--base-duration) / 2), height calc(var(--base-duration) / 2);

  //Styles for hidden slides
  ${({ $isHiddenSlide }) =>
    $isHiddenSlide &&
    css`
      width: 0%;
      // opacity: 1;
      left: -50%;
      right: -50%;
      z-index: 1001;
    `}

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
      }
    `}
`;

export const StyledImage = styled(Image)`
  border-radius: 1rem;
  transition: opacity calc(var(--base-duration) / 2);
  ${({ $slidePosition }) =>
    $slidePosition !== "middle" &&
    css`
      opacity: 0.5;
      &:hover {
        opacity: 0.9;
      }
    `}
  ${({ $slidePosition }) => $slidePosition === "middle" && css``}
    ${({ $showSlideContent }) =>
    $showSlideContent &&
    css`
      opacity: 0.5;
    `}
`;

export const StyledSlideContent = styled.article`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  padding: 1rem 2rem;
  z-index: 100;
  border-radius: 1rem;
  overflow: hidden;
  ${({ $showSlideContent }) =>
    $showSlideContent &&
    css`
      height: 15rem;
      background: linear-gradient(rgb(3, 3, 3, 0), rgb(3, 3, 3, 0.8));
    `}
  transition: height calc(var(--base-duration) / 2);
`;

export const StyledSlideLink = styled(Link)`
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2.5rem 1.125rem;
  margin: 0 0.5rem 0 0;
  &:hover {
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
  cursor: pointer;
  &:hover {
    transform: ${({ $isPrevious }) =>
      $isPrevious ? "rotate(180deg) scale(1.5)" : "scale(1.5)"};
  }
  ${({ $isPrevious }) =>
    $isPrevious &&
    css`
      transform: rotate(180deg);
    `}
`;
