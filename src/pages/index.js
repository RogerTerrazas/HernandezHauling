import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import homeImg from "../../static/img/home.png"
import {useStyle} from "../components/styles.js"

export default function Home({ data }) {
  const content = data.allContentYaml.edges[2].node;
  console.log(data);

  return (
    <Layout>
      <div className="home">
        <img className="image" width="100%" src={homeImg} alt="profile"/>
        <div className="headerBox">
          <i><h1>{content.title}</h1></i>
        </div>
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