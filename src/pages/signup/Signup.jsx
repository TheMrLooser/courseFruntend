import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {AuthenticateAPI} from "../../API/api";
import Auth from "../../components/auth/Auth";
import { Container } from "../../components/CommonStyles";
import { signupSchema } from "./signupSchema";
import { Authentication } from "../../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(signupSchema) });

  const setContest = useContext(Authentication)
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    setContest.setLoading(true)
    const res = await AuthenticateAPI("register",data)
    setContest.setLoading(false)
    if(res.success){
      setContest.setAuthentication(true)
      setContest.setUser(res.message)
      navigate('/login')
    }
    reset();
  };

  return (
    <Container>
      <Auth
        method="signup"
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </Container>
  );
};

export default Signup;
 