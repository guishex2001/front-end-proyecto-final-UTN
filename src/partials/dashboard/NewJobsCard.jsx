import React, { useState } from 'react';

function NewJobsCard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [technology, setTechnology] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario a la base de datos o realizar otras acciones necesarias
    console.log('Título:', title);
    console.log('Descripción:', description);
    console.log('Cliente:', client);
    console.log('Tecnología:', technology);
    // Aquí podrías enviar los datos del formulario a la base de datos o realizar otras acciones necesarias
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título del trabajo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
          />
          <textarea
            placeholder="Descripción breve del trabajo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Cliente"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Tecnología"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Agregar Trabajo
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewJobsCard;
