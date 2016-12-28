import React from 'react';
import {Link} from 'react-router';

const PoiList = (props) => (
    <ul className="poi-list">
        { props.items.map(item => {
            return (
                <li className="poi-list-item">
                    <Link to={'/poi/' + item.id} className="poi-list-item-anchor">
                        <h1 className="poi-list-item-title">{ item.title }</h1>
                        <div className="poi-list-item-details">
                            <img className="poi-list-item-img"
                                 src={ item.imgUrl }
                                 width="375" height="200"
                                 alt={ item.title }/>
                            <div className="poi-list-item-labels">
                                <span className="poi-list-item-price">€ { item.price },-</span>
                                <span className="poi-list-item-skip">Skip the line</span>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })}
    </ul>
);

export default PoiList;
