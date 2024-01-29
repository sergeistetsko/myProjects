export function renderTrack(anyTrack) {
    const trackElement = document.createElement('div')
    const coverTrackElement = document.createElement('img')
    coverTrackElement.src = anyTrack.trackCoverImageUrl

    trackElement.append(coverTrackElement)
    trackElement.append(anyTrack.artistName + ' - ' + anyTrack.trackTitle)
    document.body.append(trackElement)

    const audioElement = document.createElement('audio')
    audioElement.src = anyTrack.trackFileUrl
    audioElement.controls = true

    trackElement.append(audioElement)
}