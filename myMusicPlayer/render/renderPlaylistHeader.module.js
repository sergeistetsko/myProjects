export function renderPlaylistHeader(anyPlaylistInfo) {
    const playlistImageElement = document.createElement('img')
    playlistImageElement.src = anyPlaylistInfo.coverImageUrl
    document.body.append(playlistImageElement)

    const playlistNameElement = document.createElement('span')
    playlistNameElement.append('Playlist')
    document.body.append(playlistNameElement)

    const playlistTitleElement = document.createElement('h1')
    playlistTitleElement.append(anyPlaylistInfo.title)
    document.body.append(playlistTitleElement)

    const playlistTotalTrackCountElement = document.createElement('span')
    playlistTotalTrackCountElement.append(anyPlaylistInfo.totalInfo.totalTracksCount + ' tracks, ' + anyPlaylistInfo.totalInfo.totalTracksDurationInSeconds + ' s')
    document.body.append(playlistTotalTrackCountElement)
}