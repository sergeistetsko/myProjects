// data
const playlistsData = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        coverPlaylistUrl: './assets/images/mainCoverImage1.png',
        topTrackUrl: './assets/icons/is-trend.png',
        numberOfTracks: 0,
        totalTracksDurationInSeconds: 0,
        tracksInformation: [
            {
                trackCoverUrl: './assets/images/trackCoverImage1Playlist1.png',
                isTopTrack: true,
                artistName: 'Eminem',
                trackName: 'Rap God',
                musicFileUrl: './assets/audio/eminem-rap-god.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage2Playlist1.png',
                isTopTrack: false,
                artistName: '50 cent',
                trackName: 'In da Club',
                musicFileUrl: './assets/audio/50сent-in-da-club.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage3Playlist1.png',
                isTopTrack: true,
                artistName: 'DMX',
                trackName: 'X Gon\' Give It To Ya',
                musicFileUrl: './assets/audio/dmx-x-gon-give-it-to-ya.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage4Playlist1.png',
                isTopTrack: false,
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                trackName: 'You Don\'t Know',
                musicFileUrl: './assets/audio/eminem-50cent-you-dont-know.mp3',
            },
        ]
    },
    {
        id: 2,
        title: 'Rap Hits 1990s',
        coverPlaylistUrl: './assets/images/mainCoverImage2.png',
        topTrackUrl: './assets/icons/is-trend.png',
        numberOfTracks: 0,
        totalTracksDurationInSeconds: 0,
        tracksInformation: [
            {
                trackCoverUrl: './assets/images/trackCoverImage1Playlist2.png',
                isTopTrack: true,
                artistName: 'Public Enemy',
                trackName: 'Fight the Power',
                musicFileUrl: './assets/audio/public-enemy-fight-the-power.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage2Playlist2.png',
                isTopTrack: true,
                artistName: 'Vanila Ice',
                trackName: 'Ice Ice Baby',
                musicFileUrl: './assets/audio/vanilla-ice-ice-ice-baby.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage3Playlist2.png',
                isTopTrack: false,
                artistName: 'MC Hammer',
                trackName: 'You Can’t Touch This',
                musicFileUrl: './assets/audio/mc-hammer-u-can\'t-touch-this.mp3',
            },
            {
                trackCoverUrl: './assets/images/trackCoverImage4Playlist2.png',
                isTopTrack: false,
                artistName: 'Brand Nubian',
                trackName: 'Brand Nubian',
                musicFileUrl: './assets/audio/brand-nubian-brand-nubian.mp3',
            },
        ]
    },
]

// render

// create wrappers

const headerWrapperElement = document.createElement('div')

headerWrapperElement.classList.add('header-wrapper')

document.body.append(headerWrapperElement)

const sectionWrapperElement = document.createElement('div')

sectionWrapperElement.classList.add('section-wrapper')

document.body.append(sectionWrapperElement)

// create header

const headerElement = document.createElement('header')

headerElement.classList.add('header')

const headerIconElement = document.createElement('img')

headerIconElement.classList.add('header-icon')
headerIconElement.src = './assets/icons/queue-music.svg'
headerIconElement.alt = 'music-icon'

const headerTitleElement = document.createElement('span')

headerTitleElement.classList.add('header-title')
headerTitleElement.append('inPlaylist')


headerWrapperElement.append(headerElement)
headerElement.append(headerIconElement, headerTitleElement)

// create section

const sectionElement = document.createElement('section')

sectionElement.classList.add('section')

const mainTitleElement = document.createElement('h1')

mainTitleElement.classList.add('heading')

mainTitleElement.append('My Playlists')

const playlistsWrapperElement = document.createElement('div')

playlistsWrapperElement.classList.add('playlists-wrapper')

sectionWrapperElement.append(sectionElement)
sectionElement.append(mainTitleElement)
sectionElement.append(playlistsWrapperElement)

// create playlistWrapper

const playlistWrapperElement = document.createElement('div')

playlistWrapperElement.classList.add('playlist-block')

playlistsWrapperElement.append(playlistWrapperElement)

// create playlistCoverInfoBlockWrapper

const playlistCoverInfoBlockWrapperElement = document.createElement('div')

playlistCoverInfoBlockWrapperElement.classList.add('playlist-cover-info-block')

