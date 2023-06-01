import mainVideo from "../assets/mainVideo.mp4"
import Button from "./Button"
import Navbar from "./Navbar";

export default function Home() {
    return (
      <section className="about relative">
        <BackgroundVideo />
        
        <div className="row z-10 relative">
        <Navbar />
          <div className="col-lg-12 col-md-12">
            <div className="w-3/4 ms-32 mt-28 p-4">
              <h1 className="text-6xl text-white font-extrabold">
                The Ultimate Learning Gamification Platform with NFT Rewards!
              </h1>
              <div className="mt-8">
                <Button message={"Connect Metamask Wallet"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function BackgroundVideo() {
    return (
      <div className="absolute inset-0 z-0 min-w-screen h-full">
        <video autoPlay loop muted className="bg-video object-cover">
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
