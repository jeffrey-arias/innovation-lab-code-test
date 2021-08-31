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
}