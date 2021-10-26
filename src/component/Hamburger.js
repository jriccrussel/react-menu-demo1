import React from 'react'
import { Link } from 'react-router-dom'

const Hamburger = () => {
    return (
        <div className="hamburger-menu">
            <div className="menu-secondary-background-color"></div>
            <div className="menu-layer">
                <div className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/oppurtunies">Opportunity</Link>
                                    </li>
                                    <li>
                                        <Link to="/solutions">Opportunity</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="info">
                                <h3>Our Promis</h3>
                                <p>
                                The passage experienced a surge in popularity during the 1960s
                                when Letraset used it on their dry-transfer sheets, and again
                                during the 90s as desktop publishers bundled the text with
                                their software.
                                </p>
                            </div>
                            <div className="locations">
                                Locations:
                                <span>Dallas</span>
                                <span>Austin</span>
                                <span>New York</span>
                                <span>San Francisco</span>
                                <span>Hong Kong</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
