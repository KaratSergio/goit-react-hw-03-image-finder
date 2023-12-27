import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageApiService from '../../Services/PixabayApi';

import { AppContent } from './App.module';

const apiService = new ImageApiService();

export class App extends Component {
  state = {
    searchQuery: '',
    galleryItems: [],
    galleryPage: 1,
    loading: false,
    isButtonShow: false,
    error: false,
    selectedImage: null,
  };

  toggleModal = imageUrl => {
    this.setState(prevState => ({
      selectedImage: prevState.selectedImage === imageUrl ? null : imageUrl,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, galleryPage } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({
        galleryPage: 1,
        galleryItems: [],
        isButtonShow: false,
        error: false,
      });
      this.fetchGalleryItems(searchQuery, 1);
    } else if (prevState.galleryPage !== galleryPage) {
      this.fetchGalleryItems(searchQuery, galleryPage);
    }
  }

  fetchGalleryItems = (query, page) => {
    this.setState({ loading: true, error: false });

    apiService.searchTerm = query;
    apiService.currentPage = page;

    apiService
      .getImages()
      .then(data => {
        const newData = data.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );

        const currentData = newData.map(item => ({
          ...item,
          key: uuidv4(),
        }));

        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...currentData],
        }));

        if (!data.length) {
          this.setState({ loading: false, error: true });
          toast.warn('Sorry, there are no images. Please try again.');
        } else if (currentData.length >= apiService.totalResults) {
          this.setState({ loading: false, isButtonShow: false, error: false });
        } else {
          if (page === 1) {
            toast.success(
              `Hooray! We found ${apiService.totalResults} images.`
            );
          }

          this.setState({ loading: false, isButtonShow: true, error: false });
        }
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
        toast.error('Oops! Something went wrong. Please try again later.');
      });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      galleryPage: prevState.galleryPage + 1,
    }));
  };

  render() {
    const { galleryItems, loading, isButtonShow, error } = this.state;

    return (
      <AppContent>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <div>Something went wrong!</div>}
        {!error && (
          <ImageGallery
            galleryItems={galleryItems}
            keyExtractor={item => item.key}
            onImageClick={imageUrl => this.toggleModal(imageUrl)}
          />
        )}
        {loading && <Loader />}
        {isButtonShow && <Button onClick={this.onLoadMore} />}

        <ToastContainer autoClose={3000} theme="colored" />
      </AppContent>
    );
  }
}

export default App;
