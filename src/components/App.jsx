import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';





export default class App extends Component {
  state = {
    searchName: '',
    photos: [],
    images: [],
    currentPage: 1,
    
  };

  handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please, write');
      return;
    }


    this.setState({ searchName, images: [], currentPage: 1 });
    this.fetchImages(searchName, 1);
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.fetchImages(nextName, 1);
    }
  }


  
  fetchImages = (searchName, page) => {
    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {

        if (data.hits.length === 0) {
          alert('Error! Cannot find');
        }

        if (page === 1) {
          this.setState({ images: data.hits });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
        this.setState({ currentPage: page });
      })
      .catch((error) => {
        alert('Images not found' + error);
      });
  };

  handleLoadMore = () => {
    const { searchName, currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.fetchImages(searchName, nextPage);
  };

  render() {
    const { images, searchName } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}

        <Loader searchName={searchName} />
      </div>
    );
  }
}