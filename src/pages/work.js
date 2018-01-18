import React from 'react'
import Portfolio from '../components/portfolio'


export default () => (
<div>
    <h1>Work</h1>
    <hr/>

    <h2>In brief</h2>
    <p>I'm a full-stack web developer with over ten years experience. My current work finds me developing primarily in python (webapp2 and django) and javascript (react, d3, jQuery, vanilla), with a bit of Wordpress, and serving sites via Google App Engine and Google Compute Engine. I also do data modeling and management, and some digital librarianship.</p>
    <p>You can download my resumé {/*TODO*/}<a href="https://resume-on-CDN">here (PDF)</a>. I'm also on GitHub as <a href="https://github.com/thearchduke">thearchduke</a>, and <a href="https://www.linkedin.com/in/tynan-burke-27537122?trk=hp-identity-name">this is me on LinkedIn</a>.</p>
    <p>Should the need arise, you can also find my PGP public key <a href="http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x5922558E4431C0B2">here</a>. My email address is available on my resumé.</p>
    <Portfolio/>
</div>
)