playlistWrapperElement.append(playlistCoverInfoBlockWrapperElement)

// create playlistMainCover

const playlistCoverWrapperElement = document.createElement('div')

playlistCoverWrapperElement.classList.add('playlist-cover-wrapper')

playlistCoverInfoBlockWrapperElement.append(playlistCoverWrapperElement)

const playlistMainCoverElement = document.createElement('img')

playlistMainCoverElement.classList.add('playlist-main-cover')
playlistMainCoverElement.src = playlistsData[0].coverPlaylistUrl
playlistMainCoverElement.alt = 'main-cover'

playlistCoverWrapperElement.append(playlistMainCoverElement)

// create playlistInfoBlock

const playlistInfoWrapperElement = document.createElement('div')

playlistInfoWrapperElement.classList.add('playlist-info-block')

const playlistTitleElement = document.createElement('span')

playlistTitleElement.classList.add('playlist-title')
playlistTitleElement.append('Playlist')

const playlistMainTitleElement = document.createElement('h2')

playlistMainTitleElement.classList.add('playlist-main-title')
playlistMainTitleElement.append(playlistsData[0].title)

const playlistTracksCountAndTotalDurationElement = document.createElement('span')

playlistTracksCountAndTotalDurationElement.classList.add('playlist-track-number-and-duration')
playlistTracksCountAndTotalDurationElement.append(playlistsData[0].numberOfTracks + ' track(-s), ' + playlistsData[0].totalTracksDurationInSeconds)

const playlistTopArtistsElement = document.createElement('span')

playlistTopArtistsElement.classList.add('playlist-top-artists')

playlistTopArtistsElement.append(playlistsData[0].tracksInformation[0].artistName + ', ' + playlistsData[0].tracksInformation[1].artistName + ', ' + playlistsData[0].tracksInformation[2].artistName)

const playlistOthersArtistsElement = document.createElement('span')

playlistOthersArtistsElement.classList.add('playlist-others-artists')

playlistOthersArtistsElement.append(' and others')

playlistCoverInfoBlockWrapperElement.append(playlistInfoWrapperElement)
playlistInfoWrapperElement.append(playlistTitleElement, playlistMainTitleElement, playlistTracksCountAndTotalDurationElement, playlistTopArtistsElement, playlistOthersArtistsElement)

// create playlistTracksBlock1 --------------------------------------------------------------------------

const playlistTracksWrapper1Element = document.createElement('div')

playlistTracksWrapper1Element.classList.add('playlist-track-block')

playlistWrapperElement.append(playlistTracksWrapper1Element)

// create playlistTrack1

// create playlistTrackCover1

const playlistTrackCoverElement = document.createElement('img')

playlistTrackCoverElement.classList.add('playlist-track-cover-image')
playlistTrackCoverElement.src = playlistsData[0].tracksInformation[0].trackCoverUrl
playlistTrackCoverElement.alt = 'cover-image'

playlistTracksWrapper1Element.append(playlistTrackCoverElement)

// create trackAudioBlock1

const trackAudioBlock1Element = document.createElement('div')

trackAudioBlock1Element.classList.add('track-audio-block')

playlistTracksWrapper1Element.append(trackAudioBlock1Element)

// create playlistTrackName1

const playlistTrackArtistNameElement = document.createElement('span')

playlistTrackArtistNameElement.classList.add('playlist-track-artist-name')

playlistTrackArtistNameElement.append(playlistsData[0].tracksInformation[0].artistName + ' - ')

const playlistTrackNameElement = document.createElement('span')

playlistTrackNameElement.classList.add('playlist-track-name')

playlistTrackArtistNameElement.append(playlistsData[0].tracksInformation[0].trackName)

trackAudioBlock1Element.append(playlistTrackArtistNameElement, playlistTrackNameElement)

// create isTopTrack

if (playlistsData[0].tracksInformation[0].isTopTrack) {
    const topTrackElement = document.createElement('img')
    
    topTrackElement.classList.add('playlist-top-track-image')
    
    topTrackElement.src = playlistsData[0].topTrackUrl
    topTrackElement.alt = 'top-track-image'
    
    playlistTrackArtistNameElement.parentNode.insertBefore(topTrackElement, playlistTrackArtistNameElement)
}
// create playlistAudioTrack1

