import React from 'react';
import { Match } from 'react-router';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';
import { getPois } from '../Storage/Storage';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            pois: [],
            filteredPois: [],
            types: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let types = this.state.types.slice(0); // clone array
        const target = event.target;
        const value = target.value;
        const index = types.indexOf(value);

        // update types filter
        target.checked && index === -1 ? types.push(value) : types.splice(index, 1);

        const filteredPois = this.state.pois.slice(0) // clone all pois
            .filter(item => types.indexOf(item.type) >= 0); // and filter them

        this.setState({
            filteredPois: filteredPois.length > 0 ? filteredPois : this.state.pois.slice(0),
            types: types
        });
    }

    componentDidMount() {

        getPois()
            .then(items => {
                // on home, only show pois that are bookable (price > 0)
                if (this.props.pathname === "/") {
                    return items.filter(item => item.price > 0);
                } else return items;
            })
            .then(items => this.setState({pois: items, filteredPois: items}))
    }

    render() {
        return (
            <div>
                <Navigation path={this.props.pathname}/>
                <Match pattern="/search" render={() => <FiltersContainer handleChange={this.handleChange} />}/>
                <PoiListContainer items={this.state.filteredPois}/>
            </div>
        )
    }
}

export default App;
