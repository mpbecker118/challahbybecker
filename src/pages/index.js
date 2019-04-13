import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from '../components/MyStoreCheckout';

const IndexPage = () => (
  <Layout>
    <script src="https://js.stripe.com/v3/"></script>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Challah by Becker</h1>
    <p>Made with love by the Becker family.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Order one of our delicious challahs below!</p>
    <StripeProvider apiKey="pk_live_9dVX20VbMnh1ay5cbxB06sag003J7z9QdM">
    <MyStoreCheckout/>
    </StripeProvider>
<Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
