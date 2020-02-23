import { Link } from "gatsby"
import React from "react"
import { Container, Navbar } from "react-bootstrap"

import Navigation, { NavigationProps } from "../navigation/navigation"

import styles from "./header.module.scss"

interface NavigationBrandProps {
  siteTitle: string
}

const NavigationBrand = ({ siteTitle }: NavigationBrandProps) => {
  return (
    <Navbar.Brand>
      <Link to="/" className="text-white">
        {siteTitle}
      </Link>
    </Navbar.Brand>
  )
}

const NavigationBar = ({
  siteTitle,
  menuLinks,
}: NavigationBrandProps & NavigationProps) => {
  return (
    <Navbar variant="dark">
      <NavigationBrand siteTitle={siteTitle} />
      <Navigation menuLinks={menuLinks} />
    </Navbar>
  )
}

const Header = (props: NavigationBrandProps & NavigationProps) => (
  <div className="bg-backgroud-dark">
    <Container>
      <NavigationBar {...props} />
    </Container>
  </div>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
