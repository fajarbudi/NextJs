"use client";
import { useState, useEffect } from "react";

export default function Duckresonator() {
  const [gain, setGain] = useState("");
  const [lingkaran, setLingkaran] = useState("");
  const [persegi, setPersegi] = useState("");
  const [inch, setInch] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [peringatan2, setPeringatan2] = useState("");
  const [disable, setDisable] = useState("");
  const Inch = Number(inch);
  const Gain = Number(gain);
  const Diameter = (Gain / 1.77) * 2.54;
  const Luaspersegi = ((Diameter * 3.14) / 2) * (Diameter / 2);
  const Persegi_P = Inch * 2.5;
  const Persegi_L = Luaspersegi / Persegi_P;
  useEffect(() => {
    if (inch == "" && gain == "") {
      document.getElementById("button2").classList.remove("btn1");
      setDisable("disable");
    } else if (Inch == inch && Gain == gain) {
      document.getElementById("button2").classList.add("btn1");
      setDisable("");
      setPeringatan("");
    } else {
      document.getElementById("button2").classList.remove("btn1");
      setDisable("disable");
      setPeringatan("Masukkan Angka");
    }
  });
  const Hitung1 = () => {
    if (gain > 8) {
      setPeringatan2("Lebih Dari 8");
    } else if (gain < 0.5) {
      setPeringatan2("Kurang Dari 0. 5");
    } else {
      setLingkaran(Diameter.toFixed(2));
      setPersegi(Persegi_L.toFixed(2) + " X " + Persegi_P);
    }
  };
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        className="resonator"
      >
        <h4>Duck Resonator</h4>
        <h5>Masukkan :</h5>
        <label htmlFor="Gain1">Gain Factor</label>
        <div className="PlaceHolder">
          <span className="peringatan">{peringatan}</span>
          <span className="peringatan">{peringatan2}</span>
          <input
            placeholder="Value = 0.5  -  8"
            type="text"
            id="Gain1"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
          />
        </div>
        <label htmlFor="Inch">Inch</label>
        <div className="PlaceHolder">
          <span className="peringatan">{peringatan}</span>
          <span className="ukuran">Inch</span>
          <input
            type="text"
            id="Inch"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
          />
        </div>
        <h5>Hasil :</h5>
        <label htmlFor="Wood">Lingkaran</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Wood"
            value={lingkaran}
            onChange={(e) => setLingkaran(e.target.value)}
          />
        </div>
        <label htmlFor="Wood">Persegi</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Wood"
            value={persegi}
            onChange={(e) => setPersegi(e.target.value)}
          />
        </div>
        <button
          disabled={disable}
          id="button2"
          className="btn1 btn2"
          onClick={() => Hitung1()}
        >
          Hitung
        </button>
      </div>
    </>
  );
}
