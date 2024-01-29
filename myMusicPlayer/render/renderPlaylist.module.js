import {playlists} from '../data.module.js'
import {renderPlaylistHeader} from './renderPlaylistHeader.module.js'
import {renderTrack} from './renderTrack.module.js'

export function renderPlaylist(anyPlaylist) {
    renderPlaylistHeader(anyPlaylist.playlistInfo)
    for (let i = 0; i < anyPlaylist.tracks.length; i++) {
        renderTrack(anyPlaylist.tracks[i])
    }
}