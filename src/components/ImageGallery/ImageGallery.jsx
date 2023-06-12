import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { Item } from './ImageGallery.styled';
import { Image } from './ImageGallery.styled';



const ImageGallery = ({ images }) => {
  return (
    <Gallery>
        {images.map((image) => (
          <Item  key={image.id}>
            <Image
              src={image.webformatURL}
              alt={image.tags}
            />
          </Item>
        ))}
        </Gallery>
     
  );
};

export default ImageGallery;



// import React, { Component } from 'react';

// export defaGalleryt class ImageGallery extends Component {
//   state = {
//     images: [],
//     //loading: false
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;

//     if (prevName !== nextName) {
//       console.log('name change');

//       this.setState({ loading: true });

//       setTimeout(() => {
//         fetch(
//           `https://pixabay.com/api/?q=${nextName}&page=1&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`
//         )
//           .then((res) => res.json())
//           .then((data) => this.setState({ images: data.hits }))
//           .finally(() => this.setState({ loading: false }));
//       }, 3000);
//     }
//   }

//   render() {
//     const { images, loading } = this.state;
//     const { searchName } = this.props;

//     return (
//       <div>
//         {loading && <div>Loading...</div>}
//         {!searchName && <div>Шо хочеш?</div>}
//         {images.length > 0 && (
//           <Gallery>
//             <li>
//           {images.map((image) => (
//               <img
//                 style={{ width: '100px', height: '100px' }}
//                 key={image.id}
//                 src={image.webformatURL}
//                 alt={image.tags}
//               />
//           ))}</li>
//           </Gallery>
//         )}
//       </div>
//     );
//   }
// }