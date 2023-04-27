"use client";
import { useState } from "react";

export default function Boxspeaker() {
  const [gain, setGain] = useState("");
  const [inch, setInch] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [volume, setVolume] = useState("");
  const [lebar, setLebar] = useState("");
  const [panjang, setPanjang] = useState("");
  const Volume = 2.54 * gain * inch;
  const MiliLiter = 100 * 100 * ((Volume / 1000) * 100);
  const Lebar = inch * 2.54 + 6;
  const Panjang = MiliLiter / Lebar / tinggi;
  const Hitung = () => {
    if (gain > 8) {
      alert("Value GAIN FAKTOR lebih dari  =  8");
    } else {
      setVolume(Volume.toFixed(2));
      setLebar(Lebar.toFixed(2));
      setPanjang(Panjang.toFixed(2));
    }
  };
  return (
    <>
      <div className="box animate__animated animate__fadeInRightBig animate__delay-4s">
        <h4>Box Speaker</h4>
        <h5>Masukkan :</h5>
        <label htmlFor="Gain">Gain Factor</label>
        <div className="PlaceHolder">
          <span className="ukuran"></span>
          <input
            placeholder="Value =  0.5  -  8"
            type="text"
            id="Gain"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
          />
        </div>
        <label htmlFor="Inch">Inch</label>
        <div className="PlaceHolder">
          <span className="ukuran">Inch</span>
          <input
            type="text"
            id="Inch"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
          />
        </div>
        <label htmlFor="Tinggi">Tinggi Box</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Tinggi"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
        </div>
        <h5>Hasil :</h5>
        <label htmlFor="Volume">Volume Box</label>
        <div className="PlaceHolder">
          <span className="ukuran">Liter</span>
          <input
            type="text"
            id="Volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <label htmlFor="Lebar">Lebar Box</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Lebar"
            value={lebar}
            onChange={(e) => setLebar(e.target.value)}
          />
        </div>
        <label htmlFor="Panjang">Panjang Box</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Panjang"
            value={panjang}
            onChange={(e) => setPanjang(e.target.value)}
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
