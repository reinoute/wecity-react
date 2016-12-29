import React from 'react';
import {getPoi} from '../api';
import {formatPrice} from '../helpers';

class Poi extends React.Component {

    constructor() {
        super();

        this.state = {poi: {
            facilities: [],
            labels: [],
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

    render() {
        return (
            <section className="poi">
                <ul className="poi-gallery">
                    { this.renderImage(this.state.poi.mainImgUrl) }
                    { this.state.poi.images.map(this.renderImage) }
                </ul>
                <section className="poi-section">
                    <h1 className="poi-title">{ this.state.poi.title }</h1>
                    <div className="poi-opening-hours">
                        <span className="icon-open-now poi-icon"></span>
                        Open until 18:00
                    </div>
                    <div className="poi-tickets">
                        <span className="icon-ticket poi-icon"></span>
                        <ul className="poi-ticket-list">
                            { this.state.poi.ticketInformation.map(ticket => (
                                <li className="poi-ticket-item">
                                    <span className="poi-ticket-label">{ ticket.label }: </span>
                                    <span className="poi-ticket-price">{ formatPrice(ticket.price) }</span>
                                </li>
                            )
                        )}
                        </ul>
                    </div>
                    <button className="button-primary" type="button">Get Tickets</button>
                </section>
            </section>
        )
    }

    renderImage(url) {
        return (
            <li className="poi-gallery-item">
                <img className="poi-gallery-img" src={url} alt={""} />
            </li>
        )
    }
}

export default Poi;
