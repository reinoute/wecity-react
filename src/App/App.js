import React from 'react';
import { Match } from 'react-router';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';
import { getPois } from '../Storage/Storage';

class App extends React.Component {

    state = { pois: [] };

    componentDidMount() {

        getPois()
            .then(items => {
                // on home, only show pois that are bookable (price > 0)
                if (this.props.pathname === "/") {
                    return items.filter(item => item.price > 0);
                } else return items;
            })
            .then(items => this.setState({pois: items}))
    }

    render() {
        return (
            <div>
                <Navigation path={this.props.pathname}/>
                <Match pattern="/search" component={FiltersContainer}/>
                <PoiListContainer items={this.state.pois}/>
            </div>
        )
    }
}

export default App;
