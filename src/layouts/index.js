import React from 'react'
import Img from "gatsby-image"
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import TitleBar from '../components/title-bar'

const TemplateWrapper = ({ children, data }) => (
  <div style={{
    backgroundImage: 'url(' + data.imageSharp.sizes.src + ')', 
    backgroundRepeat: `no-repeat`,
    paddingTop: `4rem`,
    paddingBottom: `4rem`
  }}>
    <Helmet>
      <title>{data.site.siteMetadata.defaultTitle}</title>
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        backgroundColor: `white`,
        opacity: `0.98`
      }}
    >
      <TitleBar />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                defaultTitle
            }
        }
        imageSharp(id: { regex: "/2.jpg/" }) {
            sizes(maxWidth: 1500) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
