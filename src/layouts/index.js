import React from 'react'
import Img from "gatsby-image"
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import TitleBar from '../components/title-bar'
import Footer from '../components/footer'


export default ({ children, data }) => (
  <div style={{
    backgroundImage: 'url(' + data.backgroundImageSharp.sizes.src + ')', 
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
    backgroundSize: `cover`,
    paddingTop: `4rem`,
    paddingBottom: `4rem`,
  }}>
    <Helmet>
      <title>{data.site.siteMetadata.defaultTitle}</title>
      <style>{`
        .selected-anchor {
          background: linear-gradient(to right, #fcc, white, white 35%)
        }
      `}</style>
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        backgroundColor: `white`,
        opacity: `0.95`,
        height: `100%`
      }}
    >
      <TitleBar />
      {children()}
      <Footer />
    </div>
  </div>
)

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                defaultTitle
            }
        }
        backgroundImageSharp: imageSharp(id: { regex: "/2.jpg/" }) {
            sizes(maxWidth: 1500) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
