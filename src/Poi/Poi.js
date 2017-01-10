import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import {Link} from 'react-router';
import {formatPrice} from '../helpers';

const Poi = (props) => (
    <div className="poi">
        <div className="poi-header">
            <Link to={'/'} className="poi-anchor-back"><
                span className="icon-chevron-left"> Back</span>
            </Link>
        </div>
        <CarouselContainer items={props.details.images}/>
        <section className="poi-body">
            <section className="poi-summary">
                <h1 className="poi-title">{ props.details.title }</h1>
                <div className="poi-type">
                    <span className={"poi-icon icon-" + props.details.type}></span>
                    <span className="poi-type-text">{ props.details.type }</span>
                </div>
                <div className="poi-opening-hours">
                    <span className="icon-open-now poi-icon"></span>
                    Open until 18:00
                </div>
                { props.details.ticketInformation.length > 0 &&
                    <div className="poi-tickets">
                        <span className="icon-ticket poi-icon"></span>
                        <ul className="poi-ticket-list">
                            { props.details.ticketInformation.map(ticket =>
                                <li className="poi-ticket-item" key={ ticket.id }>
                                    <span className="poi-ticket-label">{ ticket.label }: </span>
                                    <span className="poi-ticket-price">{ formatPrice(ticket.price) }</span>
                                </li>
                            )}
                        </ul>
                    </div> }
                <button className="button-primary" type="button">Get Tickets</button>
                { props.details.skipTheLine &&
                    <div className="poi-skiptheline">
                        <span className="poi-skiptheline-title">Skip the line</span>
                        <p>With your tickets you can use a special lane to avoid standing in line.</p>
                    </div>
                }
            </section>
            <section className="poi-section">
                <h2 className="poi-subtitle">About</h2>
                <p className="poi-description">
                    { props.details.summary }
                </p>
                <div className="poi-tags">
                    <strong>Tags: </strong>
                    <ul className="poi-tag-list">
                        { props.details.tags.map(
                            (tag, index) => <li className="poi-tag-item" key={index}>{ tag.value }</li>)
                        }
                    </ul>
                </div>
                <ul className="poi-about-list">
                    <li className="poi-about-item icon-mapswitch">
                        { props.details.address }, { props.details.district }. <a
                        href={ 'https://www.google.com/maps/place/' + props.details.coordinates[0] + ',' + props.details.coordinates[1] }>Show
                        on map</a>
                    </li>
                </ul>
            </section>
        </section>
    </div>
);

export default Poi;
