import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import {Link} from 'react-router';
import {getPoi} from '../api';
import {formatPrice} from '../helpers';

class Poi extends React.Component {

    constructor() {
        super();

        this.state = {
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

    render() {
        return (
            <div className="poi">

                <div className="poi-header">
                    <Link to={'/'} className="poi-anchor-back"><
                        span className="icon-chevron-left"> Back</span>
                    </Link>
                </div>
                <CarouselContainer items={this.state.poi.images}/>
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
            </div>
        )
    }
}

export default Poi;
