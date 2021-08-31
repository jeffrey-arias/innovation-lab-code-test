/**
 * This hook detects if an actual mobile device is being used using the userAgent property of the DOM.
 * Alternately it checks if the orientation of the device is set to portrait.
 */
import React, {useEffect, useState} from 'react'

export default function useDetectDevice() {
    const [isMobileDevice, setMobileDevice] = useState(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const deviceType = Boolean (
        userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        const orientation = window.innerHeight > window.innerWidth;
        const mobile = deviceType || orientation;
        setMobileDevice(mobile);
    }, []);
  
    return { isMobileDevice };
  }
  
