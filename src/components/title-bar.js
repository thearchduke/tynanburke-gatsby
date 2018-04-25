import React from 'react'
import Link from 'gatsby-link'
import UrlFor from '../utils/urls'


const TitleLink = props => (
    <Link style={{ color: `black`, fontVariant: `small-caps`, fontSize: `20px` }} to={UrlFor(props.to)}>{props.text}</Link>
)

export default () => (
    <div style={{ paddingTop: `15px`, margin: `0 auto`, textAlign: `center` }}>
        <TitleLink to="home" text="home"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TitleLink to="work" text="work"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TitleLink to="writing" text="words"/>
        <br/><br/><hr/>
    </div>
)
