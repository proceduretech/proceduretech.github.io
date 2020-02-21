import React from "react"
import { Nav } from "react-bootstrap"

interface NavigationItemProps {
  name: string
  link: string
}

const NAV_ITEM: NavigationItemProps[] = [
  {
    link: "/team",
    name: "Team",
  },
]

const NavigationItem = (props: NavigationItemProps) => {
  return (
    <Nav.Item>
      <Nav.Link href={props.link}>{props.name}</Nav.Link>
    </Nav.Item>
  )
}

const Navigation = () => {
  return (
    <Nav activeKey="/team">
      {NAV_ITEM.map((item, index) => {
        return <NavigationItem key={index} props={item} />
      })}
    </Nav>
  )
}

export default Navigation
