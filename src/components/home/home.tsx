import React from "react"
import { Row } from "react-bootstrap"

import { PrimaryThemeButton, SecondaryThemeButton } from "../shared/shared"
import ShowcaseCard from "../showcase-card/showcase-card"

import styles from "./home.module.scss"

const Home = () => (
  <div className={styles.hero}>
    <h1 className="text-accent">Heading</h1>
    <p className="small">
      Subheading - this is a sample text for almost 120 lines Some text that is
      a sub headline
    </p>
    <PrimaryThemeButton>Hire Us</PrimaryThemeButton>
    <SecondaryThemeButton className="mx-3">Our Work</SecondaryThemeButton>
    <Row>
      <ShowcaseCard
        image="https://via.placeholder.com/286x250"
        title="Project title 1 - client name"
        description="Lorem Epsom text. This is a sample description of the project"
      />
    </Row>
  </div>
)

export default Home
