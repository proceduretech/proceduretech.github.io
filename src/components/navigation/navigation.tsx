import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

export interface NavigationItemProps {
  name: string
  link: string
}

export interface NavigationProps {
  menuLinks: [NavigationItemProps]
}

const NavigationItem = ({ name, link }: NavigationItemProps) => {
  return (
    <Nav.Item>
      <Link
        to={link}
        className="nav-link"
        activeClassName="nav-link active text-accent"
      >
        {name}
      </Link>
    </Nav.Item>
  )
}

const Navigation = ({ menuLinks }: NavigationProps) => {
  return (
    <Nav className="ml-auto">
      {menuLinks.map(link => {
        return <NavigationItem key={link.name} {...link} />
      })}
    </Nav>
  )
}

export default Navigation
