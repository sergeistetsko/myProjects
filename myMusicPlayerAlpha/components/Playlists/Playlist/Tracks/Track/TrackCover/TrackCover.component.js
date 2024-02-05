export function TrackCover(trackForRendering) {
    const coverTrackElement = document.createElement('img')
    coverTrackElement.src = trackForRendering.trackCoverImageUrl
    return coverTrackElement
}