import React from 'react';

function ProfileCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
      {/* Importa los estilos de Devicons */}
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <div className="flex justify-start items-center mb-4">
        {/* Utiliza la imagen proporcionada */}
        <img 
          src="https://codecat.site/wp-content/uploads/2024/05/Diseno-sin-titulo-12.png" 
          alt="Profile" 
          className="profile-img border border-gray-400 w-24 h-24 mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Guille García</h2>
          <p className="text-sm text-gray-600">Apasionado de la tecnología | Amante de la música | Gamer | Ajedrecista | Desarrollador Fullstack</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {/* Agrega enlaces a tus redes sociales */}
        <a href="url_de_tu_perfil_de_LinkedIn" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="url_de_tu_cv" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-devicon-plain"></i>
        </a>
        <a href="url_de_tu_perfil_de_GitHub" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-github-plain"></i>
        </a>
      </div>
      <p className="text-xs text-gray-600 text-center mt-2">LinkedIn | CV | GitHub</p>
    </div>
  );
}

export default ProfileCard;
