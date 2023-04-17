import React from "react";

function VideoPlayer({ videoId }) {
  return (
    <div class="ratio ratio-16x9 youtube-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title="YouTube video"
        allowFullScreen
        autoplay
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
