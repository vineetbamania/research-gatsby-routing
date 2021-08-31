/**
 * @author [Vineet Kumar] (vineet.kumar@benjaminmoore.com)
 * @name
 * @description all routes are managed here
 * @link [https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/]
 */
import React, { ReactElement } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import Home from "../../components/pages/Home"
import Color from "../../components/pages/Color"
import { graphql } from 'gatsby'

const isBrowser = typeof window !== "undefined" && window

export default function Routes(props) {

  console.log("Page props:")
  console.log(props)
  const {
    locale,
    location: { pathname: pathName },
  } = props

  return (
<>
 Inside page.js ... {props.data.pageYaml.name} found
 <Color {...props} />
    {/* <Router basepath={`/`}>
      <Home path={`/:locale`} />
      <Color path={`/:locale/:pageName/:code`} />
    </Router> */}
</>
  )
}

export const pageYamlQuery = graphql`
query($id: String!) {
  pageYaml(id: { eq: $id }) {
        id
        name
  }
}
`

