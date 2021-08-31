import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

interface ModalProps {
    show: boolean,
    handleClose: any,
}

const useStyles = makeStyles({
    container : {
      backgroundColor: 'lightgray',
      position: 'absolute',
      left: '20px',
      top: '10%',
      border: '1px solid black',
      borderRadius: '10px',
      fontFamily: 'Georgia',
    },
    image : {
        maxWidth: '40vw',
        margin: '20px',
        border: '2px solid darkgray',
        borderRadius: '10px',

    }
  });

  export default function AboutModal ({show, handleClose}: ModalProps) {
    const classes = useStyles();

    const body = (
      <div className={classes.container}>
        <center>
            <p>&nbsp;Dedicated to Apollo. The goodest woof of them all.&nbsp;</p>
            <img src="apollo.jpg" className={classes.image}/>
            <p><b>Apollo Arias</b></p>
            <p>2010 - 2020</p>
        </center>
      </div>
    );
    
    return (  
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > 
        {body}
     </Modal>
    )
  }