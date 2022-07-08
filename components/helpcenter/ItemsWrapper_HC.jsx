import React, { useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";

const ItemsWrapper_HC = () => {
  const [sidebarClickedItem, setSidebarClickedItem] = useState(<Home />);
  const [subItemSidebar, setSubItemSidebar] = useState();

  return (
    <div className="flex w-full">
      <div className="hidden md:block min-w-fit">
        <Sidebar
          sidebarClickedItem={sidebarClickedItem}
          setSidebarClickedItem={setSidebarClickedItem}
          subItemSidebar={subItemSidebar}
        />
      </div>

      <div className="w-full">{sidebarClickedItem}</div>
    </div>
  );
};

export default ItemsWrapper_HC;
