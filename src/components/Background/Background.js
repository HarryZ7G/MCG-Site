import React from 'react';
import './Background.css';
import Particles from "react-tsparticles";

function Background(props) {
  return (
    <Particles
      className="particles animate__animated animate__fadeIn"
      id="tsparticles"
      options={{
        background: {
          color: {
            // value: "#000",
            value: "#fff",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: "#ffffff",
            // value: "#444",
            value: "#6070FF44",
          },
          links: {
            // color: "#ffffff",
            // color: "#888",
            color: "#6070FF",
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default React.memo(Background);