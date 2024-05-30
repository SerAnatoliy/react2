import { useEffect, useState } from "react";
// import { Counter } from "./Counter/Counter";
// import { Form } from "./Form/Form";
// import { ContolledForm } from "./Form/ContolledForm";
import { SearchForm } from "./SearchForm/SearchForm";
import { getImages } from "../api";
import { ImageList } from "./ImageList/ImageList";
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (!totalHits) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);
  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
    setIsEmpty(false);
    setError(null);
  };
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {isEmpty && <p>No images found</p>}
      {error && <p>{error}</p>}
      {images.length > 0 && <ImageList images={images} />}
      {showLoadMore && <LoadMoreButton onClick={handleLoadMore} />}
    </>
  );
};

export default App;
