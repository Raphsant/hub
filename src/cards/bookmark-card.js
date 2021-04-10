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
      <button>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.name}{" "}
        </a>
      </button>
    </div>
  );
}

export default BookmarkCard;
