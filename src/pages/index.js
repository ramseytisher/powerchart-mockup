import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>Hello, world!</h1>
    <p>Now go re-swizzle something.</p>
    <Link to="/dashboard">Go to Dashboard</Link>
  </Layout>
)

export default IndexPage
