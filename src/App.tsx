import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import logo from './assets/logo.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0033B3] flex flex-col items-center py-4 sm:py-8 px-1 sm:px-2 md:px-4">
      {/* Heading and Logo */}
      <div className="w-full max-w-5xl flex flex-col items-start sm:items-center mb-6 sm:mb-10 px-2 sm:px-0">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 text-left sm:text-center">
          Frontend<br className="hidden sm:block" />Assessment
        </h1>
        <div className="flex items-center mt-2 sm:mt-4 md:mt-6">
          {/* Replace with your logo if available */}
          
          <img src={logo} alt="" />
        </div>
      </div>
      {/* Cards stacked vertically */}
      <div className="w-full max-w-5xl flex flex-col gap-4 sm:gap-6 md:gap-8 items-center">
        <div className="bg-white rounded-3xl shadow-lg p-2 sm:p-4 md:p-6 w-full flex justify-center">
          <Task2 />
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-2 sm:p-4 md:p-6 w-full flex justify-center">
          <Task3 />
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-2 sm:p-4 md:p-6 w-full flex justify-center">
          <Task1 />
        </div>
      </div>
    </div>
  );
};

export default App;
