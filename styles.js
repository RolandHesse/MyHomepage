import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --color-primary: #6B7A8F;
  --color-secondary: #101118;
  --color-accent: #1D1F2F;
  --color-focus: #6D64F7;
  --base-duration: 600ms;
  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  
  }

  body {
  margin: 0;
  font-family: system-ui;
  color: #c6c6c6;  
  background-color: #030303;
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 6rem 6rem;
  width: 100vw;
  height: 100vh;
  }

  body::before {
    content: '';
    position: fixed;
    top: -30%;
    left: -30%;
    width: 200%;
    height: 200%;
    z-index: -1;
    background: radial-gradient(circle, rgba(0, 0, 255, 0.15) 10%, transparent 50%), radial-gradient(circle, rgba(0, 255, 0, 0.2) 0%, transparent 12%);
    background-repeat: no-repeat;
    background-size: 300% 300%;
    background-position: center center;
    pointer-events: none;
  }

  .hotpink {
    color: hotpink;
  }

// =========================
// =========================
// Carousel Styles
// =========================
// =========================
  
  
.visuallyhidden { 
  clip: rect(1px, 1px, 1px, 1px);  
  height: 1px; 
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}

// =========================
// Icons
// =========================

.icon {
  fill: var(--color-primary);
  width: 100%;
}


// =========================
// Buttons
// =========================

.btn {
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
}


// =========================
// Slider controls
// =========================

.slider__controls {
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 1rem);
  width: 100%;
  
  .btn {
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
        
    &--previous > * {
      transform: rotate(180deg);
    }
  }
}


// =========================
// Slider
// =========================

.slider {
  --slide-size: 70vmin;
  --slide-margin: 4vmin;
  
  height: var(--slide-size);
  margin: 0 auto;
  position: relative;
  width: var(--slide-size);
}

// .slider__wrapper {
//   display: flex;
//   margin: 0 calc(var(--slide-margin) * -1);
//   position: absolute;
//   transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);
// }

.slider__wrapper {
  width: 80vw;  
  display: flex;
}


// =========================
// Slide
// =========================

.slide {
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: var(--slide-size);
  justify-content: center;
  margin: 0 var(--slide-margin);
  opacity: 0.25;
  position: relative;
  text-align: center;
  transition: 
    opacity calc(var(--base-duration) / 2) var(--base-ease),
    transform calc(var(--base-duration) / 2) var(--base-ease);
  width: var(--slide-size);
  z-index: 1;
  
  &--previous,
  &--next {    
    &:hover {
      opacity: 0.5;
    }
  }
  
  // &--previous {
  //   cursor: w-resize;
    
  //   &:hover {
  //     transform: translateX(2%);
  //   }
  // }

  &--previous {
    cursor: w-resize;
    order: -100;
    
    &:hover {
      transform: translateX(2%);
    }
  }
  
  // &--next {
  //   cursor: e-resize;
    
  //   &:hover {
  //     transform: translateX(-2%);
  //   }
  // }

  &--next {
    cursor: e-resize;
    order: 100;
    
    &:hover {
      transform: translateX(-2%);
    }
  }
}

// .slide--current {
//   --x: 0;
//   --y: 0;
//   --d: 50;

//   opacity: 1;
//   pointer-events: auto;
//   user-select: auto;
  
//   @media (hover: hover) {
//     &:hover .slide__image-wrapper {
//       transform: 
//         scale(1.025)
//         translate(
//           calc(var(--x) / var(--d) * 1px),
//           calc(var(--y) / var(--d) * 1px)
//         );
//     }    
//   }
// }

.slide--current {
  --x: 0;
  --y: 0;
  --d: 50;

  order: 0;

  opacity: 1;
  pointer-events: auto;
  user-select: auto;
  
  @media (hover: hover) {
    &:hover .slide__image-wrapper {
      transform: 
        scale(1.025)
        translate(
          calc(var(--x) / var(--d) * 1px),
          calc(var(--y) / var(--d) * 1px)
        );
    }    
  }
}

//Class added by me
.slide--hidden {
  display: none;
  order: -200;
}

.slide__image-wrapper {
  background-color: var(--color-accent);
  border-radius: 1%;
  height: 100%;
  left: 0%;
  overflow: hidden;
  position: absolute;
  top: 0%;  
  transition: transform calc(var(--base-duration) / 4) var(--base-ease);
  width: 100%;
}

.slide__image {
  --d: 20;
  
  height: 110%;
  left: -5%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -5%;
  transition:
    opacity var(--base-duration) var(--base-ease),
    transform var(--base-duration) var(--base-ease);
  user-select: none;
  width: 110%;
  
  @media (hover: hover) {
    .slide--current & {      
      transform: 
        translate(
          calc(var(--x) / var(--d) * 1px),
          calc(var(--y) / var(--d) * 1px)
        ); 
    }
  }
}

.slide__headline {
  font-size: 8vmin;
  font-weight: 600;
  position: relative;
}

.slide__content {
  --d: 60;
  
  opacity: 0;
  padding: 4vmin;
  position: relative;
  transition: transform var(--base-duration) var(--base-ease);
  visibility: hidden;
  
  .slide--current & {
    animation: fade-in calc(var(--base-duration) / 2) var(--base-ease) forwards;
    visibility: visible;
    
    @media (hover: hover) {
      transform: 
        translate(
          calc(var(--x) / var(--d) * -1px),
          calc(var(--y) / var(--d) * -1px)
        );
    }
  }
  
  > * + * {
    margin-top: 2rem;
  }
}


// =========================
// Animations
// =========================

@keyframes fade-in {
  from { opacity: 0 }
  to   { opacity: 1 }
}
`;
