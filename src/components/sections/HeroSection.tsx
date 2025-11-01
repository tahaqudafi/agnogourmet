import { useEffect, useRef } from "react";
import webVideo from "@/assets/web.mp4";
import { SocialMediaIcons } from "@/components/SocialMediaIcons";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up video properties
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    // Function to draw video frame to canvas
    const drawFrame = () => {
      if (video.readyState >= 2) {
        // Set canvas size to match container
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Calculate aspect ratio for proper scaling
        const videoAspect = video.videoWidth / video.videoHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth, drawHeight, drawX, drawY;

        if (videoAspect > canvasAspect) {
          // Video is wider - fit to height
          drawHeight = canvas.height;
          drawWidth = drawHeight * videoAspect;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        } else {
          // Video is taller - fit to width
          drawWidth = canvas.width;
          drawHeight = drawWidth / videoAspect;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight);
      }
      requestAnimationFrame(drawFrame);
    };

    // Start video and canvas rendering
    const startPlayback = async () => {
      try {
        await video.play();
        drawFrame();
      } catch (error) {
        console.warn("Autoplay blocked — Opera GX may require user interaction:", error);
      }
    };

    video.addEventListener("loadedmetadata", startPlayback);
    startPlayback();

    return () => {
      video.removeEventListener("loadedmetadata", startPlayback);
    };
  }, []);

  return (
    <section id="home" className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hidden video element - Opera GX won't show controls for hidden elements */}
      <video
        ref={videoRef}
        className="absolute opacity-0 pointer-events-none"
        src={webVideo}
        preload="auto"
        muted
        loop
        playsInline
        style={{ width: "1px", height: "1px" }}
      />

      {/* Canvas that displays the video - appears as an image to Opera GX */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ imageRendering: "auto" }}
      />

      {/* Hero Text Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="absolute left-[23%] top-[45%] -translate-y-1/2">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-left">
            Olive oil<br />
            makes
          </h1>
        </div>

        <div className="absolute right-[20%] top-[45%] -translate-y-1/2">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-right">
            Everything<br />
            better
          </h1>
        </div>
      </div>

      {/* Social Media Icons */}
      <SocialMediaIcons />
    </section>
  );
};