import React from 'react';
import "./home.css"; // Importar el archivo CSS


export default function Home() {
  return (
    <div className='container-video'>
      {/* Reemplaza la imagen con el video de YouTube */}
      <iframe className="video"
        title="Video de YouTube"
        src="https://www.youtube.com/embed/tGsKzZtRwxw?autoplay=1"
        allowFullScreen
      />
    </div>
  );
}
