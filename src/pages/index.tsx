import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ThemeButton from "../components/themeButton/themeButton"
import Typography from "../utils/typography"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TypographyStyle typography={Typography} />
    <GoogleFont typography={Typography} />
    <h1 className="text-accent">Heading</h1>
    <p className="small">
      Subheading - this is a sample text for almost 120 lines Some text that is
      a sub headline
    </p>
    <ThemeButton title="Hire Us" classes="btn-secondary" />
    <ThemeButton
      title="Our Work"
      classes="bg-transparent text-accent mx-3 border-secondary"
    />
  </Layout>
)

export default IndexPage
