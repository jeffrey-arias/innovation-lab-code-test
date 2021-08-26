import React, {useState} from 'react'
import NavBar from "../components/navBar";
import { DisplayContainer, Title } from '../styles/GlobalStyles';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    inputText: {
        width: '100%',
        height: "30px",
        lineHeight: "30px",
        fontSize: "15px",
    },
    label: {
        fontFamily: "Arial",
        fontSize: "15px",
        fontWeight: "bold",
        marginRight: "10px",
        textAlign: "left",
    },
    line : {
        display: "grid",
        gridTemplateColumns: "35% 30% 35%",
        rowGap: "10px"
    },
    buttonGroup: {
        marginTop: "50px"
    },
    buttonLeft : {
        height: "30px",
        width: "33%",
        backgroundColor: 'blue',
        color: 'white',
        fontFamily: "Arial",
        fontSize: "15px",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "10px",
        border: "1px solid black",
        "&:hover": {
            backgroundColor: 'darkblue',
        },
        "&:active": {
            backgroundColor: 'darkblue',
            transform: 'translateY(2px)',
            boxShadow: '0 2px #666;'
        },
    },
    buttonRight : {
        float: "right",
        height: "30px",
        width: "33%",
        backgroundColor: 'blue',
        color: 'white',
        fontFamily: "Arial",
        fontSize: "15px",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "10px",
        border: "1px solid black",
        "&:hover": {
            backgroundColor: 'darkblue',
        },
        "&:active": {
            backgroundColor: 'darkblue',
            transform: 'translateY(2px)',
            boxShadow: '0 2px #666;'
        },
    }

});

export default function AddItem() {
    const classes = useStyles();
    const [url, setURL] = useState();
    const [caption, setCaption] = useState();

    const handleImport = () => {
        axios.get("https://random.dog/woof.json")
            .then(({ data }) => {
                setURL(data.url);
        }).catch (error => console.log(error));
    }
    

    const handleAdd = () => {
        // causing a bug here still
    }

    return (
        <div>
            <NavBar/>
            <DisplayContainer>
                <Title>Add new Woof</Title>
                <div className={classes.line}>
                        <div />
                        <label for="url" className={classes.label}>URL:</label> 
                        <div />
                        <div /> 
                        <input type="text" id="input_url" className={classes.inputText}
                            value={url} onChange={event => setURL(event.target.value)}
                            />
                        <div /> 
                        <div />
                        <label for="caption" className={classes.label}>Caption:</label> 
                        <div />
                        <div /> 
                        <input type="text" id="input_caption" className={classes.inputText}/>
                        <div /> 
                        <div /> 
                        <div className={classes.buttonGroup}>
                            <button onClick={handleImport} className={classes.buttonLeft}>Import Dog</button>
                            <button onClick={handleAdd} className={classes.buttonRight}>Add</button>
                        </div>
                        <div /> 

                </div>
            </DisplayContainer>
        </div>
    )
}
