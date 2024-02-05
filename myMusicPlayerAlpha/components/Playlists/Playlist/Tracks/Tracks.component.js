import {renderTrack} from './Track/Track.component.js'
export function renderTracks(trackForRendering) {
    for (let i = 0; i < trackForRendering.length; i++) {
        renderTrack(trackForRendering[i])
    }
}