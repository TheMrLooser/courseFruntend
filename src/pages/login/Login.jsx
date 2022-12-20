import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Auth from "../../components/auth/Auth";
import { loginSchema } from "./validator";
import { Container } from "../../components/CommonStyles";
import {AuthenticateAPI} from "../../API/api";
import { Authentication } from "../../App";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const setContest = useContext(Authentication)
  const navigate = useNavigate()
  const win = window.localStorage
 
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async(d) => {
    setContest.setLoading(true)
    const res = await AuthenticateAPI('login',d)
    setContest.setLoading(false)
    if(res.success){
      setContest.setAuthentication(true)
      setContest.setUser(res.message)
      win.setItem('token',res.token)
      navigate('/')
    }
    
  };

  return (
    <Container> 
      <Auth
        method="login"      
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit} 
        errors={errors}
      />
    </Container>
  );
};

export default Login;
 