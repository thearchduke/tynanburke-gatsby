import anime from './anime-src'

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

export default {
    '/': indexAnimation,
    '/work': workAnimation,
    '/work/': workAnimation,
}
