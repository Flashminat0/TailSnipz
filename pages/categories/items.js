import React from "react";

const Items = ({ sections }) => {
  return (
    <>
      <div>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {sections.map((section) => (
            <li
              key={section.id}
              className="col-span-1 flex shadow-sm rounded-md"
            >
              <div className="flex-1 flex items-center justify-between border bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href={section.href}
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {section.name}
                  </a>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
