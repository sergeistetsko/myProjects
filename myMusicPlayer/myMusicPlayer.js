// data
const playlist = {
    playlistId: '1',
    playlistInfo: {
        title: 'Hip-Hop Hits',
        coverImageUrl: './assets/images/mainCoverImage1.png',
        totalInfo: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733
        } 
    },
    tracks: [
        {
            trackId: '1',
            trackCoverImageUrl: './assets/images/trackCoverImage1Playlist1.png',
            artistName: 'Eminem',
            trackTitle: 'Rap God',
            trackFileUrl: './assets/audio/eminem-rap-god.mp3',
            trackDuration: 1,
            isTrend: true
        },
        {
            trackId: '2',
            trackCoverImageUrl: './assets/images/trackCoverImage2Playlist1.png',
            artistName: '50 cent',
            trackTitle: 'In da Club',
            trackFileUrl: './assets/audio/50сent-in-da-club.mp3',
            trackDuration: 1,
            isTrend: false
        },
        {
            trackId: '3',
            trackCoverImageUrl: './assets/images/trackCoverImage3Playlist1.png',
            artistName: 'DMX',
            trackTitle: 'X Gon\' Give It To Ya',
            trackFileUrl: './assets/audio/dmx-x-gon-give-it-to-ya.mp3',
            trackDuration: 1,
            isTrend: true
        },
        {
            trackId: '4',
            trackCoverImageUrl: './assets/images/trackCoverImage4Playlist1.png',
            artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
            trackTitle: 'You Don\'t Know',
            trackFileUrl: './assets/audio/eminem-50cent-you-dont-know.mp3',
            trackDuration: 1,
            isTrend: false
        }
    ]
}
function renderPlaylist(anyPlaylist) {
    renderPlaylistHeader(anyPlaylist.playlistInfo)
    renderTrack(anyPlaylist.tracks[0])
    renderTrack(anyPlaylist.tracks[1])
    renderTrack(anyPlaylist.tracks[2])
    renderTrack(anyPlaylist.tracks[3])
}
function renderPlaylistHeader(anyPlaylistInfo) {
    const playlistTitleElement = document.createElement('h1')
    playlistTitleElement.append(anyPlaylistInfo.title)
    document.body.append(playlistTitleElement)
    
    const playlistImageElement = document.createElement('img')
    playlistImageElement.src = anyPlaylistInfo.coverImageUrl
    document.body.append(playlistImageElement)
}

function renderTrack(anyTrack) {
    const trackElement = document.createElement('div')
    const coverTrack = document.createElement('img')
    coverTrack.src = anyTrack.trackCoverImageUrl
    
    trackElement.append(coverTrack)
    trackElement.append(anyTrack.artistName + ' - ' + anyTrack.trackTitle)
    document.body.append(trackElement)
    
    const audioElement = document.createElement('audio')
    audioElement.src = anyTrack.trackFileUrl
    audioElement.controls = true

    trackElement.append(audioElement)
}

renderPlaylist(playlist)

