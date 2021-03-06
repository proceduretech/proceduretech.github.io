import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const Team = () => (
  <Layout>
    <SEO title="Team" />
    <h1 style={{ fontSize: 72 }}>Team</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default Team
