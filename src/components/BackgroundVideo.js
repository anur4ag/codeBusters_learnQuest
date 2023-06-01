import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/main-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
