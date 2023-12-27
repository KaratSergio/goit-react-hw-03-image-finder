import { Component } from 'react';
import { CustomOverlay, CustomModalContent } from './Modal.module';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.body.style.position = '';
    document.body.style.width = '';
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
    const { imageUrl, alt } = this.props;

    return (
      <CustomOverlay id="overlay" onClick={this.handleOverlayClick}>
        <CustomModalContent onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt={alt} />
        </CustomModalContent>
      </CustomOverlay>
    );
  }
}

export default Modal;

