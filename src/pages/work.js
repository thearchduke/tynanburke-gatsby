import React from 'react'

export default () => (
<div>
    <h1>Work</h1>
    <hr/>

    <h2>In brief</h2>
    <p>I'm a full-stack web developer with over ten years experience. My current work finds me developing primarily in python (webapp2 and django) and javascript (vanilla, jquery, d3, react), with a bit of Wordpress, and serving sites via Google App Engine and Google Compute Engine. I also do data modeling and management, and some digital librarianship.</p>
    <p>You can download my resumé {/*TODO*/}<a href="https://resume-on-CDN">here (PDF)</a>. I'm also on GitHub as <a href="https://github.com/thearchduke">thearchduke</a>, and <a href="https://www.linkedin.com/in/tynan-burke-27537122?trk=hp-identity-name">this is me on LinkedIn</a>.</p>
    <p>Should the need arise, you can also find my public PGP key <a href="http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x5922558E4431C0B2">here</a>. My email address is available on my resumé.</p>

    <h2>Portfolio</h2>
    <ul>
        <li>
            <h4>Gallery</h4>
            <p>pictures of visualizations and such</p>
        </li>
        <li>
            <h4 id="pathfork"><a name="pathfork"></a>Pathfork</h4>
            <p><a href="https://pathfork.herokuapp.com">Pathfork</a> is a website that I built because I wanted a cloud-based writing organization tool. It lets you compose stories, and manage information about your characters and settings, adding them like blog tags to the sections of your work. I use it to organize short stories and my webcomic, though I saw the initial need while trying to remember which characters in a novel wore watches.</p>
            <p>It is written in Go, Postgres, and javascript, and served by Heroku, and the code is available <a href="https://github.com/thearchduke/pathfork">on GitHub</a>.</p>
        </li>
    </ul>
    <h3>Other</h3>
    <p>This site was made in <a href="https://www.gatsbyjs.org">gatsby</a>, a react-based static site generator.</p>

</div>
);