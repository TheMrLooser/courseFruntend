import { Menu } from "@mui/icons-material";
import React, { useContext } from "react";
import { SidebarContext } from "../../App";
import { iconStyles } from "../CommonStyles";
import Navigation from "../navigation/Navigation";
import { MenuSection, MenuWrap, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const { setSidebarOpen } = useContext(SidebarContext);

  const handleSiderbar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <MenuWrap>
        <MenuSection>
          <Menu sx={iconStyles} onClick={handleSiderbar} />
        </MenuSection>
        <Navigation direction="column" visible="visible" />
      </MenuWrap>
    </Wrapper>
  );
};

export default Sidebar;
