import React from 'react';
import Carousel from '../Carousel/Carousel';

class CarouselContainer extends React.Component {

    state = {index: 0};

    previousImage = () => {
        if (this.state.index > 0) {
            const newIndex = this.state.index - 1;
            this.setState({index: newIndex});
        }
    }

    nextImage = () => {
        const totalCount = this.props.items.length - 1;

        if (this.state.index < totalCount) {
            const newIndex = this.state.index + 1;
            this.setState({index: newIndex});
        }
    }

    render() {
        return (
            <Carousel
                items={this.props.items}
                index={this.state.index}
                previousImage={this.previousImage}
                nextImage={this.nextImage} />
        )
    }
}

export default CarouselContainer;
