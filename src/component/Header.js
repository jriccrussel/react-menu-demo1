import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header space-between flex align-center">
                        <div className="logo">
                            <Link to="/">HAMBRG.</Link>
                        </div>
                        <div className="menu">
                            <button>MENU</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
