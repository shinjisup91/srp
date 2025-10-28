"use client";

import { useState } from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage?: string;
}

export default function VideoBackground({ videoUrl, fallbackImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" }: VideoBackgroundProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${fallbackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.7)",
        }}
        onError={() => setError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
    </div>
  );
}

