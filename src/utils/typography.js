import Typography from "typography"
import twinPeaksTheme from 'typography-theme-twin-peaks'

twinPeaksTheme.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
        color: `#78f`,
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #abc 1px, #abc 2px, rgba(0, 0, 0, 0) 2px)`
    },
})
var typography = new Typography(twinPeaksTheme);

export default typography;