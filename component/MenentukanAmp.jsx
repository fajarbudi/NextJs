"use client";
import { useState, useEffect } from "react";
import VideoBg from "./videoBg"
export default function () {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [ampere, setAmpere] = useState("");
  const [pilih, setPilih] = useState("");
  const [pilih2, setPilih2] = useState("");
  const Input1 = Number(input1);
  const Input2 = Number(input2);
  useEffect(() => {
    setPilih("watt");
    setPilih2("volt2");
  },[]);
  useEffect(() => {
    if (input1 === "" && input2 === "") {
      document.getElementById("button2").classList.remove("btn1");
      document.getElementById("button2").setAttribute('disabled', 'disable')
    } else if (Input1 == input1 && Input2 == input2) {
      document.getElementById("button2").classList.add("btn1");
      document.getElementById("button2").removeAttribute("disabled", "disable")
    } else {
      document.getElementById("button2").classList.remove("btn1");
      document.getElementById("button2").setAttribute('disabled', 'disable')
    }
  });
  const Hitung = () => {
    if (pilih == "volt1" && pilih2 == "HI") {
      setAmpere((input1 / input2).toFixed(2));
    } else if (pilih === "watt" && pilih2 === "volt2") {
      setAmpere((input1 / input2).toFixed(2));
    } else if ((pilih === "watt", pilih2 === "HI")) {
      setAmpere(Math.sqrt(input1 / input2).toFixed(2));
    } else {
      setAmpere("Rumusnya Salah");
    }
  };
  return (
    <>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="kotak_1">
          <VideoBg/>
          <h4>Menentukan Ampere</h4>
          <h5>Masukkan :</h5>
          <label htmlFor="volt">Volt / Watt</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={pilih}
              onChange={(e) => setPilih(e.target.value)}
            >
              <option value="volt1">Volt</option>
              <option value="watt">Watt</option>
            </select>
            <input
              id="volt"
              inputMode="numeric"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <label htmlFor="hambatan">Volt / Ohm</label>
          <div className="PlaceHolder">
            <select
              className="ukuran"
              value={pilih2}
              onChange={(e) => setPilih2(e.target.value)}
            >
              <option value="volt2">Volt</option>
              <option value="HI">Ohm</option>
            </select>
            <input
              id="hambatan"
              inputMode="numeric"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <h5>Hasil :</h5>
          <label htmlFor="ampere">Ampere</label>
          <div className="PlaceHolder">
            <span className="ukuran"> Amp</span>
            <input
              id="ampere"
              type="text"
              value={ampere}
              onChange={(e) => setAmpere(e.target.value)}
            />
          </div>
          <button
            id="button2"
            className="btn1 btn2"
            onClick={() => Hitung()}
          >
            Hitung
          </button>
        </div>
    </>
  );
}
