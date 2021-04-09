import React from "react";

function BookmarkCard(props) {
  return (
    <div>
      <a href={props.url} target="_blank">
        <button>{props.name}</button>
      </a>
    </div>
  );
}

export default BookmarkCard;
