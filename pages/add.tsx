import React, {useState, useEffect } from 'react'
import NavBar from "../components/navBar";
import { DisplayContainer, Title } from '../styles/GlobalStyles';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import useDetectDevice from '../hooks/useDetectDevice';
import { getMediaType } from '../components/helper';
import addDog from "../pages/api/addDog";
import { NextApiRequest, NextApiResponse } from "next";

export interface StyleProps {
    isMobileDevice: Boolean;
}

const useStyles = makeStyles<StyleProps>({
    inputText: {
        width: '98%',
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
        rowGap: "10px",
        gridTemplateColumns: isMobileDevice => isMobileDevice
        ? '5% 90% 5%'
        : "35% 30% 35%",
    },
    buttonGroup: {
        marginTop: "20px"
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
    },
    image: {
        maxHeight: '150px   ',
      },

});

/**
 * 
 * @returns Page that allows the user to add a new dog item that will be displayed in the display all page.
 * It has a Preview box that dynamically shows the contents of the entered URL
 * Import Dogs button fetches a random URL that may contain an image or video file
 * Add creates a dog item from the entered fields and saves this to the DB
 */
export default function AddItem() {
    const [url, setURL] = useState("baby_doge.png");
    const [caption, setCaption] = useState();
    const { isMobileDevice } = useDetectDevice();
    const classes = useStyles(isMobileDevice);

    const [mediaType, setMediaType] = useState("image");

    const handleImport = () => {
        axios.get("https://random.dog/woof.json")
            .then(({ data }) => {
                setURL(data.url);
        }).catch (error => console.log(error));
    }
    
    const handleAdd = () => {
        if (url && url.length > 3) {
            alert("New dog added!");
        } else {
            alert("The URL field is required!");
        }    }

    useEffect(() => {
        setMediaType(getMediaType(url));
    });

    return (
        <div>
            <NavBar/>
            <DisplayContainer>
                <Title>Add new Woof</Title>
                <div className={classes.line}>
                        <div />
                        <label htmlFor="preview" className={classes.label}>Preview:</label> 
                        <div />
                        <div />
                        <div>
                            <center>
                            { mediaType && mediaType === 'image' &&
                                <img src={url}  className={classes.image}/>
                            }
                            { mediaType && mediaType === 'video' &&
                                <video src={url} className={classes.image} />
                            }
                            </center>
                        </div>
                        <div />
                        <div />
                        <label htmlFor="url" className={classes.label}>URL:</label> 
                        <div />
                        <div /> 
                        <input type="text" id="input_url" className={classes.inputText}
                            value={url} onChange={event => setURL(event.target.value)}
                            />
                        <div /> 
                        <div />
                        <label htmlFor="caption" className={classes.label}>Caption:</label> 
                        <div />
                        <div /> 
                        <input type="text" id="input_caption" className={classes.inputText}/>
                        <div /> 
                        <div /> 
                        <div className={classes.buttonGroup}>
                            <button onClick={handleImport} id="importDogBtn" className={classes.buttonLeft}>Import Dog</button>
                            <button onClick={handleAdd} id="addDogBtn" className={classes.buttonRight}>Add</button>
                        </div>
                        <div /> 

                </div>
            </DisplayContainer>
        </div>
    )
}
