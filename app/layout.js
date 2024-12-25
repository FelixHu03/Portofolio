"use client";
import Navbar from "./navbar";
import './globals.css';
import { useEffect } from 'react';
import Script from "next/script";

export default function Layout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 6,
            direction: "bottom",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
      <div className="min-h-screen">
          <div id="particles-js" className="fixed inset-0 z-0" />
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="relative z-10 pt-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}