import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Dumbbell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradient for contrast (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 px-4 py-2 text-sm text-red-300 backdrop-blur">
          <Dumbbell className="h-4 w-4" />
          VR Fitness • Madhyapur Thimi, Bhaktapur
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Transform Your Body.
          <br />
          <span className="text-red-500">Redefine Your Limits.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
          A modern training space with expert coaches, immersive energy, and programs
          tailored to your goals. Strength, conditioning, mobility — we’ve got you.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#plans"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Join Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Book a Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
