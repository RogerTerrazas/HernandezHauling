import React from "react"
import { graphql } from "gatsby"
import query from "./index.js"

import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import homeImg from "../../static/img/home.png"
import {useStyle} from "../components/styles.js"

export default function About({ data }) {
   //const content = data.allContentYaml.nodes[1];
//   const homeContent = data.allContentYaml.nodes[2];

  console.log(data);

  return (
    <Layout>
      <div className="about">
        <img className="image" width="100%" src={homeImg} alt="profile"/>
        <div className="headerBox">
          {/* <i><h1>{content.title}</h1></i> */}
        </div>
      </div>
    </Layout>
    
  )
}