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

// create wrappers
const headerWrapperElement = document.createElement('div');
headerWrapperElement.classList.add('header-wrapper');
document.body.append(headerWrapperElement);

const sectionWrapperElement = document.createElement('div');
sectionWrapperElement.classList.add('section-wrapper');
document.body.append(sectionWrapperElement);

// create header
const headerElement = document.createElement('header');
headerElement.classList.add('header');

const headerIconElement = document.createElement('img');
headerIconElement.classList.add('header-icon');
headerIconElement.src = './assets/icons/queue-music.svg';
headerIconElement.alt = 'music-icon';

const headerTitleElement = document.createElement('span');
headerTitleElement.classList.add('header-title');
headerTitleElement.append('inPlaylist');
headerWrapperElement.append(headerElement);
headerElement.append(headerIconElement, headerTitleElement);

// create section
const sectionElement = document.createElement('section');
sectionElement.classList.add('section');
const mainTitleElement = document.createElement('h1');
mainTitleElement.classList.add('heading');
mainTitleElement.append('My Playlists');

const playlistsWrapperElement = document.createElement('div');
playlistsWrapperElement.classList.add('playlists-wrapper');

sectionWrapperElement.append(sectionElement);
sectionElement.append(mainTitleElement);
sectionElement.append(playlistsWrapperElement);

// create playlists
const playlistsElement = createPlaylists(playlistsData);
playlistsWrapperElement.append(playlistsElement);

function createTrack(trackInformation, playlistData) {
    const playlistTracksWrapperElement = document.createElement('div');
    playlistTracksWrapperElement.classList.add('playlist-track-block');

    const playlistTrackCoverElement = document.createElement('img');
    playlistTrackCoverElement.classList.add('playlist-track-cover-image');
    playlistTrackCoverElement.src = trackInformation.trackCoverUrl;
    playlistTrackCoverElement.alt = 'cover-image';
    playlistTracksWrapperElement.append(playlistTrackCoverElement);

    const trackAudioBlockElement = document.createElement('div');
    trackAudioBlockElement.classList.add('track-audio-block');
    playlistTracksWrapperElement.append(trackAudioBlockElement);

    const playlistTrackArtistNameElement = document.createElement('span');
    playlistTrackArtistNameElement.classList.add('playlist-track-artist-name');
    playlistTrackArtistNameElement.append(trackInformation.artistName + ' - ');

    const playlistTrackNameElement = document.createElement('span');
    playlistTrackNameElement.classList.add('playlist-track-name');
    playlistTrackArtistNameElement.append(trackInformation.trackName);
    trackAudioBlockElement.append(playlistTrackArtistNameElement, playlistTrackNameElement);

    if (trackInformation.isTopTrack) {
        const topTrackElement = document.createElement('img');
        topTrackElement.classList.add('playlist-top-track-image');
        topTrackElement.src = playlistData.topTrackUrl;
        topTrackElement.alt = 'top-track-image';
        playlistTrackArtistNameElement.parentNode.insertBefore(topTrackElement, playlistTrackArtistNameElement);
    }

    const playlistAudioTrackElement = document.createElement('audio');
    playlistAudioTrackElement.classList.add('playlist-track-audio');
    playlistAudioTrackElement.controls = true;
    playlistAudioTrackElement.src = trackInformation.musicFileUrl;
    trackAudioBlockElement.append(playlistAudioTrackElement);

    return playlistTracksWrapperElement;
}

function createPlaylist(playlistData) {
    const playlistWrapperElement = document.createElement('div');
    playlistWrapperElement.classList.add('playlist-block');

    const playlistCoverInfoBlockWrapperElement = document.createElement('div');
    playlistCoverInfoBlockWrapperElement.classList.add('playlist-cover-info-block');
    playlistWrapperElement.append(playlistCoverInfoBlockWrapperElement);

    const playlistCoverWrapperElement = document.createElement('div');
    playlistCoverWrapperElement.classList.add('playlist-cover-wrapper');
    playlistCoverInfoBlockWrapperElement.append(playlistCoverWrapperElement);

    const playlistMainCoverElement = document.createElement('img');
    playlistMainCoverElement.classList.add('playlist-main-cover');
    playlistMainCoverElement.src = playlistData.coverPlaylistUrl;
    playlistMainCoverElement.alt = 'main-cover';
    playlistCoverWrapperElement.append(playlistMainCoverElement);

    const playlistInfoWrapperElement = document.createElement('div');
    playlistInfoWrapperElement.classList.add('playlist-info-block');

    const playlistTitleElement = document.createElement('span');
    playlistTitleElement.classList.add('playlist-title');
    playlistTitleElement.append('Playlist');

    const playlistMainTitleElement = document.createElement('h2');
    playlistMainTitleElement.classList.add('playlist-main-title');
    playlistMainTitleElement.append(playlistData.title);

    const playlistTracksCountAndTotalDurationElement = document.createElement('span');
    playlistTracksCountAndTotalDurationElement.classList.add('playlist-track-number-and-duration');
    playlistTracksCountAndTotalDurationElement.append(playlistData.numberOfTracks + ' track(-s), ' + playlistData.totalTracksDurationInSeconds);

    const playlistTopArtistsElement = document.createElement('span');
    playlistTopArtistsElement.classList.add('playlist-top-artists');
    playlistTopArtistsElement.append(playlistData.tracksInformation[0].artistName + ', ' + playlistData.tracksInformation[1].artistName + ', ' + playlistData.tracksInformation[2].artistName);

    const playlistOthersArtistsElement = document.createElement('span');
    playlistOthersArtistsElement.classList.add('playlist-others-artists');
    playlistOthersArtistsElement.append(' and others');

    playlistCoverInfoBlockWrapperElement.append(playlistInfoWrapperElement);
    playlistInfoWrapperElement.append(playlistTitleElement, playlistMainTitleElement, playlistTracksCountAndTotalDurationElement, playlistTopArtistsElement, playlistOthersArtistsElement);

    playlistData.tracksInformation.forEach((trackInformation) => {
        const trackElement = createTrack(trackInformation, playlistData);
        playlistWrapperElement.append(trackElement);
    });

    return playlistWrapperElement;
}

function createPlaylists(playlistsData) {
    const playlistsWrapperElement = document.createElement('div');
    playlistsWrapperElement.classList.add('playlists-wrapper');

    playlistsData.forEach((playlistData) => {
        const playlistElement = createPlaylist(playlistData);
        playlistsWrapperElement.append(playlistElement);
    });

    return playlistsWrapperElement;
}



