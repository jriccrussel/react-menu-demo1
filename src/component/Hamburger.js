import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Hamburger = ({state}) => {
    // Ref for animated dom nodes
    let menu = useRef(null)
    let showMenu = useRef(null)
    let showBg = useRef(null)
    let bg = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let info = useRef(null)

    useEffect(() => {
        if (state.clicked === false){
            // Close Menu
            gsap.to([showMenu.current, showBg.current], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            })
            gsap.to(menu.current, { duration: 1, css: { display: "none" } })

            // Close Menu without Animation 
            // menu.current.style.display = "none"

        } else if (state.clicked === true || (state.clicked === true && state.initial === null)){
            // Open Menu
            gsap.to(menu.current, { duration: 0, css: { display: "block" } })
            gsap.to([showMenu.current, showBg.current], {
                duration: 0,
                opacity: 1,
                height: "100%",
            })
            staggerShow(showMenu.current, showBg.current)
            fadeInUp(info.current)
            staggerTxt(line1.current, line2.current, line3.current)
            // Open Menu without Animation 
            // menu.current.style.display = "block"
        }
    }, [state])

    // ANIMATIONS
    const staggerShow = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: "right top",
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        })
    }

    const staggerTxt = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: 0.8,
            y: 100,
            delay: 0.1,
            ease: "power3.inOut",
            stagger: {
                amount: 0.3           
            }
        })
    }
    
    const fadeInUp = (node) => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: 0.2,
            opacity: 0,
            ease: "power3.inOut"
        })
    }

    return (
        // ref={el => (menu = el)}
        <div ref={menu} className="hamburger-menu">
            <div ref={showBg} className="menu-secondary-background-color"></div>
            <div ref={showMenu} className="menu-layer">
                <div className="menu-city-background"></div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links flex align-center space-between">
                            <nav>
                                <ul>
                                    <li>
                                        <Link ref={line1} to="/oppurtunies">Opportunity</Link>
                                    </li>
                                    <li>
                                        <Link ref={line2} to="/solutions">Opportunity</Link>
                                    </li>
                                    <li>
                                        <Link ref={line3} to="/contact-us">Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={info} className="info">
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
