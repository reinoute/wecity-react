import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './App';
import NotFound from './NotFound';
import Poi from './Poi';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Match exactly pattern="/poi/:id" component={Poi}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));