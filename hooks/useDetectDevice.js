/**
 * This hook detects if an actual mobile device is being used using the userAgent property of the DOM.
 * Alternately it checks if the orientation of the device is set to portrait.
 */
import React, {useEffect, useState} from 'react'

/**
 * This hook determines if the device being used is a desktop or a mobile device.
 * It also assumes a mobile device if the orientation is in portrait (i.e. device height > width)
 * @returns
 */
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
  
