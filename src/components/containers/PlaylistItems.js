import React from "react";
import PlaylistItem from "../PlaylistItem";
import StyledPlaylistItems from "../styles/StyledPlaylistitems";
import withLink from '../hoc/withLink';

const PlayListItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => {
  return (
    <StyledPlaylistItems>
      {videos.map((video) => (
        <PlayListItemWithLink
          key={video.id}
          video={video}
          active={video.id === active.id ? true: false}
          played={video.played}
        />
      ))}
    </StyledPlaylistItems>
  );
};

export default PlaylistItems;
