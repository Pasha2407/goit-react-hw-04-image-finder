import { ImageGalleryItem } from '../image_gallery_item/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imagesData }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesData &&
        imagesData.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              imageSrc={item.webformatURL}
              modalSrc={item.largeImageURL}
              alt={item.tags}
            />
          );
        })}
    </ul>
  );
};
