"use client";
import { useState, useEffect } from "react";
import VideoBg from "./videoBg"
export default function MenentukanWaat() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [watt, setWatt] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  useEffect(() => {
    setSelect1("volt1");
    setSelect2("ohm");
  }, []);
  useEffect(() => {
    if (!input1 || !input2) {
      document.getElementById("button1").classList.remove("btn1");
      document.getElementById("button1").setAttribute("disabled", "disable")
    } else if (isNaN(input1) || isNaN(input2)) {
      document.getElementById("button1").classList.remove("btn1");
      document.getElementById("button1").setAttribute("disabled", "disable")
    } else {
      document.getElementById("button1").classList.add("btn1");
      document.getElementById("button1").removeAttribute("disabled", "disable")
    }
  });
  const Hitung = () => {
    if (select1 === "volt1" && select2 === "ohm") {
      setWatt((Math.pow(input1, 2) / input2).toFixed(2));
    } else if (select1 === "volt1" && select2 === "amp2") {
      setWatt((input1 * input2).toFixed(2));
    } else if (select1 === "amp1" && select2 === "ohm") {
      setWatt((Math.pow(input1, 2) * input2).toFixed(2));
    } else {
      setWatt("Rumusnya Salah");
    }
  };
  return (
    <>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="kotak_1">
          <VideoBg/>
          <h4>Menentukan Watt</h4>
          <h5>Masukan :</h5>
          <label htmlFor="volt">Volt / Ampere</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={select1}
              onChange={(e) => setSelect1(e.target.value)}
            >
              <option value="volt1">Volt</option>
              <option value="amp1">Amp</option>
            </select>
            <input
              id="volt"
              inputMode="numeric"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <label htmlFor="beban">Ohm / Volt</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={select2}
              onChange={(e) => setSelect2(e.target.value)}
            >
              <option value="ohm">Ohm</option>
              <option value="amp2">Amp</option>
            </select>
            <input
              id="beban"
              inputMode="numeric"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <h5>Hasil :</h5>
          <label htmlFor="watt">Watt</label>
          <div className="PlaceHolder">
            <span className="ukuran"> Watt</span>
            <input
              id="watt"
              type="text"
              value={watt}
              onChange={(e) => setWatt(e.target.value)}
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
    </>
  );
}
