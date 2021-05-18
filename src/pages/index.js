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
  const content = data.allContentYaml.nodes[1];
  const homeContent = data.allContentYaml.nodes[2];

  console.log(data);

  return (
    <Layout>
      <div className="home">
        <img className="image" width="100%" src={homeImg} alt="profile"/>
        <div className="headerBox">
          <i><h1>{content.title}</h1></i>
        </div>
        {homeContent.serviceCard.map((service, index) => (
          <div className="serviceBox">
            <div className='serviceHeader'>
              <h3>{service.title}</h3>
            </div>
            <div className='serviceBody'>
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
    
  )
}

export const query = graphql`
query MyQuery {
  allContentYaml {
    nodes {
      serviceCard {
        content
        title
      }
      services {
        title
      }
      Tesitimonials {
        content
        date
        title
      }
      address
      email
      facebook
      phone
      title
    }
  }
}
`