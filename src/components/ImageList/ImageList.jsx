import { ImageItem } from "../ImageItem/ImageItem";
import { ImageListContainer } from "./ImageList.styled";

export const ImageList = ({ images }) => {
  console.log(images);
  return (
    <ImageListContainer>
      {images.map((image) => (
        <ImageItem key={image.id} src={image.webformatURL} alt={image.tags} />
      ))}
    </ImageListContainer>
  );
};
