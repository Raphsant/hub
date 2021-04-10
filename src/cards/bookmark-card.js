import React from "react";
import "./css/card.css";
function BookmarkCard(props) {
  //Styling
  const style = {
    display: "inline",
    padding: "10px",
  };

  return (
    <div style={style}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button>{props.name}</button>
      </a>
    </div>
  );
}

export default BookmarkCard;
