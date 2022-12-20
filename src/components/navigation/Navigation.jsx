import {
  Contacts,
  Home,
  HomeRepairService,
  Info,
  Inventory,
} from "@mui/icons-material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import React from "react";
import { NavLink } from "react-router-dom";
import { LinkSection, NavigationSection } from "./Navigation.styles";

const Navigation = ({ direction, visible }) => {
  return ( 
    <NavigationSection direction={direction} visible={visible}>
      <NavLink to={"/"}>
        <LinkSection>
          <Home />
          Home
        </LinkSection>
      </NavLink>
      <NavLink to={"/my-courses"}>
        <LinkSection>
          <BusinessCenterIcon /> 
          My Courses
        </LinkSection>
      </NavLink>
      <NavLink to={"/products"}>
        <LinkSection>
          <Inventory />
          Products
        </LinkSection>
      </NavLink>
      <NavLink to={"/services"}>
        <LinkSection>
          <HomeRepairService />
          Services
        </LinkSection>
      </NavLink>
      <NavLink to={"/about"}>
        <LinkSection>
          <Info />
          About
        </LinkSection>
      </NavLink>
      <NavLink to={"/contactus"}>
        <LinkSection>
          <Contacts />
          Contact us
        </LinkSection>
      </NavLink>
    </NavigationSection>
  );
};

export default Navigation;