const playlistAudioTrack1Element = document.createElement('audio')

playlistAudioTrack1Element.classList.add('playlist-track-audio')
playlistAudioTrack1Element.controls = true
playlistAudioTrack1Element.src = playlistsData[0].tracksInformation[0].musicFileUrl

trackAudioBlock1Element.append(playlistAudioTrack1Element)

// create playlistTracksBlock2 --------------------------------------------------------------------------

const playlistTracksWrapper2Element = document.createElement('div')

playlistTracksWrapper2Element.classList.add('playlist-track-block')

playlistWrapperElement.append(playlistTracksWrapper2Element)

// create playlistTrack2

// create playlistTrackCover2

const playlistTrackCover2Element = document.createElement('img')

playlistTrackCover2Element.classList.add('playlist-track-cover-image')
playlistTrackCover2Element.src = playlistsData[0].tracksInformation[1].trackCoverUrl
playlistTrackCover2Element.alt = 'cover-image'

playlistTracksWrapper2Element.append(playlistTrackCover2Element)

// create trackAudioBlock2

const trackAudioBlock2Element = document.createElement('div')

trackAudioBlock2Element.classList.add('track-audio-block')

playlistTracksWrapper2Element.append(trackAudioBlock2Element)

// create playlistTrackName2

const playlistTrackArtistName2Element = document.createElement('span')

playlistTrackArtistName2Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName2Element.append(playlistsData[0].tracksInformation[1].artistName + ' - ')

const playlistTrackName2Element = document.createElement('span')

playlistTrackName2Element.classList.add('playlist-track-name')

playlistTrackArtistName2Element.append(playlistsData[0].tracksInformation[1].trackName)

trackAudioBlock2Element.append(playlistTrackArtistName2Element, playlistTrackName2Element)

// create isTopTrack

if (playlistsData[0].tracksInformation[1].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[0].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName2Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName2Element)
}
// create playlistAudioTrack2

const playlistAudioTrack2Element = document.createElement('audio')

playlistAudioTrack2Element.classList.add('playlist-track-audio')
playlistAudioTrack2Element.controls = true
playlistAudioTrack2Element.src = playlistsData[0].tracksInformation[1].musicFileUrl

trackAudioBlock2Element.append(playlistAudioTrack2Element)

// create playlistTracksBlock3 --------------------------------------------------------------------------

const playlistTracksWrapper3Element = document.createElement('div')

playlistTracksWrapper3Element.classList.add('playlist-track-block')

playlistWrapperElement.append(playlistTracksWrapper3Element)

// create playlistTrack3

// create playlistTrackCover3

const playlistTrackCover3Element = document.createElement('img')

playlistTrackCover3Element.classList.add('playlist-track-cover-image')
playlistTrackCover3Element.src = playlistsData[0].tracksInformation[2].trackCoverUrl
playlistTrackCover3Element.alt = 'cover-image'

playlistTracksWrapper3Element.append(playlistTrackCover3Element)

// create trackAudioBlock3

const trackAudioBlock3Element = document.createElement('div')

trackAudioBlock3Element.classList.add('track-audio-block')

playlistTracksWrapper3Element.append(trackAudioBlock3Element)

// create playlistTrackName3

const playlistTrackArtistName3Element = document.createElement('span')

playlistTrackArtistName3Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName3Element.append(playlistsData[0].tracksInformation[2].artistName + ' - ')

const playlistTrackName3Element = document.createElement('span')

playlistTrackName3Element.classList.add('playlist-track-name')

playlistTrackArtistName3Element.append(playlistsData[0].tracksInformation[2].trackName)

trackAudioBlock3Element.append(playlistTrackArtistName3Element, playlistTrackName3Element)

// create isTopTrack

if (playlistsData[0].tracksInformation[2].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[0].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName3Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName3Element)
}
// create playlistAudioTrack3

const playlistAudioTrack3Element = document.createElement('audio')

playlistAudioTrack3Element.classList.add('playlist-track-audio')
playlistAudioTrack3Element.controls = true
playlistAudioTrack3Element.src = playlistsData[0].tracksInformation[2].musicFileUrl

trackAudioBlock3Element.append(playlistAudioTrack3Element)

// create playlistTracksBlock4 --------------------------------------------------------------------------

const playlistTracksWrapper4Element = document.createElement('div')

