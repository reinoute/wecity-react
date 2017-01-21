import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './App/App';
import ActivityContainer from './ActivityContainer/ActivityContainer';
import NotFound from './NotFound/NotFound';

import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Match exactly pattern="/top10" component={App}/>
                <Match exactly pattern="/top10/:id" component={ActivityContainer}/>
                <Match exactly pattern="/search" component={App}/>
                <Match exactly pattern="/search/:id" component={ActivityContainer}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));