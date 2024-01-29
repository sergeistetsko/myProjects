export function HeaderCover(playlistInfoForRendering) {
    const playlistImageElement = document.createElement('img')
    playlistImageElement.src = playlistInfoForRendering.coverImageUrl
    return playlistImageElement
}