playlistTracksWrapper4Element.classList.add('playlist-track-block')

playlistWrapperElement.append(playlistTracksWrapper4Element)

// create playlistTrack4

// create playlistTrackCover4

const playlistTrackCover4Element = document.createElement('img')

playlistTrackCover4Element.classList.add('playlist-track-cover-image')
playlistTrackCover4Element.src = playlistsData[0].tracksInformation[3].trackCoverUrl
playlistTrackCover4Element.alt = 'cover-image'

playlistTracksWrapper4Element.append(playlistTrackCover4Element)

// create trackAudioBlock4

const trackAudioBlock4Element = document.createElement('div')

trackAudioBlock4Element.classList.add('track-audio-block')

playlistTracksWrapper4Element.append(trackAudioBlock4Element)

// create playlistTrackName4

const playlistTrackArtistName4Element = document.createElement('span')

playlistTrackArtistName4Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName4Element.append(playlistsData[0].tracksInformation[3].artistName + ' - ')

const playlistTrackName4Element = document.createElement('span')

playlistTrackName4Element.classList.add('playlist-track-name')

playlistTrackArtistName4Element.append(playlistsData[0].tracksInformation[3].trackName)

trackAudioBlock4Element.append(playlistTrackArtistName4Element, playlistTrackName4Element)

// create isTopTrack

if (playlistsData[0].tracksInformation[3].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[0].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName4Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName4Element)
}
// create playlistAudioTrack4

const playlistAudioTrack4Element = document.createElement('audio')

playlistAudioTrack4Element.classList.add('playlist-track-audio')
playlistAudioTrack4Element.controls = true
playlistAudioTrack4Element.src = playlistsData[0].tracksInformation[3].musicFileUrl

trackAudioBlock4Element.append(playlistAudioTrack4Element)
    
//==========================================================================================================

// create playlistWrapper

const playlistWrapper2Element = document.createElement('div')

playlistWrapper2Element.classList.add('playlist-block')

playlistsWrapperElement.append(playlistWrapper2Element)

// create playlistCoverInfoBlockWrapper

const playlistCoverInfoBlockWrapper2Element = document.createElement('div')

playlistCoverInfoBlockWrapper2Element.classList.add('playlist-cover-info-block')

playlistWrapper2Element.append(playlistCoverInfoBlockWrapper2Element)

// create playlistMainCover

const playlistCoverWrapper2Element = document.createElement('div')

playlistCoverWrapper2Element.classList.add('playlist-cover-wrapper')

playlistCoverInfoBlockWrapper2Element.append(playlistCoverWrapper2Element)

const playlistMainCover2Element = document.createElement('img')

playlistMainCover2Element.classList.add('playlist-main-cover')
playlistMainCover2Element.src = playlistsData[1].coverPlaylistUrl
playlistMainCover2Element.alt = 'main-cover'

playlistCoverWrapper2Element.append(playlistMainCover2Element)

// create playlistInfoBlock

const playlistInfoWrapper2Element = document.createElement('div')

playlistInfoWrapper2Element.classList.add('playlist-info-block')

const playlistTitle2Element = document.createElement('span')

playlistTitle2Element.classList.add('playlist-title')
playlistTitle2Element.append('Playlist')

const playlistMainTitle2Element = document.createElement('h2')

playlistMainTitle2Element.classList.add('playlist-main-title')
playlistMainTitle2Element.append(playlistsData[1].title)

const playlistTracksCountAndTotalDuration2Element = document.createElement('span')

playlistTracksCountAndTotalDuration2Element.classList.add('playlist-track-number-and-duration')
playlistTracksCountAndTotalDuration2Element.append(playlistsData[1].numberOfTracks + ' track(-s), ' + playlistsData[1].totalTracksDurationInSeconds)

const playlistTopArtists2Element = document.createElement('span')

playlistTopArtists2Element.classList.add('playlist-top-artists')

playlistTopArtists2Element.append(playlistsData[1].tracksInformation[0].artistName + ', ' + playlistsData[1].tracksInformation[1].artistName + ', ' + playlistsData[1].tracksInformation[2].artistName)

const playlistOthersArtists2Element = document.createElement('span')

playlistOthersArtists2Element.classList.add('playlist-others-artists')

