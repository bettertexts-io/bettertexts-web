import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: [
    `Transform your words with just a click, thanks to bettertexts.io's Mac OS integration.`,
  ],
  autoStart: true,
});

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center mb-40">
        <h1 className="text-6xl font-semibold animate-pulse mb-5">
          better<span className="text-blue-600">texts</span>.io
        </h1>
        <p className="text-lg lowercase" id="typewriter" />
      </div>
    </div>
  );
}
