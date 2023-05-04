import Navbar from "./navbar";
import Tebalpapan from "@/component/Tebalpapan";
import DuckResonator from "@/component/DuckResonator";
import LenghtPort from "@/component/Lenghtport";
import BoxSpeaker from "@/component/Boxspeaker";
export const metadata = {
  title: "Elektronika-Halaman 1",
  description: "",
};
export default function halaman1() {
  return (
    <>
      <Navbar judul="Menghitung Box Speaker" />
      <div className="container2 ">
        <Tebalpapan />
        <DuckResonator />
        <LenghtPort />
        <BoxSpeaker />
      </div>
    </>
  );
}