playlistOthersArtists2Element.append(' and others')

playlistCoverInfoBlockWrapper2Element.append(playlistInfoWrapper2Element)
playlistInfoWrapper2Element.append(playlistTitle2Element, playlistMainTitle2Element, playlistTracksCountAndTotalDuration2Element, playlistTopArtists2Element, playlistOthersArtists2Element)

// create playlistTracksBlock5 --------------------------------------------------------------------------

const playlistTracksWrapper5Element = document.createElement('div')

playlistTracksWrapper5Element.classList.add('playlist-track-block')

playlistWrapper2Element.append(playlistTracksWrapper5Element)

// create playlistTrack5

// create playlistTrackCover5

const playlistTrackCover5Element = document.createElement('img')

playlistTrackCover5Element.classList.add('playlist-track-cover-image')
playlistTrackCover5Element.src = playlistsData[1].tracksInformation[0].trackCoverUrl
playlistTrackCover5Element.alt = 'cover-image'

playlistTracksWrapper5Element.append(playlistTrackCover5Element)

// create trackAudioBlock5

const trackAudioBlock5Element = document.createElement('div')

trackAudioBlock5Element.classList.add('track-audio-block')

playlistTracksWrapper5Element.append(trackAudioBlock5Element)

// create playlistTrackName5

const playlistTrackArtistName5Element = document.createElement('span')

playlistTrackArtistName5Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName5Element.append(playlistsData[1].tracksInformation[0].artistName + ' - ')

const playlistTrackName5Element = document.createElement('span')

playlistTrackName5Element.classList.add('playlist-track-name')

playlistTrackArtistName5Element.append(playlistsData[1].tracksInformation[0].trackName)

trackAudioBlock5Element.append(playlistTrackArtistName5Element, playlistTrackName5Element)

// create isTopTrack

if (playlistsData[1].tracksInformation[0].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[1].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName5Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName5Element)
}
// create playlistAudioTrack5

const playlistAudioTrack5Element = document.createElement('audio')

playlistAudioTrack5Element.classList.add('playlist-track-audio')
playlistAudioTrack5Element.controls = true
playlistAudioTrack5Element.src = playlistsData[1].tracksInformation[0].musicFileUrl

trackAudioBlock5Element.append(playlistAudioTrack5Element)

// create playlistTracksBlock6 --------------------------------------------------------------------------

const playlistTracksWrapper6Element = document.createElement('div')

playlistTracksWrapper6Element.classList.add('playlist-track-block')

playlistWrapper2Element.append(playlistTracksWrapper6Element)

// create playlistTrack6

// create playlistTrackCover6

const playlistTrackCover6Element = document.createElement('img')

playlistTrackCover6Element.classList.add('playlist-track-cover-image')
playlistTrackCover6Element.src = playlistsData[1].tracksInformation[1].trackCoverUrl
playlistTrackCover6Element.alt = 'cover-image'

playlistTracksWrapper6Element.append(playlistTrackCover6Element)

// create trackAudioBlock6

const trackAudioBlock6Element = document.createElement('div')

trackAudioBlock6Element.classList.add('track-audio-block')

playlistTracksWrapper6Element.append(trackAudioBlock6Element)

// create playlistTrackName6

const playlistTrackArtistName6Element = document.createElement('span')

playlistTrackArtistName6Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName6Element.append(playlistsData[1].tracksInformation[1].artistName + ' - ')

const playlistTrackName6Element = document.createElement('span')

playlistTrackName6Element.classList.add('playlist-track-name')

playlistTrackArtistName6Element.append(playlistsData[1].tracksInformation[1].trackName)

trackAudioBlock6Element.append(playlistTrackArtistName6Element, playlistTrackName6Element)

// create isTopTrack

if (playlistsData[1].tracksInformation[1].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[1].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName6Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName6Element)
}
// create playlistAudioTrack6

const playlistAudioTrack6Element = document.createElement('audio')

playlistAudioTrack6Element.classList.add('playlist-track-audio')
playlistAudioTrack6Element.controls = true
playlistAudioTrack6Element.src = playlistsData[1].tracksInformation[1].musicFileUrl

