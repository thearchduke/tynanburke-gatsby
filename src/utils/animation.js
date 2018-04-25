import anime from './anime-src'

/* Exports an array of functions to be executed at certain routes, used in 
gatsby-browser.js for the svg animations. */

const indexAnimation = () => {
    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        duration: 2800,
        loop: false,
    })
}

const workAnimation = () => {
    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        duration: 1800,
        loop: false,
    })
}

const writingAnimation = () => {
    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        duration: 2200,
        loop: false,
    })
}

export default {
    '/': indexAnimation,
    '/work': workAnimation,
    '/work/': workAnimation,
    '/writing': writingAnimation,
    '/writing/': writingAnimation,
}
