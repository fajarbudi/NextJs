"use client";
import { useState, useEffect } from "react";
export default function MenentukanVolt() {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [volt, setVolt] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [disable, setDisable] = useState("");
  const Input1 = Number(input1);
  const Input2 = Number(input2);
  useEffect(() => {
    setSelect1("ampere1");
    setSelect2("ohm");
  }, []);
  useEffect(() => {
    if (input1 == 0 && input2 == 0) {
      document.getElementById("button3").classList.remove("btn1");
      setDisable("disable");
    } else if (Input1 == input1 && Input2 == input2) {
      document.getElementById("button3").classList.add("btn1");
      setPeringatan("");
      setDisable("");
    } else {
      document.getElementById("button3").classList.remove("btn1");
      setPeringatan("Masukkan Angka");
      setDisable("disable");
    }
  });
  const Hitung = () => {
    if (select1 === "ampere1" && select2 === "ohm") {
      setVolt((input1 * input2).toFixed(2));
    } else if (select1 === "watt" && select2 === "ampere2") {
      setVolt((input1 / input2).toFixed(2));
    } else if (select1 === "watt" && select2 === "ohm") {
      setVolt(Math.sqrt(input1 * input2).toFixed(2));
    } else {
      setVolt("SALAH");
    }
  };
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        className="kotak_1"
      >
        <h4>Menentukan Volt</h4>
        <h5>Masukkan :</h5>
        <label htmlFor="input1">Ampere / Watt</label>
        <div className="PlaceHolder">
          <span className="peringatan">{peringatan}</span>
          <select
            className="ukuran"
            value={select1}
            onChange={(e) => setSelect1(e.target.value)}
          >
            <option value="watt">Watt</option>
            <option value="ampere1">Amp</option>
          </select>
          <input
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <label htmlFor="input2">Ampere / Ohm</label>
        <div className="PlaceHolder">
          <span className="peringatan">{peringatan}</span>
          <select
            className="ukuran"
            value={select2}
            onChange={(e) => setSelect2(e.target.value)}
          >
            <option value="ampere2">Amp</option>
            <option value="ohm">Ohm</option>
          </select>
          <input
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <h5>Hasil :</h5>
        <label htmlFor="volt">Volt</label>
        <div className="PlaceHolder">
          <span className="ukuran">Volt</span>
          <input
            type="text"
            id="volt"
            value={volt}
            onChange={(e) => setVolt(e.target.value)}
          />
        </div>
        <button
          id="button3"
          disabled={disable}
          className="btn1 btn2"
          onClick={() => Hitung()}
        >
          Hitung
        </button>
      </div>
    </>
  );
}
