import Navbar from "../navbar";
import MenentukanWaat from "../../component/MenentukanWatt";
import MenentukanAmp from "../../component/MenentukanAmp";
import MenentukanVolt from "../../component/MenentukanVolt";
import MenentukanResistance from "../../component/MenentukanResistance";
import Scrolling from "../scrolling"
export const metadata = {
  title: "Elektronika-Halaman 2",
  description: "",
};
export default function halaman2() {
  return (
    <>
      <Navbar judul="Hukum Ohm" />
      <Scrolling/>
      <section>
        <MenentukanWaat />
        <MenentukanAmp />
        <MenentukanVolt />
        <MenentukanResistance />
      </section>
    </>
  );
}
