import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './App/App';
import NotFound from './NotFound/NotFound';
import PoiContainer from './PoiContainer/PoiContainer';

import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Match exactly pattern="/search" component={App}/>
                <Match exactly pattern="/poi/:id" component={PoiContainer}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));