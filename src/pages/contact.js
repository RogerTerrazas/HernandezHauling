import React from "react"

import Layout from "../components/layout"

import {useStyle} from "../components/styles.js"
import Footer from "../components/footer.js"
import ContactForm from "../components/contactForm.js"

export default function Contact() {

  return (
    <Layout>
      <br/>
      <div className="contact">
        <ContactForm/>
      </div>
      <Footer/>
    </Layout>
    
  )
}