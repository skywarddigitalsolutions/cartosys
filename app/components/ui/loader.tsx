import React from 'react';

const SimpleMapLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-bordofondo">
      <div className="relative w-64 h-64 bg-bordofondo rounded-lg shadow-lg overflow-hidden">
        {/* Líneas del mapa */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-px bg-verde w-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-px bg-verde h-full"></div>
          ))}
        </div>
        
        {/* Pin de ubicación pulsante */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-verde rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-verde rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Texto de carga */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="text-verdeoscuro text-sm font-semibold tracking-wider">CARGANDO</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleMapLoader;

