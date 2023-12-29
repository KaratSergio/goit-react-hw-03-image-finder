import axios from 'axios';

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '40643270-9522dad6da71c07e3e25300aa';

export  class ImageApiService {
  searchTerm = '';
  totalResults = 0;
  currentPage = 1;
  perPage = 12;

  async getImages(page) {
    try {
      const response = await axios.get(PIXABAY_BASE_URL, {
        params: {
          key: PIXABAY_API_KEY,
          q: this.searchTerm,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: page,
          per_page: this.perPage,
        },
      });
  
      this.currentPage += 1;
      this.totalResults = response.data.total;
      return response.data.hits;
    } catch (error) {
      throw error;
    }
  }

  resetPage() {
    this.currentPage = 1;
  }

  setSearchTerm(newTerm) {
    this.searchTerm = newTerm;
    this.resetPage();
  }
}

export default ImageApiService;