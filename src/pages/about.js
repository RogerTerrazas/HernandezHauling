import React from "react"

import Layout from "../components/layout"

import aboutImg from "../../static/img/about.png"
import {useStyle} from "../components/styles.js"
import Footer from "../components/footer.js"
import Testimonials from "../components/testimonial.js"
import ContactForm from "../components/contactForm.js"
import aboutContent from "../content/about.json"

export default function About() {

  return (
    <Layout>
      <div className="about">
        <img className="image" width="100%" src={aboutImg} alt="profile"/>
        <div className="headerBox">
          <i><h1>{aboutContent.AboutContent.title}</h1></i>
        </div>
        <div className="whiteBox">
          <p>{aboutContent.AboutContent.content}</p>
        </div>
        <Testimonials/>

        <ContactForm/>
      </div>
      <Footer/>
    </Layout>
    
  )
}