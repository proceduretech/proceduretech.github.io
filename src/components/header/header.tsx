import { Link } from "gatsby"
import React from "react"

import Navigation, { NavigationItemProps } from "../navigation/navigation"

import styles from "./header.module.scss"

interface HeaderProps {
  siteTitle: string
  menuLinks: [NavigationItemProps]
}

const Header = ({ siteTitle, menuLinks }: HeaderProps) => (
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
      <Navigation menuLinks={menuLinks} />
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
