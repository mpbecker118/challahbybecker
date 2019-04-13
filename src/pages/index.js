import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Challah by Becker</h1>
    <p>Made with love by the Becker family.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Order one of our delicious challahs below!</p>
    <Checkout/>
  </Layout>
)
  }
export default IndexPage
