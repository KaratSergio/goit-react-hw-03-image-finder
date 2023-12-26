import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'; 
import { Gallery } from './ImageGallery.module';

export class ImageGallery extends Component {
  render() {
    const { galleryItems, keyExtractor, onImageClick } = this.props;

    return (
      <Gallery className="gallery">
        {galleryItems.map(item => (
          <ImageGalleryItem
            key={keyExtractor(item)}
            galleryItem={item}
            onImageClick={onImageClick} 
          />
        ))}
      </Gallery>
    );
  }
}

ImageGallery.propTypes = {
  galleryItems: PropTypes.array.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired, 
};

export default ImageGallery;
