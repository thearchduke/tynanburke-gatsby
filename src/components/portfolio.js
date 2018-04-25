import React from 'react'


export const PortfolioItem = props => (
    <li>
        <h4 id={props.anchor || props.headline.replace(/ /g,'')}><a name={props.anchor || props.headline.replace(/ /g,'')}></a>{props.headline}</h4>
        {props.children}
    </li>
)

export default () => (
<div>
    <h2>Portfolio</h2>
    <ul>
        <PortfolioItem headline="Gallery">
            <p>(pictures of visualizations and such)</p>
        </PortfolioItem>
        <PortfolioItem headline="Pathfork">
            <p><a href="https://pathfork.herokuapp.com">Pathfork</a> is a website that I built because I wanted a cloud-based writing organization tool. It lets you compose stories, and manage information about your characters and settings, adding them like blog tags to the sections of your work. I use it to organize short stories and my webcomic, though I saw the initial need while trying to remember which characters in a novel wore watches.</p>
            <p>It is written in Go, Postgres, and javascript, and served by Heroku, and the code is available <a href="https://github.com/thearchduke/pathfork">on GitHub</a>.</p>
        </PortfolioItem>
        <PortfolioItem headline="Wordpress picture tool">
            <p><a href="https://github.com/thearchduke/wordpress-picture-submissions">A Flask app</a> that takes submissions for a travel photos feature, provides an admin panel for managing them, and ultimately posts the collections you select as draft posts to a Wordpress site. Currently live.</p>
        </PortfolioItem>
        <PortfolioItem headline="other">
            <p>This site (tynanburke.com) was made in <a href="https://www.gatsbyjs.org">gatsby</a>, a react-based static site generator. The code is <a href="https://github.com/thearchduke/tynanburke-gatsby">on GitHub</a>. And of course I have many other things on my GitHub account as well.</p>
        </PortfolioItem>
    </ul>
</div>
)
