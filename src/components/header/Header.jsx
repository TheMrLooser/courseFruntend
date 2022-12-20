import React, { useContext, useEffect } from "react";
import { Container, GlobalStyles, iconStyles } from "../CommonStyles";
import { AccountCircle, Menu, ShoppingCart } from "@mui/icons-material";
import {
  AdminHeading,
  AdminHeadingSection,
  LoginButton,
  Logo,
  LogoSection,
  MenuSection,
  RegisterButton,
  UserSection,
  Wrapper,
} from "./Header.styles";
import Navigation from "../navigation/Navigation";
import { Link, NavLink } from "react-router-dom";
import { Authentication, SidebarContext } from "../../App";
import { GetSingleUser } from "../../API/api";

const Header = ({ user }) => {
  const { setSidebarOpen } = useContext(SidebarContext);
  const {isLoading,isAuthenticated ,setAuthentication,setUser} = useContext(Authentication)
  const win = window.localStorage
  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(()=>{
      const CheckLogin = async()=>{
        const token = win.getItem("token")
        if(token){
          const res = await GetSingleUser(token)
          setUser(res.data.user)
          setAuthentication(true)
        }
        else{
          setAuthentication(false)
        }
      }
      CheckLogin()
  },[])

  return (
    <Container>
      <GlobalStyles />
      <Wrapper>
        {user !== "admin" ? (
          <>
            <LogoSection>
              <MenuSection>
                <Menu sx={iconStyles} onClick={handleSidebar} />
              </MenuSection>
              <Link to="/">
                <Logo src="./assets/logo1.png" alt="logo" />
              </Link>
            </LogoSection>

            <Navigation direction="row" />
          </>
        ) : (
          <AdminHeadingSection>
            <AdminHeading>Dashboard</AdminHeading>
          </AdminHeadingSection>
        )}
        <UserSection>
          
          {(isAuthenticated || isLoading) ? 
            <AccountCircle sx={iconStyles} /> 
            :<>
            <Link to="/login">
            <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/signup">
              <RegisterButton>Register</RegisterButton>
            </Link>
            </>
            }
          <NavLink to="/cart">
            <ShoppingCart sx={iconStyles} />
          </NavLink>
        </UserSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
