import React from 'react';
import {Link} from 'react-router';
import {getPois} from '../api';

class PoiList extends React.Component {

    constructor() {
        super();

        this.navigateToPoi = this.navigateToPoi.bind(this);
        // set initial state
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
        getPois().then(items => this.setState({pois: items}));
    }

    navigateToPoi(index) {
        this.context.router.transitionTo(`/poi/${index}`);
    }

    render() {
        return (
            <ul className="poi-list">
                { this.state.pois.map(item => this.renderItem(item)) }
            </ul>
        )
    }

    renderItem(item) {
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
    }
}

PoiList.contextTypes = {
    router: React.PropTypes.object
}

export default PoiList;
