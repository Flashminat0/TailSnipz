import React, {useRef, useState} from "react";
import {Menu, Transition} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const catWomen = [
  {
    id: 1,
    name: "See All",
    childs: [],
  },

  {
    id: 2,
    name: "Clothes",
    childs: ["item2", "item8"],
  },

  {
    id: 3,
    name: "Shoes",
    childs: ["item3", "item7"],
  },

  {
    id: 4,
    name: "Bags",
    childs: ["item4", "item6"],
  },

  {
    id: 5,
    name: "Accessories",
    childs: ["item5", "item2"],
  },

  {
    id: 6,
    name: "Beauty",
    childs: ["item6", "item4"],
  },
];

const catMen = [
  {
    id: 1,
    name: "See All",
    childs: [],
  },

  {
    id: 2,
    name: "Clothes",
    childs: ["item2", "item8"],
  },

  {
    id: 3,
    name: "Shoes",
    childs: ["item3", "item7"],
  },

  {
    id: 4,
    name: "Bags",
    childs: ["item4", "item6"],
  },

  {
    id: 5,
    name: "Accessories",
    childs: ["item5", "item2"],
  },

  {
    id: 6,
    name: "Grooming",
    childs: ["item6", "item4"],
  },
];

const catKids = [
  {
    id: 1,
    name: "See All",
    childs: [],
  },

  {
    id: 2,
    name: "Clothes",
    childs: ["item2", "item8"],
  },

  {
    id: 3,
    name: "Shoes",
    childs: ["item3", "item7"],
  },

  {
    id: 4,
    name: "Bags",
    childs: ["item4", "item6"],
  },

  {
    id: 5,
    name: "Accessories",
    childs: ["item5", "item2"],
  },

  {
    id: 6,
    name: "Grooming",
    childs: ["item6", "item4"],
  },
];

const Categories = () => {
  // const navigate = useNavigate();

  function SubCategories(props) {
    return (
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top absolute w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1 flex">{props.children}</div>
        </Menu.Items>
      </Transition>
    );
  }

  function DropDownItem(props) {
    const items = props.data.map((item) => (
      <Menu.Item key={item.id.toString()}>
        {({ active }) => (
          <div
            onMouseOver={() => setChild(item.id)}
            onClick={() => {
              item.id === 1;

              {
                /** 
                ? navigate(`/allproducts?mainProductCategory=${props.parent}`)
                : navigate(
                    `/allproducts?mainProductCategory=${props.parent}&category=${item.name}`
                  );
*/
              }
            }}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "grid grid-cols-8 block px-4 py-2 text-xs"
            )}
          >
            <div className="col-span-7">{item.name}</div>
            <div className="col-span-1">{item.icon}</div>
          </div>
        )}
      </Menu.Item>
    ));
    return (
      <>
        <div className="border-r border-gray-300 w-40 text-sm">{items}</div>
      </>
    );
  }

  const [child, setChild] = useState(1);

  function LoadChilds(props) {
    const childs = props.data[props.child - 1];
    const subItems = childs.childs.map((item) => (
      <Menu.Item key={item.toString()}>
        {({ active }) => (
          <div
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {item}
          </div>
        )}

        {/**  onClick={() => navigate(`/allproducts?mainProductCategory=${props.parent}&category=${childs.name}&subCategory=${item}`)} */}
      </Menu.Item>
    ));
    return <div className="w-56">{subItems}</div>;
  }

  const dropdownRef = useRef();

  return (
    <row className="bg-white w-full" style={{ position: "fixed", border: 0 }}>
      <div offset={2}>
        <div className="flex w-full gap-6 text-sm cursor-pointer mt-0.5">
          <Menu as="div">
            <div
              className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
              // onClick={() => navigate(`/allproducts`)}
            >
              <p>Shop</p>
            </div>
          </Menu>

          <Menu as="div">
            <Menu.Button
              className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
            >
              <p>Women</p>
            </Menu.Button>
            <div ref={dropdownRef}>
              <SubCategories>
                <DropDownItem data={catWomen} parent="Women" />
                <LoadChilds child={child} data={catWomen} parent="Women" />
              </SubCategories>
            </div>
          </Menu>

          <Menu as="div">
            <Menu.Button
              className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
            >
              <p>Men</p>
            </Menu.Button>
            <div ref={dropdownRef}>
              <SubCategories>
                <DropDownItem data={catMen} parent="Men" />
                <LoadChilds child={child} data={catMen} parent="Men" />
              </SubCategories>
            </div>
          </Menu>

          <Menu as="div">
            <Menu.Button
              className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
            >
              <p>Kids</p>
            </Menu.Button>
            <div ref={dropdownRef}>
              <SubCategories>
                <DropDownItem data={catKids} parent="Kids" />
                <LoadChilds child={child} data={catKids} parent="Kids" />
              </SubCategories>
            </div>
          </Menu>

          <Menu as="div">
            <div
              className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
            >
              <p>About</p>
            </div>
          </Menu>
        </div>
      </div>
    </row>
  );
};

export default Categories;
