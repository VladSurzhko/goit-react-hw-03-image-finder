// import { Component } from 'react';

// export class Button extends Component {
//     state = { page: 2 };
  
//     // функція додавання page та відправки даних до ImageGallery
//     addPage = () => {
//       this.setState(prevState => ({ page: prevState.page + 1 }));
//       this.props.morePictures(this.state.page);
//     };
  
//     render() {
//       return (
//         <div type="button" onClick={this.addPage}>
//           Load more
//         </div>
//       );
//     }
//   }

import { BtnLoadMore } from "./Button.styled";

const Button = ({ onLoadMore }) => {
    return (
      
            <BtnLoadMore onClick={onLoadMore}>Load More</BtnLoadMore>
           
  );
};

export default Button;