import mainVideo from "../assets/mainVideo.mp4"


export default function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 min-w-screen h-full">
        <video autoPlay loop muted className="bg-video object-cover ">
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}