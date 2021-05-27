import React from "react"
import {useStyle} from "./styles.js"
import aboutContent from "../content/about.json"

export default function Testimonials(props) {
  const classes = useStyle(props);
  const testimonials = aboutContent.Tesitimonials;

  return (
    <div className="testimonials">
      <h2><i>Testimonials</i></h2>
    <div className="sidescroll">
        {testimonials.map((testimonial, index) => (
            <div className="card">
              <h3>{testimonial.title}</h3>
              <i><p>{testimonial.date}</p></i>
              <p>{testimonial.content}</p>
            </div>
        ))}
    </div>
    </div>
  )
}