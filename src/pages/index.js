import React from 'react'
import Link from 'gatsby-link'
import UrlFor from '../utils/urls'


export default () => (
  <div>
    <h1 id="greetings">Greetings.</h1>
    <p>Welcome to my corner of the Web. My name is Tynan Burke, and I'm a web developer, digital librarian, and writer.</p>

    <p>According to the logs, most people come here for my <Link to={UrlFor("work")}>resumé and portfolio</Link>.</p>

    <p>If you are not one of these people, or if you are but would like to see other things as well, 
        I also write and draw <Link to="/words#againststupidity">a webcomic</Link>, 
        host <Link to={UrlFor("work") + '#Pathfork'}>a free writing-tools website</Link>, 
        (very) occasionally <a href="https://tynan.blog">blog</a>,
        and have <Link to={UrlFor("photography")}>a small sampling</Link> of photography.
    </p>
  </div>
)
