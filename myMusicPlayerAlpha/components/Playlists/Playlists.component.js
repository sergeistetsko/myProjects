import {renderPlaylist} from './Playlist/Playlist.component.js'

export function renderPlaylists(playlistsForRendering) {
    const playlistContainer = document.getElementById('playlists-wrapper')
    playlistsForRendering.forEach((playlistForRendering) => renderPlaylist(playlistForRendering, playlistContainer))
}