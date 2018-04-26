/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import routesAnimationsMap from './src/utils/animation'

exports.shouldUpdateScroll = args => {
    return false;
};

exports.onRouteUpdate = ({location}) => {
    if (location.hash) {
        // in-page anchors don't work out of the box with Gatsby
        const hash = location.hash;
        setTimeout(() => {
          let el = document.querySelector(hash);
          if (el !== null) {
            el.classList.add("selected-anchor");
            el.scrollIntoView();
            return;
          } else {
            return;
          }
        }, 0);
    }
    if (routesAnimationsMap[location.pathname] !== undefined) {
        // trigger anime.js svg animation for top text with per-page parameters
        setTimeout(() => {
            routesAnimationsMap[location.pathname]();
        }, 0);
    }
};
