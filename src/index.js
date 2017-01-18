import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss, Redirect} from 'react-router';

import App from './App/App';
import NotFound from './NotFound/NotFound';
import PoiContainer from './PoiContainer/PoiContainer';

import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" render={() => <Redirect to="/top10"/>}/>
                <Match exactly pattern="/top10" component={App}/>
                <Match exactly pattern="/top10/:id" component={PoiContainer}/>
                <Match exactly pattern="/search" component={App}/>
                <Match exactly pattern="/search/:id" component={PoiContainer}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));