import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import {Link} from 'react-router';
import {getPoi} from '../api';
import {formatPrice} from '../helpers';

class Poi extends React.Component {

    constructor() {
        super();

        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.renderImage = this.renderImage.bind(this);

        this.state = {
            imageIndex: 0,
            poi: {
                facilities: [],
                labels: [],
                location: { coordinates: [] },
                images: [],
                tags: [],
                ticketInformation: [],
            }};
    }

    componentDidMount() {
        const id = this.props.params.id;

        getPoi(id).then(item => {
            this.setState({poi: item});
        })
    }

    previousImage() {
        if (this.state.imageIndex > 0) {
            const newIndex = this.state.imageIndex - 1;
            this.setState({imageIndex: newIndex});
        }
    }

    nextImage() {
        const totalCount = this.state.poi.images.length -1;

        if (this.state.imageIndex < totalCount) {
            const newIndex = this.state.imageIndex + 1;
            this.setState({imageIndex: newIndex});
        }
    }

    render() {
        return (
            <div className="poi">

                <div className="poi-header">
                    <Link to={'/'} className="poi-anchor-back"><
                        span className="icon-chevron-left"> Back</span>
                    </Link>
                </div>
                <div className="poi-carousel">
                    <button className="poi-carousel-button-previous" type="button" onClick={this.previousImage}>
                        <span className="icon-chevron-left"></span>
                        <span className="poi-carousel-button-text">Previous</span>
                    </button>
                    <ul className="poi-carousel-list">
                        { this.state.poi.images.map(this.renderImage) }
                    </ul>
                    <button className="poi-carousel-button-next" type="button" onClick={this.nextImage}>
                        <span className="icon-chevron-right"></span>
                        <span className="poi-carousel-button-text">Next</span>
                    </button>
                </div>
                <section className="poi-body">
                    <section className="poi-summary">
                        <h1 className="poi-title">{ this.state.poi.title }</h1>
                        <div className="poi-opening-hours">
                            <span className="icon-open-now poi-icon"></span>
                            Open until 18:00
                        </div>
                        <div className="poi-tickets">
                            <span className="icon-ticket poi-icon"></span>
                            <ul className="poi-ticket-list">
                                { this.state.poi.ticketInformation.map(ticket => (
                                        <li className="poi-ticket-item" key={ ticket.id }>
                                            <span className="poi-ticket-label">{ ticket.label }: </span>
                                            <span className="poi-ticket-price">{ formatPrice(ticket.price) }</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <button className="button-primary" type="button">Get Tickets</button>
                        { this.state.poi.skipTheLine &&
                            <div className="poi-skiptheline">
                                <span className="poi-skiptheline-title">Skip the line</span>
                                <p>During checkout you can choose the time you want to enter the museum.
                                    You can use a special lane to access the museum to avoid standing in line.</p>
                            </div>
                        }
                    </section>
                    <section className="poi-section">
                        <h2 className="poi-subtitle">About</h2>
                        <p className="poi-description">
                            { this.state.poi.summary }
                        </p>
                        <div className="poi-tags">
                            <strong>Tags: </strong>
                            <ul className="poi-tag-list">
                                { this.state.poi.tags.map((tag, index) => <li className="poi-tag-item" key={index}>{ tag.value }</li>) }
                            </ul>
                        </div>
                        <ul className="poi-about-list">
                            <li className={"poi-about-item poi-type icon-" + this.state.poi.type}>{ this.state.poi.type }</li>
                            <li className="poi-about-item icon-mapswitch">{ this.state.poi.location.address } <a
                                href={ 'https://www.google.com/maps/place/' + this.state.poi.location.coordinates[1] + ',' + this.state.poi.location.coordinates[0] }>Show
                                on map</a></li>
                        </ul>
                    </section>
                </section>
                <CarouselContainer items={this.state.poi.images}/>
            </div>
        )
    }

    renderImage(url, index) {
        return (
            <li className="poi-carousel-item" key={ index } style={ { transform: "translateX(-" + this.state.imageIndex * 100 +"%)"} }>
                <img className="poi-carousel-img" src={url} alt={""} />
            </li>
        )
    }
}

export default Poi;
