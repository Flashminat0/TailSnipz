import { DotsVerticalIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Graph API",
  
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
  
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",

    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
   
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Items = () => {
  return (
    <>
      <div>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <li
              key={project.name}
              className="col-span-1 flex shadow-sm rounded-md"
            >
              <div className="flex-1 flex items-center justify-between border bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href={project.href}
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-500">{project.members} Members</p>
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
