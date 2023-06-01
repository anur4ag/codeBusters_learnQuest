import Image from "next/image";
import Button from "../components/Button";
import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <>
      <main className="bg-custom-background-main min-h-screen bg-no-repeat bg-cover bg-center ">
        <Navbar />
        <div className="grid grid-cols-2 gap-4">
          <div className="w-3/4 ms-32 mt-28 p-4">
            <h1 className="text-6xl text-white font-extrabold">
              Gameify your learning experience and mint NFTs
            </h1>
            <div className="mt-8">
              <Button message={"Connect Metamask Wallet"} />
            </div>
          </div>
          <div className="m-auto p4">
            <Image src="/assets/home.png" alt="Home" width={400} height={500} />
          </div>
        </div>
      </main>
      <section className="about min-h-screen bg-custom-background-main bg-no-repeat bg-cover bg-center">
        <div className="p-8">
          <h1 className="text-6xl text-white font-extrabold ">About Us</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="m-auto p4">
            <Image
              src="/assets/about.png"
              alt="Home"
              width={800}
              height={500}
            />
          </div>
          <div className="w-3/4 ms-32 mt-28 p-4">
            <h1 className="text-6xl text-white font-extrabold">
              Gameify your learning experience and mint NFTs
            </h1>
            <div className="mt-8">
              <Button message={"Connect Metamask Wallet"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
