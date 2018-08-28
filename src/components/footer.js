import React from 'react'

import gatsbyLogo from '../images/gatsby.svg'


export default () => (
    <div style={{ margin: `0 auto`, width: `80%`, fontSize: `75%`, textAlign: `center`, verticalAlign: `middle` }}>
        <hr/>
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
