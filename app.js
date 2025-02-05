import React from 'react';
import { BookOpen } from 'lucide-react';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">José Esquina</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <img 
              src="/api/placeholder/150/150"
              alt="José Esquina"
              className="mx-auto rounded-full mb-8"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              José Esquina
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ingeniero Agrónomo | Especialista en Investigación | Data Analyst
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sobre Mí
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Soy un Ingeniero Agrónomo con especialización en Investigación Agrícola, 
              que combina la pasión por la agricultura con un fuerte enfoque en tecnología 
              y análisis de datos. Mi experiencia única fusiona el conocimiento profundo 
              del sector agrícola con habilidades avanzadas en análisis de datos y 
              herramientas tecnológicas. Como productor independiente de café y 
              especialista en investigación, aplico métodos científicos y tecnológicos 
              para optimizar la producción agrícola y el desarrollo sostenible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="mr-2" />
              Habilidades Técnicas
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="w-32 font-bold text-gray-800">Data Analysis:</span>
                <span className="text-gray-600">Power BI, Excel Avanzado, R</span>
              </div>
              <div className="flex items-start">
                <span className="w-32 font-bold text-gray-800">GIS:</span>
                <span className="text-gray-600">ArcGIS, QGIS</span>
              </div>
              <div className="flex items-start">
                <span className="w-32 font-bold text-gray-800">Estadística:</span>
                <span className="text-gray-600">Diseño experimental, Análisis multivariado</span>
              </div>
              <div className="flex items-start">
                <span className="w-32 font-bold text-gray-800">Agricultura:</span>
                <span className="text-gray-600">Hidroponía, Agricultura protegida</span>
              </div>
              <div className="flex items-start">
                <span className="w-32 font-bold text-gray-800">Investigación:</span>
                <span className="text-gray-600">Metodología científica, Análisis de datos agrícolas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} José Esquina
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
