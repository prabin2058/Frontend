import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';


const App: React.FC = () => {
  return (
    <div className='bg-blue-600'>
      <div className='flex flex-row gap-4 '>
        <h1 className='text-white text-9xl font-bold px-5'>Frontend <br /> Assessment</h1>
        <Task2 />
      </div>
      <div className="flex gap-2 mt-4">
      
        <div className="flex-1">
          <Task3 />
        </div>
        <div className="flex-1">
          <Task1 />
        </div>
      </div>
    </div>
  );
};

export default App;
