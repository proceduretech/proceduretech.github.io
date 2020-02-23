import React from "react"
import { Row, Container } from "react-bootstrap"

import {
  PrimaryThemeButton,
  SecondaryThemeButton,
  IntrinsicProps,
} from "../shared/shared"
import ShowcaseCard from "../showcase-card/showcase-card"

import styles from "./home.module.scss"

const Heading = ({ className }: IntrinsicProps) => {
  return <h1 className={`text-white ${className ? className : ""}`}>Heading</h1>
}

const SubHeading = () => {
  return (
    <p className="small">
      Subheading - this is a sample text for almost 120 lines Some text that is
      a sub headline
    </p>
  )
}

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Heading />
        <SubHeading />
        <PrimaryThemeButton>Hire Us</PrimaryThemeButton>
        <SecondaryThemeButton className="mx-3">Our Work</SecondaryThemeButton>
      </Container>
    </div>
  )
}

const WorkSection = () => {
  return (
    <Row>
      <ShowcaseCard
        image="https://via.placeholder.com/286x250"
        title="Project title 1 - client name"
        description="Lorem Epsom text. This is a sample description of the project"
      />
    </Row>
  )
}

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
    </>
  )
}

export default Home
