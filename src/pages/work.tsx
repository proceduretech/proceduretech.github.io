import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <h1 style={{ fontSize: 72 }}>Work</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default Work
