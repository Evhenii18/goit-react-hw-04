import axios from "axios";
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL = "https://api.unsplash.com/search/photos";


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Функція для отримання зображень
  const fetchImages = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(API_URL, {
				params: {
					query,
					page,
					per_page: 15, // кількість зображень на одну сторінку
					client_id: API_KEY,
				},
			});
			setImages((prevImages) => [...prevImages, ...response.data.results]);
		} catch (error) {
			toast.error("Failed to load images");
		} finally {
			setIsLoading(false);
		}
	};

  // Викликається при зміні ключового слова або сторінки
  useEffect(() => {
    if (query) fetchImages();
  }, [query, page]);

  // Пошук зображень за ключовим словом
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  // Завантажити більше зображень
  const loadMore = () => setPage((prevPage) => prevPage + 1);

  // Відкрити та закрити модальне вікно
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} isOpen={!!selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
