import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import Nighmode from "../Nighmode";
import PlaylistItems from "../containers/PlaylistItems";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
  return (
    <StyledPlaylist>
      <Nighmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
};

export default Playlist;
