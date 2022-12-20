import * as yup from "yup";

export const courseSchema = yup.object().shape({
  title: yup.string().required("Please provide a title"),
  description: yup.string().required("Please provide a description"),
  tags: yup.string().required("Please provide a tag"),
  price: yup.number().required("Please provide a price"),
  image: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file.length > 0) return true;
      return false;
    })
    .test("fileSize", "The file is too large", (file) => {
      return file && file.size <= 2000000;
    }),
});
