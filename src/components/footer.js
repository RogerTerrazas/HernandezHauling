import React from "react"
import {useStyle} from "./styles.js"
import general from "../content/general.json"

export default function Footer(props) {
  const classes = useStyle(props);
  return (
    <div className="footer">
        <div>
            <p><span>{general.address} ● {general.phone} ● {general.email}</span></p>
        </div>
    </div>
  )
}