import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.scss"

interface HeaderProps {
  siteTitle?: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="bg-backgroud-dark">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
