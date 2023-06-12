import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default class Loader extends Component { 

   state = {
    images: []
}
    
componentDidLoader(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    if (prevName !== nextName) {
        console.log('name change')

    
        // this.setState({loading: true})
        // setTimeout(() => {
        //     fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`)
        // .then(res => res.json())
        // .then(images => this.setState({ images }))
        // .finally(() => this.setState({ loading:false}))
        // },3000)
    }
    }

    render() {
        const { images, loading } = this.state
        const {searchName} = this.props

        return (
            <div>
                {loading && <div>
                <InfinitySpin 
                 width='200'
                color="#4fa94d"
                /></div>}
                {!searchName && <div></div>}
                {images && <div>{ images.nextName}</div>}
            </div>
        )
    }
}