import React from "react";

const videos = [
  "https://www.youtube.com/embed/IcrbM1l_BoI",
  "https://www.youtube.com/embed/Gg3dZN3LbrM",
  "https://www.youtube.com/embed/7ghhRHRP6t4",
];

const VideoSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Featured Videos
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {videos.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={src}
                  title={`Video ${index}`}
                  className="w-full h-56 md:h-64"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
