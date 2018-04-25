import React from 'react'
import Link from 'gatsby-link'
import UrlFor from '../utils/urls'


const TitleLink = props => (
    <div style={{ width: `25%`, float: `left`, margin: `0 auto` }}>
        <Link style={{ color: `black`, fontVariant: `small-caps`, fontSize: `18px` }} to={UrlFor(props.to)}>{props.text}</Link>
    </div>
)

export default () => (
    <div style={{ paddingTop: `15px`, paddingLeft: `10%`, margin: `0 auto`, width: `80%` }}>
        <TitleLink to="home" text="home"/>
        <TitleLink to="work" text="work"/>
        <TitleLink to="writing" text="words"/>
        <TitleLink to="photography" text="photos"/>
    </div>
)
