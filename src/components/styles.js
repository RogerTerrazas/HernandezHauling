import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: props => props.background,
        fontFamily: "'Montserrat', sans-serif",
    },
    container: {
        backgroundColor: "#212121",
        boxShadow: "-20px 20px 100px #b1bfca",
        flexGrow: 1,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: theme.spacing(1),
        textAlign: "center",
        minHeight: "100vh",
        '& h1': { 
            textTransform: "uppercase",
            color: "white",
            fontSize: "7vw",
        },
        '& h2': {
            textTransform: "uppercase",
            fontSize: "7vw",
        }

    },
    row : {
        marginTop: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    item : {
        width: "100%",
        boxSizing: "border-box",
    },

    paper: {
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: props => props.content_background
    },
    button: {
        backgroundColor: "#E64A19 !important",
        color: 'white',
        fontStyle: "normal",
        fontWeight: "bold",
    },
    innerPaper: {
        padding: theme.spacing(1)
    },
    progress: {
        backgroundColor: props => props.primary,
    },
    contact: {
        textAlign: "center",
        fontStyle: "italic",
    },
    icon: {
        fontSize:"2.5rem !important",
        color: props => props.header1_color,
    },
    iconBody: {
        fontSize:"2.5rem !important",
        color: props => props.primary,
    },
    image: {
        width: "100%",
        zIndex: "0",
    }
    
    


  }));