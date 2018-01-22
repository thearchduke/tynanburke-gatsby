import anime from './anime-src'

export default () => {
    anime({
        targets: '#svgAttributes polygon',
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        direction: 'alternate',
        loop: 'true',
        easing: 'easeInOutExpo'
    });
}
