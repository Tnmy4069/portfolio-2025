import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  const underlineClasses = active
    ? "w-full"
    : "w-0 transition-all duration-300 ease-in-out";

  return (
    <button onClick={selectTab} className="group">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <div
        className={`h-1 bg-primary-500 mt-2 mr-3 ${underlineClasses}`}
      ></div>
    </button>
  );
};

export default TabButton;
