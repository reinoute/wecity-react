import React from 'react';
import { Match } from 'react-router';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation path={this.props.pathname}/>
                <Match pattern="/search" component={FiltersContainer}/>
                <PoiListContainer/>
            </div>
        )
    }
}

export default App;
