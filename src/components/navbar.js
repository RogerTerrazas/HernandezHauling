import React from "react"
import { AppBar, Toolbar, IconButton,Typography, Button,Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {useStyle} from "../components/styles.js"


export default function Navbar({props}) {
    const classes = useStyle(props);

    return (
      <div className={classes.nav}>
         <AppBar position="static">
         <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>    
            <Button color="inherit">Login</Button> 
        </Toolbar> 
        </AppBar>
      </div>
    )
  }