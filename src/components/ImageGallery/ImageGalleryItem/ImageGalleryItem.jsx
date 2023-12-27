import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.module';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const {
      galleryItem: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <GalleryImg src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.isModalOpen && (
          <Modal
            imageUrl={largeImageURL}
            alt={tags}
            onClose={() => this.setState({ isModalOpen: false })}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  galleryItem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
