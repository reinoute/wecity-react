import React from 'react';
import {getPois} from './Api';
import PoiListItem from './PoiListItem';

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
                {
                    this.state.pois.map(item =>
                        <PoiListItem
                            key={item.id}
                            index={item.id}
                            title={item.title}
                            imgUrl={item.imgUrl}
                            price={item.price}
                            navigateToPoi={this.navigateToPoi}/>
                    )
                }
            </ul>
        )
    }
}

PoiList.contextTypes = {
    router: React.PropTypes.object
}

export default PoiList;
