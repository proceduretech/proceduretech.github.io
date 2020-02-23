import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import { Row } from "react-bootstrap"

import Typography from "../utils/typography"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Home from "../components/home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TypographyStyle typography={Typography} />
    <GoogleFont typography={Typography} />
    <Home />
  </Layout>
)

export default IndexPage
