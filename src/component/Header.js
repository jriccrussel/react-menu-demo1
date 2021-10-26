import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const Header = ({history}) => {
    // Menu State 
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })

    // Button State
    const [disabled, setDisabled] = useState(false)

    //Use Effect
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
        setState({ clicked: false, menuName: "Menu" })
        })
    }, [history])

    // Toggle Menu
    const handleMenu = () => {
        disableMenu()
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
        }
    }

    // Determine if the menu button should be disable
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
          setDisabled(false)
        }, 1200)
    }


    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header space-between flex align-center">
                        <div className="logo">
                            <Link to="/">HAMBRG.</Link>
                        </div>
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>
                                {state.menuName}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state} />
        </header>
    )
}

export default withRouter(Header)
