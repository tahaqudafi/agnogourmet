import { useEffect, useRef, useState } from "react";
import webVideo from "@/assets/web1.webm";
import mobileVideo from "@/assets/web.mp4";
import fallbackImage from "@/assets/lpm.png";
import { SocialMediaIcons } from "@/components/SocialMediaIcons";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      if (video.readyState >= 2 && !videoError) {
        // Set canvas size to match container
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Calculate aspect ratio for proper scaling
        const videoAspect = video.videoWidth / video.videoHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

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
      if (!videoError) {
        requestAnimationFrame(drawFrame);
      }
    };

    // Start video and canvas rendering
    const startPlayback = async () => {
      try {
        await video.play();
        setVideoError(false);
        drawFrame();
      } catch (error) {
        console.warn("Video playback failed:", error);
        setVideoError(true);
      }
    };

    // Handle video errors
    const handleVideoError = () => {
      console.warn("Video failed to load");
      setVideoError(true);
    };

    video.addEventListener("loadedmetadata", startPlayback);
    video.addEventListener("error", handleVideoError);
    startPlayback();

    return () => {
      video.removeEventListener("loadedmetadata", startPlayback);
      video.removeEventListener("error", handleVideoError);
    };
  }, []);

  return (
    <section id="home" className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hidden video element - Opera GX won't show controls for hidden elements */}
      <video
        ref={videoRef}
        className="absolute opacity-0 pointer-events-none"
        src={isMobile ? mobileVideo : webVideo}
        preload="auto"
        muted
        loop
        playsInline
        style={{ width: "1px", height: "1px" }}
      />

      {/* Canvas that displays the video - appears as an image to Opera GX */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${videoError ? 'hidden' : ''}`}
        style={{ imageRendering: "auto" }}
      />

      {/* Fallback image when video fails */}
      {videoError && (
        <img
          src={fallbackImage}
          alt="Olive oil background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
      )}

      {/* Hero Text Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div
          className="absolute top-[45%] -translate-y-1/2 hidden md:block"
          style={{
            left: windowWidth <= 1440 ? '22%' : '23%'
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-left">
            Olive oil<br />
            makes
          </h1>
        </div>

        <div
          className="absolute top-[45%] -translate-y-1/2 hidden md:block"
          style={{
            right: windowWidth <= 1440 ? '16%' : '20%'
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-right">
            Everything<br />
            better
          </h1>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="hidden md:block">
        <SocialMediaIcons />
      </div>
    </section>
  );
};