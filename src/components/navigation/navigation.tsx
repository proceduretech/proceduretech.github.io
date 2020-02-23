import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

export interface NavigationItemProps {
  name: string
  link: string
}

interface NavigationProps {
  menuLinks: [NavigationItemProps]
}

const NavigationItem = ({ name, link }: NavigationItemProps) => {
  return (
    <Nav.Item>
      <Link to={link}>{name}</Link>
    </Nav.Item>
  )
}

const Navigation = ({ menuLinks }: NavigationProps) => {
  return (
    <>
      {menuLinks.map(link => {
        return <NavigationItem key={link.name} {...link} />
      })}
    </>
  )
}

export default Navigation
