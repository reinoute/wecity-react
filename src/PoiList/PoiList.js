import React from 'react';
import {Link} from 'react-router';
import {formatPrice} from '../helpers';

const PoiList = (props) => (
    <ul className="poi-list">
        { props.items.map(item => {
            return (
                <li className="poi-list-item" key={ item.id }>
                    <Link to={props.isSearchActive ? '/search/' + item.id : '/top10/' + item.id} className="poi-list-item-anchor">
                        <h1 className="poi-list-item-title">{ item.title }</h1>
                        <div className="poi-list-item-details">
                            <img className="poi-list-item-img"
                                 src={ item.imgUrl }
                                 width="375" height="200"
                                 alt={ item.title }/>
                            <ul className="poi-list-item-labels">
                                <li className={"poi-list-item-type icon-" + item.type}>{ item.type }</li>
                                { item.price && <li className="poi-list-item-price">{ formatPrice(item.price) }</li> }
                                { item.skipTheLine && <li className="poi-list-item-skip">Skip the line</li> }
                            </ul>
                        </div>
                    </Link>
                </li>
            )
        })}
    </ul>
);

export default PoiList;
