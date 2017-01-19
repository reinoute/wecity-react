import React from 'react';
import {Link} from 'react-router';
import {formatPrice} from '../helpers';

const FilteredActivityList = (props) => (
    <div className="poi-list">
        <ul className="poi-list-items">
            { props.items.map(item => {
                return (
                    <FilteredActivityListItem key={item.id} details={item} isSearchActive={props.isSearchActive}/>
                )
            })}
        </ul>
    </div>
);

const FilteredActivityListItem = (props) => {
    const backgroundImage = { backgroundImage: 'url(' + props.details.imgUrl + ')' };

    return (
        <li className="poi-list-item" key={ props.details.id }>
            <Link to={props.isSearchActive ? '/search/' + props.details.id : '/top10/' + props.details.id}
                  className="poi-list-item-anchor">
                <h1 className="poi-list-item-title">{ props.details.title }</h1>
                <div className="poi-list-item-details" style={backgroundImage}>
                    <ul className="poi-list-item-labels">
                        <li className={"poi-list-item-type icon-" + props.details.type}>{ props.details.type }</li>
                        { props.details.price &&
                        <li className="poi-list-item-price">{ formatPrice(props.details.price) }</li> }
                        { props.details.skipTheLine && <li className="poi-list-item-skip">Skip the line</li> }
                    </ul>
                </div>
            </Link>
        </li>
    );
}

export default FilteredActivityList;
