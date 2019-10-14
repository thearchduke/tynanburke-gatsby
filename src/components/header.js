import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `black`,
      // marginBottom: `1.45rem`,
      borderBottom: `.1rem solid lightgray`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 300,
        padding: `1.2rem .875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `darkgray`,
            textDecoration: `none`,
          }}
        >
          J. Tynan Burke
        </Link>
      </h2>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
