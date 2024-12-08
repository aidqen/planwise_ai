import { useState } from 'react';

export function ToggleBtn({setNewTask, isOn}) {

  function toggle() {
    setNewTask((task) => ({ ...task, recurrence: { ...task.recurrence, isOn: !isOn } }));
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggle}
        />
        <div
          className={`w-12 h-6  rounded-full transition-colors duration-300 ease-in-out ${
            isOn ? 'bg-blueCrayola' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform ${
              isOn ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

