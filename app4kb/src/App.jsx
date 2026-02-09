import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-semibold text-slate-800 text-center">
          Crear cuenta
        </h1>
        <p className="text-slate-500 text-center mt-2 mb-8">
          Accede a la plataforma corporativa
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Correo corporativo
            </label>
            <input
              type="email"
              placeholder="correo@empresa.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium
            hover:bg-indigo-700 transition"
          >
            Crear cuenta
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6">
          © 2026 KB Corporation
        </p>
      </div>
    </div>
  )
}

export default App

