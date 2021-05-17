import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import {useStyle} from "../components/styles.js"

export default function Home({ data }) {
  console.log(props)
  const classes = useStyle(props);
  return (
  <Layout props={props}>
    <div className="home">
      
    </div>
  </Layout>
  )
}