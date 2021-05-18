import React from "react"
import {useStyle} from "../components/styles.js"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ContactForm({ props}) {
    const classes = useStyle(props);

    return (
        <div className="contactForm">
            <h2>Contact Us</h2>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Job Description" variant="outlined" />
            </form>
            <Button variant="contained" color="#E64A19">Submit</Button>
        </div>
    )
}