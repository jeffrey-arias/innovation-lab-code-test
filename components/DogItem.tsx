import React from 'react'
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { DisplayableDog } from '../models/dog';
import VideocamIcon from '@material-ui/icons/Videocam';

type DogStaticProps = {
  dog: DisplayableDog
};

const useStyles = makeStyles({
  image: {
    maxWidth: 'calc((100vw - 16px - 70px)/4 )',
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '5px',
  }
});


const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  font-family: Arial;
  text-align: center;
`;

export default function DogItem( {dog}: DogStaticProps) {
    const classes = useStyles();

    return (
        <div>
            { dog && dog.type === 'image' &&
                <img src={dog.url} alt={dog.caption} className={classes.image}/>
            }
            { dog && dog.type === 'video' &&
                <video src={dog.url} className={classes.image} />
            }
            <div className={classes.labelContainer}>
              {dog.caption} { dog && dog.type === 'video' && <VideocamIcon /> }
            </div>
        </div>
    )
}
