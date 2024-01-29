import {TrackCover} from './TrackCover/TrackCover.component.js'
import {TrackAudio} from './TrackAudio/TrackAudio.component.js'

export function renderTrack(trackForRendering) {
    const trackElement = document.createElement('div')

    const coverTrackElement = TrackCover(trackForRendering)

    trackElement.append(coverTrackElement)

    trackElement.append(trackForRendering.artistName + ' - ' + trackForRendering.trackTitle)

    const audioTrackElement = TrackAudio(trackForRendering)
    
    trackElement.append(audioTrackElement)
    
    document.body.append(trackElement)
}