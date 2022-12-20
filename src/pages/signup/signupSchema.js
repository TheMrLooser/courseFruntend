import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "name should not contain any number")
    .required("Please provide a name"),
  phone: yup
    .number()
    .typeError("Please provide a valid phone number")
    .min(10)
    .required("Please provide a valid phone number"),
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup.string().min(8).required("Please provide a valid password"),
});
