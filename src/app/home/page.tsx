"use client";

export default function Index() {
  return (
    <div className="flex h-screen w-full">
      {/* Right: Fullscreen Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('hornets-wallpaper.jpg')",
          filter: "brightness(0.7)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
