import React, { Component } from 'react';
import { CustomOverlay, CustomModalContent } from './Modal.module'


export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl, alt } = this.props;

    return (
      <CustomOverlay className={`overlay ${isOpen ? 'open' : ''}`} onClick={this.handleOverlayClick}>
        <CustomModalContent className="modal" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt={alt} />
        </CustomModalContent>
      </CustomOverlay>
    );
  }
}

export default Modal;
