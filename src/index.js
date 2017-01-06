import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import TopTenLayout from './TopTenLayout/TopTenLayout';
import AllPoisLayout from './AllPoisLayout/AllPoisLayout';
import NotFound from './NotFound/NotFound';
import PoiContainer from './PoiContainer/PoiContainer';

import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={TopTenLayout}/>
                <Match exactly pattern="/all" component={AllPoisLayout}/>
                <Match exactly pattern="/poi/:id" component={PoiContainer}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));