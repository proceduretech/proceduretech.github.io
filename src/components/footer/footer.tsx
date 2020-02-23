import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => (
  <footer>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>
    </Container>
  </footer>
)

export default Footer
