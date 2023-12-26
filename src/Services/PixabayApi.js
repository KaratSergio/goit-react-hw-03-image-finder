import axios from 'axios';

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '40643270-9522dad6da71c07e3e25300aa';

export default class ImageApiService {
  constructor() {
    this._searchTerm = '';
    this._totalResults = 0;
    this.currentPage = 1;
  }

  async getImages() {
    try {
      const response = await axios.get(PIXABAY_BASE_URL, {
        params: {
          key: PIXABAY_API_KEY,
          q: this._searchTerm,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: this.currentPage,
          per_page: 12,
        },
      });

      this._incrementPage();
      this._setTotalResults(response.data.total);
      return response.data.hits;
    } catch (error) {
      throw error;
    }
  }

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(newTerm) {
    if (this._searchTerm !== newTerm) {
      this._searchTerm = newTerm;
      this.resetPage();
    }
  }

  get totalResults() {
    return this._totalResults;
  }

  set totalResults(newTotal) {
    this._totalResults = newTotal;
  }

  _incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  _setTotalResults(total) {
    this.totalResults = total;
  }
}
