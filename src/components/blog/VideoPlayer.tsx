import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  type?: string;
}

const VideoPlayer = ({ src, type = "video/mp4" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <div className="my-8 relative group cursor-pointer" onClick={!hasStarted ? handlePlay : undefined}>
      <video 
        ref={videoRef}
        controls={hasStarted}
        className="w-full rounded-lg shadow-lg"
        playsInline
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      
      {/* Play button overlay - visible until first play */}
      {!hasStarted && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg transition-opacity hover:bg-black/40"
          onClick={handlePlay}
        >
          <div className="bg-primary rounded-full p-5 shadow-xl transform transition-transform hover:scale-110">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
          <span className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            ▶ Play Video
          </span>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
