import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import TitleBar from '../components/title-bar'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.defaultTitle}</title>
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
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
    }
`
