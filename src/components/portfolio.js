import React from 'react'


export const PortfolioItem = props => (
    <li>
        <h4 id={props.anchor || props.headline.replace(/ /g,'')}><a name={props.anchor || props.headline.replace(/ /g,'')}></a>{props.headline}</h4>
        {props.children}
    </li>
)

export default () => (
<div>
    <h2>Sample projects</h2>
    <ul>
        <PortfolioItem headline="Pathfork">
            <p><a href="https://pathfork.herokuapp.com">Pathfork</a> is a website that I built because I wanted a cloud-based writing organization tool. It lets you compose stories, and manage information about your characters and settings, adding them like blog tags to the sections of your work. I use it to organize short stories and my webcomic, though I saw the initial need while trying to remember which characters in a novel wore watches.</p>
            <p>It is written in Go, uses postgres for persistence, and a dash of javascript on the front-end. Currently served by Heroku. The code is available <a href="https://github.com/thearchduke/pathfork">on GitHub</a>.</p>
        </PortfolioItem>
        <PortfolioItem headline="Wordpress picture tool">
            <p>I volunteer time for small projects for a few websites I read. One is <a href="https://github.com/thearchduke/wordpress-picture-submissions">a Flask app</a> for a travel photos feature. It takes submissions and provides an admin panel for managing them, utilizing the Wordpress REST API to turn selected collections into draft posts on the main site. Currently live, though I don't manage the deployment, so that link is to GitHub.</p>
        </PortfolioItem>
        <PortfolioItem headline="Other">
            <p>This site (tynanburke.com) was made in <a href="https://www.gatsbyjs.org">gatsby</a>, a react-based static site generator. The code is <a href="https://github.com/thearchduke/tynanburke-gatsby">on GitHub</a>. And of course I have many other things on my GitHub account as well.</p>
        </PortfolioItem>
    </ul>
</div>
)
