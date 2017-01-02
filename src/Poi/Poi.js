import React from 'react';
import {Link} from 'react-router';
import {getPoi} from '../api';
import {formatPrice} from '../helpers';

class Poi extends React.Component {

    constructor() {
        super();

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

    nextImage() {
        const count = this.state.poi.images.length + 1; // add main image to count

        if (this.state.imageIndex <= count) {
            const newIndex = this.state.imageIndex + 1;

            this.setState({ imageIndex: newIndex });
        } else {
            this.setState({imageIndex: 0});
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
                    <button className="poi-carousel-button-previous" type="button">
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
                    </section>
                    <section className="poi-section">
                        <h2 className="poi-subtitle">Location</h2>
                        <address className="poi-address">
                            { this.state.poi.location.address }<br/>
                            { this.state.poi.location.zipcode } { this.state.poi.location.city }
                        </address>
                        <a href={ 'https://www.google.com/maps/search/@' + this.state.poi.location.coordinates[0] + ',' + this.state.poi.location.coordinates[1] }>Show on map</a>
                    </section>
                    <section className="poi-section">
                        <h2 className="poi-subtitle">Description</h2>
                        <div className="poi-description">
                            { this.state.poi.summary }
                        </div>
                    </section>
                </section>
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
