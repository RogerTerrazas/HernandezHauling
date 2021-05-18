import React from "react"
import { Helmet } from 'react-helmet'
import { Container } from '@material-ui/core'
import Navbar from './navbar'

import "./styles.css"
import {useStyle} from "../components/styles.js"
import TemporaryDrawer from "./temporaryDrawer"

export default function Layout({ children, props }) {
  const classes = useStyle(props);

  return (
    <div className={classes.root}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet"/>

      </Helmet>
      <Container maxWidth="lg" className={classes.container}>
        <TemporaryDrawer/>
        {children}
      </Container>
    </div>
  )
}