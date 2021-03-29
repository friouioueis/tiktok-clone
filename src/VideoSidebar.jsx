import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSidebar.css";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
