import {HeaderCover} from './HeaderCover/HeaderCover.component.js'
import {HeaderInfo} from './HeaderInfo/HeaderInfo.component.js'

export function renderPlaylistHeader(playlistInfoForRendering) {
    const headerCoverElement = HeaderCover(playlistInfoForRendering)
    
    const playlistNameElement = document.createElement('span')
    playlistNameElement.append('Playlist')
    
    const headerInfoTitle = HeaderInfo(playlistInfoForRendering)[0]
    
    const headerInfoTotalTrackCountElement = HeaderInfo(playlistInfoForRendering)[1]

    const playlistBestArtistsElement = document.createElement('span')
    playlistBestArtistsElement.append('Eminem, 50cent, Lloyd Banks')
    
    const playlistOthersArtistsElement = document.createElement('span')
    playlistBestArtistsElement.append(' and others')
    
    document.body.append(headerCoverElement, playlistNameElement, headerInfoTitle, headerInfoTotalTrackCountElement, playlistBestArtistsElement, playlistOthersArtistsElement)
}