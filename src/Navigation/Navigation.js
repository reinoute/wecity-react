import React from 'react';
import { Link } from 'react-router';
import logoText from './wecity-logo-text.svg';

const Navigation = (props) => {
    return (
        <header className="navigation" role="banner">
            <div className="navigation-logo">
                <span className="icon-logo-wecity"></span>
                <img className="navigation-logo-text" src={ logoText } alt="weCity"/>
            </div>
            <nav role="navigation">
                <ul className="navigation-nav-list">
                    <li className="navigation-nav-item">
                        <Link to={'/'}
                              className={ "navigation-item-anchor " + (props.path === "/" ? "is-active" : "")}>Top 10</Link>
                    </li>
                    <li className="navigation-nav-item">
                        <Link to={'/all'}
                              className={ "navigation-item-anchor " + (props.path === "/all" ? "is-active" : "")}>All activities</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
