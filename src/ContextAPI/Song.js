import { createContext } from "react";
import { useState } from "react";
import App from "../App"

const songRef = createContext();

export default songRef;


export function Data() {

    const [song] = useState([
        {
            title: "Titaliya",
            artist: "Hardy Sandhu",
            src: "./music/Titliaan Warga.mp3",
        },
        {
            title: "Nach Meri Rani",
            artist: "Yo Yo Honey Singh",
            src: "./music/Naach Meri Rani.mp3",
        },
        {
            title: "Care Ni Karda",
            artist: "Yo Yo Honey Singh",
            src: "./music/Care Ni Karda.mp3",
        },
        {
            title: "Burj Khalifa",
            artist: "Shashi",
            src: "./music/BurjKhalifa.mp3",
        },
        {
            title: "Tango Del Fuego",
            artist: "Parov Stelar",
            src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
        },
        {
            title: "Take You Dancing",
            artist: "Jason Derulo",
            src: "./music/JasonDerulo-TakeYouDancing.mp3",
        },
        {
            title: "Daisy",
            artist: "Ashnikko",
            src: "./music/Ashnikko-Daisy.mp3",
        },
        {
            title: "Dolly Song",
            artist: "Partz Grimbad",
            src: "./music/PatzGrimbard-DollySong.mp3",
        },
    ]);

   

    return <div>
        <songRef.Provider value={[song]}>
            <App />
        </songRef.Provider>

    </div>
}