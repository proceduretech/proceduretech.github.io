import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const Team = () => (
  <Layout>
    <SEO title="Team" />
    <Link to="/">Home</Link>
  </Layout>
);

export default Team;
