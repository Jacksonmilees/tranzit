"use client";

export default function TestImagePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Test Image Page</h1>
      <div className="w-24 h-24 rounded-full bg-gray-200">
        <img src="/images/jackson.jpg" alt="Jackson Alex" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
}
