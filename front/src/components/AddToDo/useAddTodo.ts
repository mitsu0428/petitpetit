import { useFormik } from "formik";
import * as Yup from "yup";

export const useAddTodo = () => {
  const formik = useFormik({
    initialValues: { task: "" },
    validationSchema: Yup.object({
      task: Yup.string()
        .min(3, "3文字以上入力してください")
        .required("タスク名を入力してください"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Add todo with title:", values.task);
      resetForm();
    },
  });

  return { formik };
};
