"use client";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import VideoBg from "./videoBg"
export default function MenentukanResistance() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [resistance, setResistance] = useState("");
  const Input1 = Number(input1);
  const Input2 = Number(input2);
  useEffect(() => {
    setSelect1("volt");
    setSelect2("ampere");
  }, []);
  useEffect(() => {
    if (Input1 == 0 && Input2 == 0) {
      document.getElementById("button4").classList.remove("btn1");
      document.getElementById("button4").setAttribute("disabled", "disable")
    } else if (Input1 == input1 && Input2 == input2) {
      document.getElementById("button4").classList.add("btn1");
      document.getElementById("button4").removeAttribute("disabled", "disable")
    } else {
      document.getElementById("button4").classList.remove("btn1");
      document.getElementById("button4").setAttribute("disabled", "disable")
    }
  });
  const Hitung = () => {
    if (select1 === "volt" && select2 === "ampere") {
      setResistance((input1 / input2).toFixed(2));
    } else if (select1 === "volt" && select2 === "watt2") {
      setResistance((Math.pow(input1, 2) / input2).toFixed(2));
    } else if (select1 === "watt1" && select2 === "ampere") {
      setResistance((input1 / Math.pow(input2, 2)).toFixed(2));
    } else {
      setResistance("Rumusnya Salah");
    }
  };
  return (
    <>
      <Slide duration={1200} direction="left">
        <div className="kotak_1">
          <VideoBg/>
          <h4>Menentukan Resistance</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="input1">Watt / Volt</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={select1}
              onChange={(e) => setSelect1(e.target.value)}
            >
              <option value="watt1">Watt</option>
              <option value="volt">Volt</option>
            </select>
            <input
              inputMode="numeric"
              id="input1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <label htmlFor="input2">Watt / Ampere</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={select2}
              onChange={(e) => setSelect2(e.target.value)}
            >
              <option value="watt2">Watt</option>
              <option value="ampere">Amp</option>
            </select>
            <input
              inputMode="numeric"
              id="input2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <h5>Hasil :</h5>
          <label htmlFor="resistance">Resistance</label>
          <div className="PlaceHolder">
            <span className="ukuran">Ohm</span>
            <input
              id="resistance"
              value={resistance}
              onChange={(e) => setResistance(e.value.target)}
            />
          </div>
          <button
            id="button4"
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
