import React from "react"
import { Nav } from "react-bootstrap"

export interface NavigationItemProps {
  name: string
  link: string
}

interface NavigationProps {
  menuLinks: [NavigationItemProps]
}

const NavigationItem = (props: NavigationItemProps) => {
  return (
    <Nav.Item>
      <Nav.Link href={props.link}>{props.name}</Nav.Link>
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
