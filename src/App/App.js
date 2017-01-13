import React from 'react';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation path={this.props.pathname}/>
                <FiltersContainer />
            </div>
        )
    }
}

export default App;
