import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      className="text-accent"
      styles={{ backgroundColor: "color-background-dark" }}
    >
      Procedure
    </h1>
    <p>Welcome to our website</p>
    <p>Let's build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/team/">Team</Link>
    <Link to="/work/">Work</Link>
  </Layout>
)

export default IndexPage
