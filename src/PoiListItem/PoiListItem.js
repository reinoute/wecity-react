import React from 'react';
import { Link } from 'react-router';

class PoiListItem extends React.Component {

    render() {
        return (
            <li className="poi-list-item">
                <Link to={'/poi/' + this.props.index} className="poi-list-item-anchor">
                    <h1 className="poi-list-item-title">{this.props.title}</h1>
                    <div className="poi-list-item-details">
                        <img className="poi-list-item-img"
                             src={this.props.imgUrl}
                             width="375" height="200"
                             alt={this.props.title}/>
                        <div className="poi-list-item-labels">
                            <span className="poi-list-item-price">€ {this.props.price},-</span>
                            <span className="poi-list-item-skip">Skip the line</span>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default PoiListItem;