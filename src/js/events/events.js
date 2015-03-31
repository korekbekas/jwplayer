define([], function() {
    var touchEvents = {
        DRAG: 'jwplayerDrag',
        DRAG_START: 'jwplayerDragStart',
        DRAG_END: 'jwplayerDragEnd',
        TAP: 'jwplayerTap'
    };

    var events = {
        // General Events
        COMPLETE: 'COMPLETE',
        ERROR: 'ERROR',

        // API Events
        API_INITIALIZED: 'jwplayerAPIInitialized',
        API_SETUP: 'jwplayerAPISetup',
        API_READY: 'jwplayerAPIReady',
        JWPLAYER_READY: 'jwplayerReady',
        JWPLAYER_FULLSCREEN: 'jwplayerFullscreen',
        JWPLAYER_RESIZE: 'jwplayerResize',
        JWPLAYER_ERROR: 'jwplayerError',
        JWPLAYER_SETUP_ERROR: 'jwplayerSetupError',
        JWPLAYER_PROVIDER_CHANGED: 'jwplayerProviderChanged',

        // Media Events
        JWPLAYER_MEDIA_BEFOREPLAY: 'jwplayerMediaBeforePlay',
        JWPLAYER_MEDIA_BEFORECOMPLETE: 'jwplayerMediaBeforeComplete',
        JWPLAYER_MEDIA_BUFFER: 'jwplayerMediaBuffer',
        JWPLAYER_MEDIA_BUFFER_FULL: 'jwplayerMediaBufferFull',
        JWPLAYER_MEDIA_ERROR: 'jwplayerMediaError',
        JWPLAYER_MEDIA_FIRST_FRAME: 'jwplayerMediaFirstFrame',
        JWPLAYER_MEDIA_PLAY_ATTEMPT: 'jwplayerMediaPlayAttempt',
        JWPLAYER_MEDIA_LOADED: 'jwplayerMediaLoaded',
        JWPLAYER_MEDIA_COMPLETE: 'jwplayerMediaComplete',
        JWPLAYER_MEDIA_SEEK: 'jwplayerMediaSeek',
        JWPLAYER_MEDIA_SEEKED: 'jwplayerMediaSeeked',
        JWPLAYER_MEDIA_TIME: 'jwplayerMediaTime',
        JWPLAYER_MEDIA_VOLUME: 'jwplayerMediaVolume',
        JWPLAYER_MEDIA_META: 'jwplayerMediaMeta',
        JWPLAYER_MEDIA_MUTE: 'jwplayerMediaMute',
        JWPLAYER_AUDIO_TRACKS: 'jwplayerAudioTracks',
        JWPLAYER_AUDIO_TRACK_CHANGED: 'jwplayerAudioTrackChanged',
        JWPLAYER_MEDIA_LEVELS: 'jwplayerMediaLevels',
        JWPLAYER_MEDIA_LEVEL_CHANGED: 'jwplayerMediaLevelChanged',
        JWPLAYER_CAPTIONS_CHANGED: 'jwplayerCaptionsChanged',
        JWPLAYER_CAPTIONS_LIST: 'jwplayerCaptionsList',
        JWPLAYER_CAPTIONS_LOADED: 'jwplayerCaptionsLoaded',

        // State events
        JWPLAYER_PLAYER_STATE: 'jwplayerPlayerState',

        // Playlist Events
        JWPLAYER_PLAYLIST_LOADED: 'jwplayerPlaylistLoaded',
        JWPLAYER_PLAYLIST_ITEM: 'jwplayerPlaylistItem',
        JWPLAYER_PLAYLIST_COMPLETE: 'jwplayerPlaylistComplete',

        // Display CLick
        JWPLAYER_DISPLAY_CLICK: 'jwplayerViewClick',

        JWPLAYER_PROVIDER_CLICK: 'jwplayerProviderClick',
        JWPLAYER_PROVIDER_LOADING: 'jwplayerProviderLoading',
        JWPLAYER_PROVIDER_STALLED: 'jwplayerProviderStalled',
        JWPLAYER_PROVIDER_FIRST_FRAME: 'jwplayerProviderFirstFrame',

        JWPLAYER_VIEW_TAB_FOCUS: 'jwplayerViewTabFocus',

        // Controls show/hide 
        JWPLAYER_CONTROLS: 'jwplayerViewControls',
        JWPLAYER_USER_ACTION: 'jwplayerUserAction',
        JWPLAYER_CONTROLBAR_DRAGGING: 'jwplayerControlbarDragging',

        // Instream events
        JWPLAYER_INSTREAM_CLICK: 'jwplayerInstreamClicked',
        JWPLAYER_INSTREAM_DESTROYED: 'jwplayerInstreamDestroyed',

        // Ad events
        JWPLAYER_AD_TIME: 'jwplayerAdTime',
        JWPLAYER_AD_ERROR: 'jwplayerAdError',
        JWPLAYER_AD_CLICK: 'jwplayerAdClicked',
        JWPLAYER_AD_COMPLETE: 'jwplayerAdComplete',
        JWPLAYER_AD_IMPRESSION: 'jwplayerAdImpression',
        JWPLAYER_AD_COMPANIONS: 'jwplayerAdCompanions',
        JWPLAYER_AD_SKIPPED: 'jwplayerAdSkipped',
        JWPLAYER_AD_PLAY: 'jwplayerAdPlay',
        JWPLAYER_AD_PAUSE: 'jwplayerAdPause',
        JWPLAYER_AD_META: 'jwplayerAdMeta',


        // Casting
        JWPLAYER_CAST_AVAILABLE: 'jwplayerCastAvailable',
        JWPLAYER_CAST_SESSION: 'jwplayerCastSession',
        JWPLAYER_CAST_AD_CHANGED: 'jwplayerCastAdChanged'

    };

    events.touchEvents = touchEvents;
    return events;
});
