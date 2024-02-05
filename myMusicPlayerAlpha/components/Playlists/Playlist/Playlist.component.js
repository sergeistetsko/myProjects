import {renderPlaylistHeader} from './Header/Header.component.js'
import {renderTracks} from './Tracks/Tracks.component.js'

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering.playlistInfo)
    renderTracks(playlistForRendering.tracks)
}