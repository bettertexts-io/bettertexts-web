import { Animation } from '../components/Animation';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center mb-40">
        <h1 className="text-6xl font-semibold mb-5">
          better<span className="text-blue-600">texts</span>.io
        </h1>
        <Animation />
      </div>
    </div>
  );
}
