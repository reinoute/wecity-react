import React from 'react';
import {Link} from 'react-router';
import {formatPrice} from '../helpers';

const ActivityList = (props) => (
    <div className="activity-list">
        <ul className="activity-list-items">
            { props.items.map(item => {
                return (
                    <ActivityListItem key={item.id} details={item} path={props.path}/>
                )
            })}
        </ul>
    </div>
);

const ActivityListItem = (props) => {
    const backgroundImage = { backgroundImage: 'url(' + props.details.imgUrl + ')' };

    return (
        <li className="activity-list-item" key={ props.details.id }>
            <Link to={props.path + '/' + props.details.id}
                  className="activity-list-item-anchor">
                <h1 className="activity-list-item-title">{ props.details.title }</h1>
                <div className="activity-list-item-details" style={backgroundImage}>
                    <ul className="activity-list-item-labels">
                        <li className={"activity-list-item-type icon-" + props.details.type}>{ props.details.type }</li>
                        { props.details.price &&
                        <li className="activity-list-item-price">{ formatPrice(props.details.price) }</li> }
                        { props.details.skipTheLine && <li className="activity-list-item-skip">Skip the line</li> }
                    </ul>
                </div>
            </Link>
        </li>
    );
}

export default ActivityList;
