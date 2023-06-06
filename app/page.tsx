import Navbar from "./navbar";
import Tebalpapan from "../component/TebalPapan";
import DuckResonator from "../component/Duckresonator";
import LenghtPort from "../component/Lenghtport";
import BoxSpeaker from "../component/Boxspeaker";
import Scrolling from "./scrolling"
export const metadata = {
  title: "Elektronika-Halaman 1",
  description: "",
};
export default function halaman1() {
    return (
      <>
        <Navbar judul="Menghitung Box Speaker" />
        <Scrolling/>
        <section>
          <Tebalpapan />
          <DuckResonator />
          <LenghtPort />
          <BoxSpeaker />
        </section>
      </>
    );
}
