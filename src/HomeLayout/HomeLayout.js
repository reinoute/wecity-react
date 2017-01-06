import React from 'react';
import PoiListContainer from '../PoiListContainer/PoiListContainer';
import logoText from './wecity-logo-text.svg';

class HomeLayout extends React.Component {

    render() {
        return (
            <div className="home-layout">
                <header role="banner">
                    <div className="home-layout-logo">
                        <span className="icon-logo-wecity"></span>
                        <img className="home-layout-logo-text" src={ logoText } alt="weCity"/>
                    </div>
                    <nav role="navigation">
                        <ul className="home-layout-nav-list">
                            <li className="home-layout-nav-item">
                                <button className="button-link is-active" type="button">Top 10</button>
                            </li>
                            <li className="home-layout-nav-item">
                                <button className="button-link" type="button">All activities</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <PoiListContainer />
            </div>
        )
    }
}

export default HomeLayout;
