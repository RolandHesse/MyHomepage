import { StyledButton } from "@/design-system/CarouselStyles";

export default function SliderControl({
  type,
  title,
  handleClick,
  $isPrevious,
}) {
  return (
    <StyledButton $isPrevious={$isPrevious} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </StyledButton>
  );
}

// .btn {
//   --size: 3rem;

//   align-items: center;
//   background-color: transparent;
//   border: 3px solid transparent;
//   border-radius: 100%;
//   display: flex;
//   height: var(--size);
//   padding: 0;
//   width: var(--size);

//   &:focus {
//     border-color: var(--color-focus);
//     outline: none;
//   }

//   &--previous > * {
//     transform: rotate(180deg);
//   }
// }
