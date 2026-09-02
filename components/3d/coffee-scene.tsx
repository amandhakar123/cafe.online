"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, ContactShadows, PresentationControls } from "@react-three/drei";
import { CoffeeCupModel } from "./coffee-cup";
import Image from "next/image";

export function CoffeeScene() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full min-h-[350px] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)]/30 border-t-[var(--accent)] animate-spin" />
      </div>
    );
  }

  if (hasWebGL === false) {
    return (
      <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border border-[var(--border)] shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
            alt="Artisanal Coffee"
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 1.8, 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#FFF5E4" castShadow />
        <pointLight position={[-4, 3, -2]} intensity={1.0} color="#D4AF37" />
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#C28E5C" />

        <Suspense fallback={null}>
          <PresentationControls
            global={false}
            cursor={true}
            snap={true}
            speed={1.5}
            zoom={1}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float
              speed={2}
              rotationIntensity={0.4}
              floatIntensity={0.6}
              floatingRange={[-0.05, 0.05]}
            >
              <CoffeeCupModel />
            </Float>
          </PresentationControls>

          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.6}
            scale={4}
            blur={2.5}
            far={4}
            color="#0C0A09"
          />
        </Suspense>
      </Canvas>

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] bg-black/40 px-3 py-1 rounded-full border border-[var(--border)] backdrop-blur-sm">
          ✦ Interactive 3D • Drag to Rotate
        </span>
      </div>
    </div>
  );
}
