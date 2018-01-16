import React from 'react'
import Link from 'gatsby-link'

export default ({ title }) => (
    <div style={{ float: `right`, display: `block` }}>
        <Link to="/">
            {title}
        </Link>
    </div>
)
