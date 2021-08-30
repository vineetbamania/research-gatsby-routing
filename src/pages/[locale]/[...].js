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

const isBrowser = typeof window !== "undefined" && window

function Routes(props) {
  const {
    locale,
    location: { pathname: pathName },
  } = props

  return (
    <Router basepath={`/`}>
      {/* <Home path={`/:locale`} /> */}
      <Color path={`/:locale/:pageName/:code`} />
    </Router>
  )
}

export default Routes
