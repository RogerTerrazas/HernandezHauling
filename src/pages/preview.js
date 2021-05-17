import CMS from 'netlify-cms-app'

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import {useStyle} from "../components/styles.js"

class HomePreview extends React.Component{
  render() {
  var data = this.props.entry.getIn(['data', "skills"])
  console.log(data)
  return (
  <div>
    <h1>{data}</h1>
    <p>This is my new article.</p>
  </div>
  )
  }
};

CMS.registerPreviewTemplate('home', HomePreview)