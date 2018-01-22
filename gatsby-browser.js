/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import animation from './src/utils/animation'

exports.shouldUpdateScroll = args => {
    return false;
};

exports.onRouteUpdate = ({location}) => {
    if (location.hash) {
        const hash = location.hash;
        setTimeout(() => {
          let el = document.querySelector(hash);
          el.classList.add("selected-anchor");
          el.scrollIntoView();
        }, 0);
    }
    if (location.pathname === '/dev') {
        setTimeout(() => {
            animation();
        }, 0);
    }
};
