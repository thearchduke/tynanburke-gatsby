import React from 'react'
import Link from 'gatsby-link'

const TitleLink = props => (
    <div style={{ width: `25%`, float: `left`, margin: `0 auto` }}>
        <Link style={{ color: `black`, fontVariant: `small-caps` }} to={props.to}>{props.text}</Link>
    </div>
)

export default () => (
    <div style={{ paddingTop: `5px`, paddingLeft: `10%`, margin: `0 auto`, width: `80%` }}>
        <TitleLink to="/" text="home"/>
        <TitleLink to="/work/" text="work"/>
        <TitleLink to="/writing/" text="words"/>
        <TitleLink to="/photography/" text="photos"/>
    </div>
)
