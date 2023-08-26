import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center sm:flex-wrap items-center flex-col h-screen p-4 relative bg-slate-100">
      <h1 className="text-4xl">My simple projects built with react.</h1>
      <div className="flex flex-wrap gap-5 mt-10">
        <Link
          to="/todo"
          className="bg-white p-4 w-96 rounded drop-shadow-md cursor-pointer hover:scale-105 hover:-translate-y-4 transition-all duration-500"
        >
          <h3 className="text-2xl">Todo list app</h3>
          <p className="mt-2">Todo list app for your life.</p>
        </Link>
        <Link
          to="/weather"
          className="bg-white p-4 w-96 rounded drop-shadow-md cursor-pointer hover:scale-105 hover:-translate-y-4 transition-all duration-500"
        >
          <h3 className="text-2xl">Weather App</h3>
          <p className="mt-2">Find your city for to know your weather</p>
        </Link>
      </div>

      <footer className="absolute bottom-0">Built with ❤️. Made by Human</footer>
    </div>
  );
}

export default Home;
