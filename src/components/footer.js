import React from 'react'

import gatsbyLogo from '../images/gatsby.svg'


export default () => (
    <div style={{ margin: `0 auto`, width: `80%`, fontSize: `75%`, textAlign: `center`, verticalAlign: `middle` }}>
        <hr/>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" style={{ textDecoration: `none`, textShadow: `none`, backgroundImage: `none` }}>
            <img
                alt="Creative Commons License" 
                src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" 
                style={{ margin: `0 auto`, display: `block` }}
            />
        </a>
        This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        <br/>
        <a href="https://gatsbyjs.org" style={{ textDecoration: `none`, textShadow: `none`, backgroundImage: `none` }}>
            <img 
                src={gatsbyLogo} 
                style={{ width: `30px`, height: `30px`, margin: `0 auto`, display: `block` }}
            />
        </a>&nbsp;&nbsp;Powered by <a href="https://gatsbyjs.org">gatsby.js</a>
        <br/>
        Served via <a href="https://www.netlify.com">Netlify</a>
        <br/>
        Copyright 2018 Tynan Burke
    </div>
)
