import gsap from 'gsap'

export const staggerShow = (node1, node2) => {
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

export const staggerTxt = (node1, node2, node3) => {
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

export const fadeInUp = (node) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    })
}

// export const handleCity = (node) => {
//     gsap.to(bg.current, {
//         duration: 0,
//         // background: `url(${node}) center center`,
//         background: `url(${node})`,
//     })
//     gsap.to(bg.current, {
//         duration: 0.4,
//         opacity: 1,
//         ease: "power3.inOut"
//     })
//     gsap.to(bg.current, {
//         duration: 0.4,
//         // scaleY: 2,\
//         scaleY: 1,
//         transformOrigin: "right top"
//     })
// }

// export const handleCityReturn = () => {
//     gsap.to(bg.current, {
//         duration: 0.4,
//         opacity: 0,
//     })
// }

export const handleHover = (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power1.inOut"
    })
}

export const handleHoverExit = (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power1.inOut"
    })
}



// OPEN MENU
// export const staggerReveal = (node1, node2) => {
//   gsap.from([node1, node2], {
//     duration: 0.8,
//     height: 0,
//     transformOrigin: "right top",
//     skewY: 2,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.1
//     }
//   })
// }

// CLOSE MENU
// export const staggerRevealClose = (node1, node2) => {
//   gsap.to([node1, node2], {
//     duration: 0.8,
//     height: 0,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.07
//     }
//   })
// }

// STAGGER THE LINKS TO APPEAR
// export const staggerText = (node1, node2, node3) => {
//   gsap.from([node1, node2, node3], {
//     duration: 0.8,
//     y: 100,
//     delay: 0.1,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.3
//     }
//   })
// }

// Fade up for the additonal info on our menu
// export const fadeInUp = node => {
//   gsap.from(node, {
//     y: 60,
//     duration: 1,
//     delay: 0.2,
//     opacity: 0,
//     ease: "power3.inOut"
//   })
// }

// Hover on the link
// export const handleHover = e => {
//   gsap.to(e.target, {
//     duration: 0.3,
//     y: 3,
//     skewX: 4,
//     ease: "power1.inOut"
//   })
// }

// Hover off the link
// export const handleHoverExit = e => {
//   gsap.to(e.target, {
//     duration: 0.3,
//     y: -3,
//     skewX: 0,
//     ease: "power1.inOut"
//   })
// }

// adds city image once you hover on
// export const handleCity = (city, target) => {
//   gsap.to(target, {
//     duration: 0,
//     background: `url(${city}) center center`
//   })
//   gsap.to(target, {
//     duration: 0.4,
//     opacity: 1,
//     ease: "power3.inOut"
//   })
//   gsap.from(target, {
//     duration: 0.4,
//     skewY: 2,
//     transformOrigin: "right top"
//   })
// }

// Removes the city image once you hover off
// export const handleCityReturn = target => {
//   gsap.to(target, {
//     duration: 0,
//     skewY: 0
//   })
//   gsap.to(target, {
//     duration: 0.4,
//     opacity: 0,
//     skewY: 0
//   })
// }