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
            types: [
                {
                    name: 'Museum',
                    isFiltered: false
                },
                {
                    name: 'Attraction',
                    isFiltered: false
                },
                {
                    name: 'Collection',
                    isFiltered: false
                },
                {
                    name: 'Insider',
                    isFiltered: false
                },
                {
                    name: 'Explore',
                    isFiltered: false
                },
                {
                    name: 'Shopping',
                    isFiltered: false
                },
                {
                    name: 'Restaurant',
                    isFiltered: false
                },
                {
                    name: 'Nightlife',
                    isFiltered: false
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let types = this.state.types.slice(0); // clone array
        const target = event.target;

        types
            .filter(item => item.name.toUpperCase() === target.value.toUpperCase())
            .forEach(item => item.isFiltered = target.checked);

        const appliedFilters = types.filter(item => item.isFiltered).map(item => item.name.toLowerCase());

        const filteredPois = this.state.pois.slice(0) // clone all pois
            .filter(item => appliedFilters.indexOf(item.type) >= 0); // and filter them

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
                <main>
                    <Match pattern="/search" render={() => <FiltersContainer handleChange={this.handleChange} items={this.state.types}/>}/>
                    <PoiListContainer items={this.state.filteredPois}/>
                </main>
            </div>
        )
    }
}

export default App;
