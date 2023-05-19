"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
export default function Boxspeaker() {
  const [gain, setGain] = useState("");
  const [inch, setInch] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [volume, setVolume] = useState("");
  const [lebar, setLebar] = useState("");
  const [panjang, setPanjang] = useState("");
  const [disable, setDisable] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const Gain = Number(gain);
  const Inch = Number(inch);
  const Tinggi = Number(tinggi);
  const Volume = 2.54 * gain * inch;
  const MiliLiter = 100 * 100 * ((Volume / 1000) * 100);
  const Lebar = inch * 2.54 + 6;
  useEffect(() => {
    if (!gain && !inch && !tinggi) {
      document.getElementById("button4").classList.remove("btn1");
      setDisable("disable");
    } else if (Gain == gain && Inch == inch && Tinggi == tinggi) {
      document.getElementById("button4").classList.add("btn1");
      setDisable("");
    } else {
      document.getElementById("button4").classList.remove("btn1");
      setDisable("disable");
    }
  });
  const Hitung = () => {
    if (gain > 8) {
      setPeringatan("Lebih Dari 8");
    } else if (gain < 0.5) {
      setPeringatan("Kurang Dari 0. 5");
    } else {
      setPeringatan("");
      setVolume((2.54 * gain * inch).toFixed(2));
      setLebar((inch * 2.54 + 6).toFixed(2));
      setPanjang((MiliLiter / Lebar / tinggi).toFixed(2));
    }
  };
  return (
    <>
      <Slide duration={1200} direction="left">
        <div className="box">
          <h4>Box Speaker</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="Gain">Gain Factor</label>
          <div className="PlaceHolder">
            <span className="peringatan">{peringatan}</span>
            <input
              placeholder="Value =  0.5  -  8"
              inputMode="numeric"
              id="Gain"
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
          <label htmlFor="Tinggi">Tinggi Box</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              inputMode="numeric"
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
            id="button4"
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
