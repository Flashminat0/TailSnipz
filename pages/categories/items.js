import React from "react";

const Items = ({ sections }) => {
  return (
    <>
      <div className="mt-1 ml-1 grid   md:gap-3 md:grid-cols-2 lg:grid-cols-2 min-h-full pb-2 pr-1">
        {sections.map((section) => (
          <div key={section.id} className="col-span-1 flex  ">
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
