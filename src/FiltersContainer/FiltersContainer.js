import React from 'react';
import Filters from '../Filters/Filters';

class FiltersContainer extends React.Component {

    state = {isExpanded: false};

    toggleExpand = () => {
        this.setState({isExpanded: this.state.isExpanded ? false : true });
    };
    
    render() {
        return ( <Filters
            handleChange={this.props.handleChange}
            toggleExpand={this.toggleExpand}
            isExpanded={this.state.isExpanded}
            filterCount={this.props.items.filter(item => item.isFiltered === true).length}
            resultCount={this.props.resultCount}/> )
    }
}

export default FiltersContainer;
