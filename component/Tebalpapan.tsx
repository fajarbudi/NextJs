"use client";
import { useState } from "react";
export default function Tebalpapan() {
  const [inch, setInch] = useState("");
  const [particleWood, setParticleWood] = useState("");
  const [multiplex, setMultiplex] = useState("");
  const Gain1 = Number(inch);
  const Particle = String((Gain1 / 10) * 2);
  const Wood = String((Gain1 / 10) * 2 * 0.6);
  const Hitung1 = () => {
    setMultiplex(Wood);
    setParticleWood(Particle);
  };
  return (
    <>
      <div className="papan animate__animated animate__fadeInRightBig animate__delay-1s">
        <h4>Tebal Papan</h4>
        <h5>Masukkan :</h5>
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
        <label htmlFor="Wood">Particle Wood</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Wood"
            value={particleWood}
            onChange={(e) => setParticleWood(e.target.value)}
          />
        </div>
        <label htmlFor="Wood">Multiplex</label>
        <div className="PlaceHolder">
          <span className="ukuran">Cm</span>
          <input
            type="text"
            id="Wood"
            value={multiplex}
            onChange={(e) => setMultiplex(e.target.value)}
          />
        </div>

        <button className="btn" onClick={() => Hitung1()}>
          Hitung
        </button>
      </div>
    </>
  );
}
