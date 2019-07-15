import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <h1>This page is out of stock</h1>
    <p>Seems that we don’t have the page that you ordered.</p>
    <Link to="/">Start from home page</Link>.
  </Layout>
)

export default NotFoundPage
