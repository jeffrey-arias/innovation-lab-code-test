import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import useDetectDevice from "../hooks/useDetectDevice";

export interface DisplayableDog {
  url: string;
  caption: string;
  mediaType: string;
  id: string;
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

/**
 * A basic entity for the a displyable dog item
 * @param dog, a displayable dog with { caption, url, id, mediaType } fields
 * @returns React.Element
 */
export default function DogItem( {dog}: DogStaticProps) {
  const { isMobileDevice } = useDetectDevice();
  const classes = useStyles(isMobileDevice);

    return (
        <>
            { dog && dog.mediaType === 'image' &&
                <img src={dog.url} alt={dog.caption} className={classes.image}/>
            }
            { dog && dog.mediaType === 'video' &&
                <video src={dog.url} className={classes.image} />
            }
            <div className={classes.labelContainer}>
              {dog.caption} { dog && dog.mediaType === 'video' && <VideocamIcon /> }
            </div>
        </>
    )
}
