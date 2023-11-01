import { useEffect, useState } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image_gallery/ImageGallery';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';
import { api } from './API';
import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  const onSubmit = event => {
    setQuery(event);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const { data } = await api(query, page);
        const newImages = [...images, ...data.hits];
        setImages(newImages);
        setLoadMore(true);
        if (page >= Math.ceil(data.totalHits / 12)) {
          setLoadMore(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />
      {error !== null && (
        <p style={{ color: 'red', margin: '0 auto' }}>
          SORRY AN ERROR HAS OCCURRED
          <br />
          Error name: {error}
        </p>
      )}
      <ImageGallery imagesData={images} />
      {isLoading && <Loader />}
      {loadMore && !isLoading && images.length > 0 && (
        <Button onClick={nextPage} />
      )}
    </div>
  );
};
