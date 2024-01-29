import {playlists} from './data.module.js'
import {renderPlaylist} from './render/renderPlaylist.module.js'

for (let i = 0; i < playlists.length; i++) {
    renderPlaylist(playlists[i])
}