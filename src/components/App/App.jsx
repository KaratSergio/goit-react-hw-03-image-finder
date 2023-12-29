import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { ImageApiService } from '../../services/pixabay_api';

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

  fetchGalleryItems = (query, page) => {
    this.setState({ loading: true, error: false });

    apiService.setSearchTerm(query);

    apiService
      .getImages(page)
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
          this.setState({ loading: false, error: true, isButtonShow: false });
          toast.warn('Sorry, there are no images. Please try again.');
        } else {
          const currentPage = this.state.galleryPage;
          const totalPages = Math.ceil(
            apiService.totalResults / apiService.perPage
          );

          if (currentPage >= totalPages) {
            this.setState({
              loading: false,
              isButtonShow: false,
              error: false,
            });
          } else {
            if (page === 1) {
              toast.success(
                `Hooray! We found ${apiService.totalResults} images.`
              );
            }

            this.setState({ loading: false, isButtonShow: true, error: false });
          }
        }
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
        toast.error('Oops! Something went wrong. Please try again later.');
      });
  };

  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
      galleryPage: 1,
      galleryItems: [],
      isButtonShow: false,
      error: false,
    });
    this.fetchGalleryItems(searchQuery, 1);
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      galleryPage: prevState.galleryPage + 1,
    }));
    this.fetchGalleryItems(this.state.searchQuery, this.state.galleryPage + 1);
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
