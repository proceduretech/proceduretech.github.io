import React from "react"
import { Row } from "react-bootstrap"

import ThemeButton from "../themeButton/themeButton"
import ShowcaseCard from "../showcase-card/showcase-card"

const Home = () => (
  <>
    <h1 className="text-accent">Heading</h1>
    <p className="small">
      Subheading - this is a sample text for almost 120 lines Some text that is
      a sub headline
    </p>
    <ThemeButton title="Hire Us" />
    <ThemeButton title="Our Work" classes="bg-transparent text-accent mx-3" />
    <Row>
      <ShowcaseCard
        image="https://via.placeholder.com/286x250"
        title="Project title 1 - client name"
        description="Lorem Epsom text. This is a sample description of the project"
      />
    </Row>
  </>
)

export default Home
