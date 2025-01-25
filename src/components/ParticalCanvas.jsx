/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

const ParticleCanvas = ({ color }) => {
  const canvasRef = useRef(null);
  const deviceWidth = window.innerWidth;
  const numberOfParticles = deviceWidth <= 760 ? 80 : 200;
  const particleColor = color ? color : "#aaa";

  useEffect(() => {
    const particlesArray = [];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = 3;
        // this.color = this.getRandomColor();
        this.color = particleColor;
        this.speedX = Math.random() * 0.2 - 0.1; // Slower speed
        this.speedY = Math.random() * 0.2 - 0.1; // Slower speed
      }

      update() {
        if (this.x > this.baseX + 100 || this.x < this.baseX - 100) {
          this.speedX = -this.speedX;
        }
        if (this.y > this.baseY + 100 || this.y < this.baseY - 100) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      getRandomColor() {
        return `rgba(
          ${Math.random() * 255}, 
          ${Math.random() * 255}, 
          ${Math.random() * 255}, 
          ${Math.random()}
        )`;
      }
    }

    function createParticles() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacityValue = 1 - distance / 100; // Use distance to calculate opacity
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();

            // Color the region between particles
            ctx.fillStyle = `rgba(255, 255, 255, ${opacityValue * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.lineTo(
              (particlesArray[a].x + particlesArray[b].x) / 2,
              (particlesArray[a].y + particlesArray[b].y) / 2
            );
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [numberOfParticles, deviceWidth, particleColor]);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export const ImageToParticles = ({
  imageSrc,
  particleSize = 2,
  particleSpacing = 3,
  className
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const { naturalWidth: imgWidth, naturalHeight: imgHeight } = img;

      // Adjust canvas size
      const newWidth = window.innerWidth;
      const newHeight = Math.floor((imgHeight / imgWidth) * newWidth);
      canvas.width = newWidth;
      canvas.height = newHeight;

      // Draw image on canvas
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Get image data
      const imageData = ctx.getImageData(0, 0, newWidth, newHeight);
      const { data } = imageData;

      // Clear canvas for particles rendering
      ctx.clearRect(0, 0, newWidth, newHeight);

      // Particle spacing
      const effectiveParticleSize = particleSize + particleSpacing;

      // Draw particles
      for (let y = 0; y < newHeight; y += effectiveParticleSize) {
        for (let x = 0; x < newWidth; x += effectiveParticleSize) {
          const i = (y * newWidth + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3] / 255; // Alpha channel

          // Set particle color with some transparency
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;

          // Draw particle
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      img.src = imageSrc; // Reload image to apply new size
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageSrc, particleSize, particleSpacing]); // Image only needs to render once

  return (
    <div>
      <canvas
        ref={canvasRef}
        className={className}
        // style={{ backgroundColor: "#1e1e1e" }}
      />
    </div>
  );
};

export default ParticleCanvas;
