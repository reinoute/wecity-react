import React from 'react';
import Filters from '../Filters/Filters';

class FiltersContainer extends React.Component {
    
    render() {
        return ( <Filters handleChange={this.props.handleChange}/> )
    }
}

export default FiltersContainer;
