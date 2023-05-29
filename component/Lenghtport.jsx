"use client";
import { useState, useEffect } from "react";
import VideoBg from "./videoBg"
export default function Lenghtport() {
  const [freq, setFreq] = useState("");
  const [volume, setVolume] = useState("");
  const [port, setPort] = useState("");
  const [diameter, setDiameter] = useState("");
  const [lenght, setLenght] = useState("");
  const Freq = Number(freq);
  const Volume = Number(volume);
  const Port = Number(port);
  const diameter1 = Number(diameter);
  const DV2 = Math.pow(diameter, 2);
  const FB = Math.pow(freq, 2);
  useEffect(() => {
    if (freq == "" && volume == "" && port == "" && diameter == "") {
      document.getElementById("button3").classList.remove("btn1");
      document.getElementById("button3").setAttribute("disabled", "disable")
    } else if (
      Freq == freq &&
      Volume == volume &&
      Port == port &&
      diameter1 == diameter
    ) {
      document.getElementById("button3").classList.add("btn1");
      document.getElementById("button3").removeAttribute("disabled", "disable")
    } else {
      document.getElementById("button3").classList.remove("btn1");
      document.getElementById("button3").setAttribute("disabled", "disable")
    }
  });
  const Hasil =
    (23562.5 * DV2.toFixed(2) * port) / (FB * volume) - 0.732 * diameter;
  const Hitung = () => {
    setLenght(Hasil.toFixed(2));
  };
  return (
    <>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="length">
          <VideoBg/>
          <h4>Length Port</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="freq">Tunning Freq</label>
          <div className="PlaceHolder">
            <span className="ukuran">Hz</span>
            <input
              inputMode="numeric"
              id="freq"
              value={freq}
              onChange={(e) => setFreq(e.target.value)}
            />
          </div>
          <label htmlFor="volume">Volume Box</label>
          <div className="PlaceHolder">
            <span className="ukuran">Liter</span>
            <input
              inputMode="numeric"
              id="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <label htmlFor="port">Jumlah Port</label>
          <div className="PlaceHolder">
            <span className="ukuran"></span>
            <input
              inputMode="numeric"
              id="port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
          </div>
          <label htmlFor="diameter">Diameter Port</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              inputMode="numeric"
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
            className="btn1 btn2"
            onClick={() => Hitung()}
          >
            Hitung
          </button>
        </div>
    </>
  );
}
