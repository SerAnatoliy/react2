import { ImageItemContainer } from "./ImageIte.styled";

export const ImageItem = ({ src, alt }) => {
  return (
    <ImageItemContainer>
      <img src={src} alt={alt} />
    </ImageItemContainer>
  );
};
