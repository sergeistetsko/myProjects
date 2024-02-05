export function TrackAudio(trackForRendering) {
    const audioElement = document.createElement('audio')
    audioElement.src = trackForRendering.trackFileUrl
    audioElement.controls = true
    return audioElement
}