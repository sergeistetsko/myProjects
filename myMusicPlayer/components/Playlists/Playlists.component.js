import {renderPlaylist} from './Playlist/Playlist.component.js'

export function renderPlaylists(playlistsForRendering) {
    for (let i = 0; i < playlistsForRendering.length; i++) {
        renderPlaylist(playlistsForRendering[i])
    }
}