import React from 'react';
import { Match } from 'react-router';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';
import {getPois} from '../Storage/Storage';

class App extends React.Component {

    state = { pois: [] };

    componentDidMount() {
        const onlyBookable = true;

        getPois(onlyBookable)
            .then(items => this.setState({pois: items}));
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
