import { HomeIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import PurchaseHistoryWrapper from "../../components/layouts/PurchaseHistoryWrapper";
import SettingsSideBarWrapper from "../../components/layouts/SettingsSideBarWrapper";
import Buyer from "./buyer";
import Seller from "./seller";

const home = () => {
  const navigation = [
    {
      id: "293c5d22-5953-4cdc-8d77-1eff20d909e4",
      name: "Buy items",
      href: "",
      component: <Buyer />,
      icon: HomeIcon,
      current: false,
    },
    {
      id: "a438d4ea-1703-4253-aff6-b289c4297cb8",
      name: "Sell items",
      href: "",
      component: <Seller />,
      icon: HomeIcon,
      current: false,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarElement, setSidebarElement] = useState(navigation[0].component);
  const [selectedItem, setSelectedItem] = useState(0);
  const [arrayElements, setArrayElements] = useState(navigation);
  const [pageTitle, setPageTitle] = useState("Purchase History");

  return (
    <div className={"bg-gray-100"}>
      <PurchaseHistoryWrapper
        arrayElements={arrayElements}
        sidebarOpen={sidebarOpen}
        sidebarElement={sidebarElement}
        selectedItem={selectedItem}
        setSidebarOpen={setSidebarOpen}
        setSidebarElement={setSidebarElement}
        setSelectedItem={setSelectedItem}
        pageTitle={pageTitle}
      >
        {sidebarElement}
      </PurchaseHistoryWrapper>
    </div>
  );
};

export default home;
