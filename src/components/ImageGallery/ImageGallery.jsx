import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.module';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'; 

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
