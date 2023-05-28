"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import VideoBg from "./videoBg"
export default function Duckresonator() {
  const [gain, setGain] = useState("");
  const [lingkaran, setLingkaran] = useState("");
  const [persegi, setPersegi] = useState("");
  const [inch, setInch] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const Inch = Number(inch);
  const Gain = Number(gain);
  const Diameter = (Gain / 1.77) * 2.54;
  const Luaspersegi = ((Diameter * 3.14) / 2) * (Diameter / 2);
  const Persegi_P = Inch * 2.5;
  const Persegi_L = Luaspersegi / Persegi_P;
  useEffect(() => {
    if (inch == "" && gain == "") {
      document.getElementById("button2").classList.remove("btn1");
      document.getElementById("button2").setAttribute("disabled", "disable")
    } else if (Inch == inch && Gain == gain) {
      document.getElementById("button2").classList.add("btn1");
      document.getElementById("button2").removeAttribute("disabled", "disable")
    } else {
      document.getElementById("button2").classList.remove("btn1");
      document.getElementById("button2").setAttribute("disabled", "disable")
    }
  });
  const Hitung1 = () => {
    if (gain > 8) {
      setPeringatan("Lebih Dari 8");
    } else if (gain < 0.5) {
      setPeringatan("Kurang Dari 0. 5");
    } else {
      setPeringatan("");
      setLingkaran(Diameter.toFixed(2));
      setPersegi(Persegi_L.toFixed(2) + "   X   " + Persegi_P);
    }
  };
  return (
    <>
      <Slide duration={1200} direction="left">
        <div className="resonator">
          <VideoBg/>
          <h4>Duck Resonator</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="Gain1">Gain Factor</label>
          <div className="PlaceHolder">
            <span className="peringatan">{peringatan}</span>
            <input
              placeholder="Value = 0.5  -  8"
              inputMode="numeric"
              id="Gain1"
              value={gain}
              onChange={(e) => setGain(e.target.value)}
            />
          </div>
          <label htmlFor="Inch">Inch</label>
          <div className="PlaceHolder">
            <span className="ukuran">Inch</span>
            <input
              inputMode="numeric"
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
            id="button2"
            className="btn1 btn2"
            onClick={() => Hitung1()}
          >
            Hitung
          </button>
        </div>
      </Slide>
    </>
  );
}
