import React from 'react'
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import useDetectDevice from "../hooks/useDetectDevice";

export interface DisplayableDog {
  url: string;
  caption: string;
  type: string;
}

type DogStaticProps = {
  dog: DisplayableDog
};

export interface StyleProps {
  isMobileDevice: Boolean;
}

const useStyles = makeStyles<StyleProps>({
  image: {
    maxWidth: isMobileDevice => isMobileDevice
      ? 'calc(100vw - 16px - 20px)'
      : 'calc((100vw - 16px - 70px)/4 )',
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

export default function DogItem( {dog}: DogStaticProps) {
  const { isMobileDevice } = useDetectDevice();
  const classes = useStyles(isMobileDevice);

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
