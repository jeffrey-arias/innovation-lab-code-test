/**
 * This hook derives the media type based on the URL given.
 */
import React, {useEffect, useState} from 'react'

export default function useGetMediaType({url}) {
    const [mediaURL, setMediaURL] = useState(url);
    const [mediaType, setMediaType] = useState("image");

    useEffect(() => {
        setMediaURL(url);
        alert("URL", url);
        if (mediaURL && (mediaURL.toLowerCase().endsWith("png") ||
                mediaURL.toLowerCase().endsWith("jpg") ||
                mediaURL.toLowerCase().endsWith("gif") ||
                mediaURL.toLowerCase().endsWith("jfif"))) {
            setMediaType("image");
        }
        if (mediaURL && (mediaURL.toLowerCase().endsWith("mp4"))) {
            setMediaType("video");
        }   
    }, []);

    return { mediaType };
  }
  
