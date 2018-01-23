import anime from './anime-src'

const indexAnimation = () => {
    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCubic',
        duration: 2800,
        //delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false,
    })
}

export default {'/': indexAnimation}
