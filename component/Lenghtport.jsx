"use client";
import { useState } from "react";

export default function Lenghtport() {
  const [freq, setFreq] = useState("");
  const [volume, setVolume] = useState("");
  const [port, setPort] = useState("");
  const [diameter, setDiameter] = useState("");
  const [lenght, setLenght] = useState("");
  const DV2 = Math.pow(diameter, 2);
  const FB = Math.pow(freq, 2);
  const Hasil =
    (23562.5 * DV2.toFixed(2) * port) / (FB * volume) - 0.732 * diameter;
  const Hitung = () => {
    setLenght(Hasil.toFixed(2));
  };
  return (
    <>
      <div className="length animate__animated animate__fadeInRightBig animate__delay-3s">
        <h4>Length Port</h4>
        <h5>Masukkan :</h5>
        <label htmlFor="freq">Tunning Freq</label>
        <div className="PlaceHolder">
          <span className="ukuran">Hz</span>
          <input
            type="text"
            id="freq"
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
          />
        </div>
        <label htmlFor="volume">Volume Box</label>
        <div className="PlaceHolder">
          <span className="ukuran">Liter</span>
          <input
            type="text"
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <label htmlFor="port">Jumlah Port</label>
        <div className="PlaceHolder">
          <span className="ukuran"></span>
          <input
            type="text"
            id="port"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <label htmlFor="diameter">Diameter Port</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
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
          className="btn btn-outline-primary center-block"
          onClick={() => Hitung()}
        >
          Hitung
        </button>
      </div>
    </>
  );
}
