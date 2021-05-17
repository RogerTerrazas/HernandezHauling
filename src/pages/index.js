import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import {useStyle} from "../components/styles.js"

export default function Home({ data }) {
  const content = data.allContentYaml.edges[1].node;
  console.log(data);

  return (
    <Layout>
      <div className="home">
      <h1>{content.title}</h1>
      </div>
    </Layout>
    
  )
}

export const query = graphql`
query MyQuery {
  allContentYaml {
    edges {
      node {
        title
        phone
        parent {
          id
        }
        id
        facebook
        email
        address
      }
    }
  }
}
`