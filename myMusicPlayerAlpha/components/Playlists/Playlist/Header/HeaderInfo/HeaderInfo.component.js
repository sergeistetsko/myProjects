export function HeaderInfo(playlistInfoForRendering) {

    const playlistTitleElement = document.createElement('h1')
    playlistTitleElement.classList.add()
    playlistTitleElement.append(playlistInfoForRendering.title)

    const playlistTotalTrackCountElement = document.createElement('span')
    playlistTotalTrackCountElement.append(playlistInfoForRendering.totalInfo.totalTracksCount + ' tracks, ' + playlistInfoForRendering.totalInfo.totalTracksDurationInSeconds + ' s')

    return [playlistTitleElement, playlistTotalTrackCountElement]
}