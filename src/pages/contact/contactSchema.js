import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "name should not contain any number")
    .required("Please provide a name"),
  phone: yup
    .number()
    .typeError("Please provide a valid phone number")
    .min(10)
    .required("Please provide a valid phone number"),
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please provide a email"),
  city: yup
    .string()
    .matches(/^([^0-9]*)$/, "city should not contain any number")
    .required("Please provide a city name"),
  message: yup.string().required("Please provide a message"),
});
