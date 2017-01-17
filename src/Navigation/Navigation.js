import React from 'react';
import { Link } from 'react-router';
import logoText from './wecity-logo-text.svg';

const Navigation = (props) => {
    return (
        <header className="navigation" role="banner">
            <div className="navigation-container">
                <div className="navigation-logo">
                    <span className="icon-logo-wecity"></span>
                    <img className="navigation-logo-text" src={ logoText } alt="weCity"/>
                </div>
                <nav role="navigation">
                    <ul className="navigation-nav-list">
                        { props.items.map(item =>
                            <li key={item.id} className="navigation-nav-item">
                                <Link to={item.path}
                                      className={ "navigation-item-anchor " + (item.isActive ? "is-active" : "")}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation;
