import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import { useContext } from "react";
import songRef from "../ContextAPI/Song";

function Player(props) {
  let [song]=useContext(songRef)
  console.log(song);
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > song.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = song.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <h4 style={{ marginBottom: "20px" }}>Playing now</h4>
      <Details song={song[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <audio
        className="c-player--audio"
        src={song[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p>
        Next up:{" "}
        <span>
          {song[props.nextSongIndex].title} by{" "}
          {song[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;
