import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import { Grid, Button } from "@material-ui/core";
import Icons from "../components/icons.js"

import homeImg from "../../static/img/home.png"
import {useStyle} from "../components/styles.js"


import general from "../content/general.json"
import home from "../content/home.json"

export default function Home({ data }) {
  const content = general;
  const homeContent = home;

  console.log(data);

  return (
    <Layout>
      <div className="home">
        <img className="image" width="100%" src={homeImg} alt="profile"/>
        <div className="headerBox">
          <i><h1>{content.title}</h1></i>
        </div>

        <div className="whiteBox">
          <h2>What To Consider</h2>
          <p>When searching for a junk removal or hauling company you want to be treated like family and not just another dollar sign. That's why Hernandez hauling being a family owned and operated business can always assure you a friendly and professional process. With crews that work around the clock 24/7 we know that there is never a right time to declutter that space or stop your day for a quote. We offer over the phone estimates and in person on your schedule, with experience and skills we have managed to make your job easier as the customer just snap a few shots of that junk and send it over and our trained professionals will email you and or text you with the estimate. When choosing a removal company always consider how your waste is being disposed of, you can be charged for illegal dumping if something removed from your house or project site is dumped on the road and your address is found on any of the junk. Hernandez hauling and junk removal assures with 100% that your junk and construction debris will be taken to a waste management facility where it will be properly disposed of.</p>
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


        <div className="servicesList whiteBox">
          <h2>SERVICES</h2>
          {homeContent.services.map((service, index) => (
            <h3>{service.title}</h3>
          ))}
        </div>

        <ContactForm/>
      </div>
    </Layout>
    
  )
}

// export const query = graphql`
// query MyQuery {
//   allContentYaml {
//     nodes {
//       serviceCard {
//         content
//         title
//       }
//       services {
//         title
//       }
//       Tesitimonials {
//         content
//         date
//         title
//       }
//       address
//       email
//       facebook
//       phone
//       title
//     }
//   }
// }
// `