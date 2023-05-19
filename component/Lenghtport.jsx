"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
export default function Lenghtport() {
  const [freq, setFreq] = useState("");
  const [volume, setVolume] = useState("");
  const [port, setPort] = useState("");
  const [diameter, setDiameter] = useState("");
  const [lenght, setLenght] = useState("");
  const [disable, setDisable] = useState("");
  const Freq = Number(freq);
  const Volume = Number(volume);
  const Port = Number(port);
  const diameter1 = Number(diameter);
  const DV2 = Math.pow(diameter, 2);
  const FB = Math.pow(freq, 2);
  useEffect(() => {
    if (freq == "" && volume == "" && port == "" && diameter == "") {
      document.getElementById("button3").classList.remove("btn1");
      setDisable("disable");
    } else if (
      Freq == freq &&
      Volume == volume &&
      Port == port &&
      diameter1 == diameter
    ) {
      document.getElementById("button3").classList.add("btn1");
      setDisable("");
    } else {
      document.getElementById("button3").classList.remove("btn1");
      setDisable("disable");
    }
  });
  const Hasil =
    (23562.5 * DV2.toFixed(2) * port) / (FB * volume) - 0.732 * diameter;
  const Hitung = () => {
    setLenght(Hasil.toFixed(2));
  };
  return (
    <>
      <Slide duration={1200} direction="left">
        <div className="length">
          <h4>Length Port</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="freq">Tunning Freq</label>
          <div className="PlaceHolder">
            <span className="ukuran">Hz</span>
            <input
              type="numeric"
              id="freq"
              value={freq}
              onChange={(e) => setFreq(e.target.value)}
            />
          </div>
          <label htmlFor="volume">Volume Box</label>
          <div className="PlaceHolder">
            <span className="ukuran">Liter</span>
            <input
              type="numeric"
              id="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <label htmlFor="port">Jumlah Port</label>
          <div className="PlaceHolder">
            <span className="ukuran"></span>
            <input
              type="numeric"
              id="port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
          </div>
          <label htmlFor="diameter">Diameter Port</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              type="numeric"
              id="diameter"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
            />
          </div>
          <h5>Hasil :</h5>
          <label htmlFor="lenght">Lenght Port</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              type="text"
              id="lenght"
              value={lenght}
              onChange={(e) => setLenght(e.target.value)}
            />
          </div>
          <button
            id="button3"
            disabled={disable}
            className="btn1 btn2"
            onClick={() => Hitung()}
          >
            Hitung
          </button>
        </div>
      </Slide>
    </>
  );
}
