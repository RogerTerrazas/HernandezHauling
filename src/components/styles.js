import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: props => props.background,
        fontFamily: "'Roboto', sans-serif",

    },
    body: {
        margin: "0 !imporant",
        padding:0
    },
    container: {
        backgroundColor: props => props.page_background,
        boxShadow: "-20px 20px 100px #b1bfca",
        flexGrow: 1,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: theme.spacing(1),
        overflow: "hidden",

        '& h1': { 
            textTransform: "uppercase",
        },
        '& h2': {
            textTransform: "uppercase",
        }
    },
    header : {
        backgroundColor: props => props.primary,
        textAlign: "center",
        width: "100%",
    },
    resumeBody : {

    },
    row : {
        marginTop: theme.spacing(1),
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
        backgroundColor: props => props.primary + "!important",
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
    }
    


  }));