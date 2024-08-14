import React from "react";
import { Carousel } from "."; // Ajusta la ruta según tu estructura de archivos

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative">
          <img
            key="slide1"
            src="https://via.placeholder.com/800x300?text=Slide+1"
            alt="Slide 1"
            className="w-full"
            style={{ width: "800px", height: "300px" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            key="slide1"
            src="https://via.placeholder.com/800x300?text=Slide+1"
            alt="Slide 1"
            className="w-full"
            style={{ width: "800px", height: "300px" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            key="slide1"
            src="https://via.placeholder.com/800x300?text=Slide+1"
            alt="Slide 1"
            className="w-full"
            style={{ width: "800px", height: "300px" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
