import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';

function PortfolioCard() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon o imagen representativa del trabajo */}
          {/* <img src={WorkImage} width="32" height="32" alt="Work Example" /> */}
          {/* Botón de menú para opciones de edición */}
          <div className="ml-auto">
            <EditMenu align="right" className="relative inline-flex">
              <li>
                <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                  Editar
                </Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                  Eliminar
                </Link>
              </li>
            </EditMenu>
          </div>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Título del trabajo</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Descripción breve del trabajo</div>
        <div className="flex items-start">
          {/* Puedes colocar detalles como el cliente, la tecnología utilizada, etc. */}
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100 mr-2">Cliente: Acme Inc.</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100 mr-2">Tecnología: React, Node.js</div>
        </div>
      </div>
      {/* Aquí podrías colocar una imagen representativa del trabajo */}
      {/* <img src={WorkImage} alt="Work Example" className="w-full h-auto" /> */}
    </div>
  );
}

export default PortfolioCard;
