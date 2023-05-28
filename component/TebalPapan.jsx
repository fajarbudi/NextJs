"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import VideoBg from "./videoBg"
export default function TebalPapan2() {
  const [input, setInput] = useState("");
  const [particle, setParticle] = useState("");
  const [multiplex, setMultiplex] = useState("");
  const Input = Number(input);
  useEffect(() => {
    if (!Input) {
      document.getElementById("button1").classList.remove("btn1");
      document.getElementById("button1").setAttribute("disabled", "disable")
    } else if (Input == input) {
      document.getElementById("button1").classList.add("btn1");
      document.getElementById("button1").removeAttribute("disabled", "disable")
    } else {
      document.getElementById("button1").classList.remove("btn1");
      document.getElementById("button1").setAttribute("disabled", "disable")
    }
  });
  const Hitung = () => {
    setParticle(((input / 10) * 2.54).toFixed(2));
    setMultiplex(((input / 10) * 2.54 * 0.6).toFixed(2));
  };
  return (
    <>
      <Slide duration={1200} direction="left">
        <div className="kotak_1">
          <VideoBg/>
          <h4>Tebal Papan</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="inch">Inch</label>
          <div className="PlaceHolder">
            <span className="ukuran">Inch</span>
            <input
              inputMode="numeric"
              id="inch"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <h5>Hasil :</h5>
          <label htmlFor="particle">Particle Wood</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              id="particle"
              value={particle}
              onChange={(e) => setParticle(e.target.value)}
            />
          </div>
          <label htmlFor="multiplex">Multiplex</label>
          <div className="PlaceHolder">
            <span className="ukuran">Cm</span>
            <input
              id="multiplex"
              value={multiplex}
              onChange={(e) => setMultiplex(e.target.value)}
            />
          </div>
          <button
            id="button1"
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