trackAudioBlock6Element.append(playlistAudioTrack6Element)

 // create playlistTracksBlock7 --------------------------------------------------------------------------

 const playlistTracksWrapper7Element = document.createElement('div')

 playlistTracksWrapper7Element.classList.add('playlist-track-block')

 playlistWrapper2Element.append(playlistTracksWrapper7Element)

 // create playlistTrack7

 // create playlistTrackCover7

 const playlistTrackCover7Element = document.createElement('img')

 playlistTrackCover7Element.classList.add('playlist-track-cover-image')
 playlistTrackCover7Element.src = playlistsData[1].tracksInformation[2].trackCoverUrl
 playlistTrackCover7Element.alt = 'cover-image'

 playlistTracksWrapper7Element.append(playlistTrackCover7Element)

 // create trackAudioBlock7

 const trackAudioBlock7Element = document.createElement('div')

 trackAudioBlock7Element.classList.add('track-audio-block')

 playlistTracksWrapper7Element.append(trackAudioBlock7Element)

 // create playlistTrackName7

 const playlistTrackArtistName7Element = document.createElement('span')

 playlistTrackArtistName7Element.classList.add('playlist-track-artist-name')

 playlistTrackArtistName7Element.append(playlistsData[1].tracksInformation[2].artistName + ' - ')

 const playlistTrackName7Element = document.createElement('span')

 playlistTrackName7Element.classList.add('playlist-track-name')

 playlistTrackArtistName7Element.append(playlistsData[1].tracksInformation[2].trackName)

 trackAudioBlock7Element.append(playlistTrackArtistName7Element, playlistTrackName7Element)

 // create isTopTrack

 if (playlistsData[1].tracksInformation[2].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[1].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName7Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName7Element)
}
 // create playlistAudioTrack7

 const playlistAudioTrack7Element = document.createElement('audio')

 playlistAudioTrack7Element.classList.add('playlist-track-audio')
 playlistAudioTrack7Element.controls = true
 playlistAudioTrack7Element.src = playlistsData[1].tracksInformation[2].musicFileUrl

 trackAudioBlock7Element.append(playlistAudioTrack7Element)

// create playlistTracksBlock8 --------------------------------------------------------------------------

const playlistTracksWrapper8Element = document.createElement('div')

playlistTracksWrapper8Element.classList.add('playlist-track-block')

playlistWrapper2Element.append(playlistTracksWrapper8Element)

// create playlistTrack8

// create playlistTrackCover8

const playlistTrackCover8Element = document.createElement('img')

playlistTrackCover8Element.classList.add('playlist-track-cover-image')
playlistTrackCover8Element.src = playlistsData[1].tracksInformation[3].trackCoverUrl
playlistTrackCover8Element.alt = 'cover-image'

playlistTracksWrapper8Element.append(playlistTrackCover8Element)

// create trackAudioBlock8

const trackAudioBlock8Element = document.createElement('div')

trackAudioBlock8Element.classList.add('track-audio-block')

playlistTracksWrapper8Element.append(trackAudioBlock8Element)

// create playlistTrackName8

const playlistTrackArtistName8Element = document.createElement('span')

playlistTrackArtistName8Element.classList.add('playlist-track-artist-name')

playlistTrackArtistName8Element.append(playlistsData[1].tracksInformation[3].artistName + ' - ')

const playlistTrackName8Element = document.createElement('span')

playlistTrackName8Element.classList.add('playlist-track-name')

playlistTrackArtistName8Element.append(playlistsData[1].tracksInformation[3].trackName)

trackAudioBlock8Element.append(playlistTrackArtistName8Element, playlistTrackName8Element)

// create isTopTrack

if (playlistsData[1].tracksInformation[3].isTopTrack) {
    const topTrackElement = document.createElement('img')

    topTrackElement.classList.add('playlist-top-track-image')

    topTrackElement.src = playlistsData[1].topTrackUrl
    topTrackElement.alt = 'top-track-image'

    playlistTrackArtistName8Element.parentNode.insertBefore(topTrackElement, playlistTrackArtistName8Element)
}
// create playlistAudioTrack8

const playlistAudioTrack8Element = document.createElement('audio')

playlistAudioTrack8Element.classList.add('playlist-track-audio')
playlistAudioTrack8Element.controls = true
playlistAudioTrack8Element.src = playlistsData[1].tracksInformation[3].musicFileUrl

trackAudioBlock8Element.append(playlistAudioTrack8Element)

