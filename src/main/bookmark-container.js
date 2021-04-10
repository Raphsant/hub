import React from "react";
import BookmarkCard from "../cards/bookmark-card";

function BookmarkContainer() {
  return (
    <div className="container">
      <BookmarkCard name="Github" url="https://github.com/Raphsant" />
      <BookmarkCard name="Twitch" url="https://Twitch.tv" />
      <BookmarkCard name="Youtube" url="https://youtube.com" />
    </div>
  );
}

export default BookmarkContainer;
