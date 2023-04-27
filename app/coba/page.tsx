import Navbar from "../../component/navbar";
import Tebalpapan from "../../component/Tebalpapan";
import Duckresonator from "../../component/Duckresonator";
import Lenghtport from "../../component/Lenghtport";
import Boxspeaker from "../../component/Boxspeaker";
export default function halaman1() {
  return (
    <>
      <Navbar />
      <div className="container2 ">
        <Tebalpapan />

        <Duckresonator />

        <Lenghtport />

        <Boxspeaker />
      </div>
    </>
  );
}
