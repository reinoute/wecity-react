import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import {Link} from 'react-router';
import {formatPrice, formatOpeningTimes} from '../helpers';

const Activity = (props) => (
    <div className="poi">
        <div className="activity-header">
            <Link to={'/' + props.context} className="activity-anchor-back"><
                span className="icon-chevron-left"> Back</span>
            </Link>
        </div>
        <CarouselContainer items={props.details.images}/>
        <section className="activity-body">
            <section className="activity-summary">
                <h1 className="activity-title">{ props.details.title }</h1>
                <div className="activity-type">
                    <span className={"activity-icon icon-" + props.details.type}></span>
                    <span className="activity-type-text">{ props.details.type }</span>
                </div>
                { props.details.openingHours &&
                <div className="activity-opening-hours">
                    <span className="icon-open-now activity-icon"></span>
                    { formatOpeningTimes(props.details.openingHours) }
                </div>
                }
                { props.details.ticketInformation.length > 0 &&
                <div className="activity-tickets">
                    <span className="icon-ticket activity-icon"></span>
                    <ul className="activity-ticket-list">
                        { props.details.ticketInformation.map(ticket =>
                            <li className="activity-ticket-item" key={ ticket.id }>
                                <span className="activity-ticket-label">{ ticket.label }: </span>
                                <span className="activity-ticket-price">{ formatPrice(ticket.price) }</span>
                            </li>
                        )}
                    </ul>
                </div> }
                { props.details.isBookable && <button className="button-primary" type="button">Get Tickets</button> }
                { props.details.skipTheLine &&
                <div className="activity-skiptheline">
                    <span className="activity-skiptheline-title">Skip the line</span>
                    <p>With your tickets you can use a special lane to avoid standing in line.</p>
                </div>
                }
            </section>
            <section className="activity-section">
                <h2 className="activity-subtitle">About</h2>
                <p className="activity-description">
                    { props.details.summary }
                </p>
                { props.details.tags.length > 0 &&
                <div className="activity-tags">
                    <strong>Tags: </strong>
                    <ul className="activity-tag-list">
                        { props.details.tags.map(
                            (tag, index) => <li className="activity-tag-item" key={index}>{ tag.value }</li>)
                        }
                    </ul>
                </div>
                }
                <ul className="activity-about-list">
                    <li className="activity-about-item icon-mapswitch">
                        { props.details.address }, { props.details.district }. <a
                        href={ 'https://www.google.com/maps/place/' + props.details.coordinates[0] + ',' + props.details.coordinates[1] }>Show
                        on map</a>
                    </li>
                </ul>
            </section>
        </section>
    </div>
);

export default Activity;