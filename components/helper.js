/**
 * Helper function that determines that type of media passed based on its extension
 * @param mediaURL : String, the url text to determine
 * @returns : String "image | video | unknown" 
 */
export const getMediaType = (mediaURL) => {
    if (mediaURL && (mediaURL.toLowerCase().endsWith("png") ||
    mediaURL.toLowerCase().endsWith("jpg") ||
    mediaURL.toLowerCase().endsWith("gif") ||
    mediaURL.toLowerCase().endsWith("jfif"))) {
        return "image";
}
    if (mediaURL && (mediaURL.toLowerCase().endsWith("mp4"))) {
        return "video";
    }
    return "unknown";
}