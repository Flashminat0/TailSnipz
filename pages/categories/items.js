import React from "react";

const Items = ({ sections }) => {
  return (
    <>
    
        <div
          className="mt-1 ml-1 grid grid-cols-1 gap-1 sm:gap-3 sm:grid-cols-2 lg:grid-cols-2 min-h-full pb-2"
        >
          {sections.map((section) => (
            <div
              key={section.id}
              className="col-span-1 flex shadow-sm "
            >
              <div className="flex-1 flex items-center justify-between  bg-white  truncate">
                <div className="flex-1 px-4 py-1 text-sm truncate">
                  <a
                    href={section.href}
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {section.name}
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
};

export default Items;
