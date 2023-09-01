import React from "react";
import { useContext } from "react";
import songRef from "../ContextAPI/Song";

function Details(props) {
  let[song]=useContext(songRef) 
  return (
    <div className="c-player--details">
      <h3 className="details-title">{song.title}</h3>
      <h4 className="details-artist">{song.artist}</h4>
    </div>
  );
}

export default Details;
