import { getMediaType } from "./helper"

describe('getMediaType returns a value', () => {
    it('returns media type of image', () => {
        const result = getMediaType('test.png')
        expect(result).toEqual("image");
    })

    it('returns media type of video', () => {
        const result = getMediaType('test.mp4')
        expect(result).toEqual("video");
    })

    it('returns media type of unknown', () => {
        const result = getMediaType('test.123')
        expect(result).toEqual("unknown");
    })

});
