import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
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
          <h2>{home.HomeContent.title}</h2>
            <p>{home.HomeContent.content}</p>
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
        <Footer/>
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