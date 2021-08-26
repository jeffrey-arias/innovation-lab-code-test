import React, {useEffect, useState} from 'react'

export default function useDetectDevice() {
    const [isMobileDevice, setMobileDevice] = useState(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean (
        userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobileDevice(mobile);
    }, []);
  
    return { isMobileDevice };
  }
  
