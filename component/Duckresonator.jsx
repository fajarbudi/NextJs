"use client";
import { useState } from "react";

export default function Duckresonator() {
  const [gain, setGain] = useState("");
  const [lingkaran, setLingkaran] = useState("");
  const [persegi, setPersegi] = useState("");
  const [inch, setInch] = useState("");
  const Inch = Number(inch);
  const Gain = Number(gain);
  const Diameter = (Gain / 1.77) * 2.54;
  const Luaspersegi = ((Diameter * 3.14) / 2) * (Diameter / 2);
  const Persegi_P = Inch * 2.5;
  const Persegi_L = Luaspersegi / Persegi_P;
  const Hitung1 = () => {
    if (gain > 8) {
      alert("Value GAIN FAKTOR lebih dari  =  8");
    } else {
      setLingkaran(Diameter.toFixed(2));
      setPersegi(Persegi_L.toFixed(2) + " X " + Persegi_P);
    }
  };
  return (
    <>
      <div className="resonator animate__animated animate__fadeInRightBig animate__delay-1s">
        <h4>Tebal Papan</h4>
        <h5>Masukkan :</h5>
        <label htmlFor="Gain1">Gain Factor</label>
        <div className="PlaceHolder">
          <span className="ukuran"></span>
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
          className="btn btn-outline-primary center-block"
          onClick={() => Hitung1()}
        >
          Hitung
        </button>
      </div>
    </>
  );
}
