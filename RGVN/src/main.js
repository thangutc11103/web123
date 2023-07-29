 // 1. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
      
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 2. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     playerVars: {
               autoplay: 1,
               loop: 1,
               controls: 0,
               vq: 'hd1080'},
     videoId: 'uoovkkvoQjk',
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 // 3. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
   player.mute();
   player.setPlaybackQuality('hd720');
  //  player.removeEventListener(event: String, listener:String):Void;

 }

 var done = false;
 function onPlayerStateChange(event) {
   
 }
 function stopVideo() {
   player.stopVideo();
 }