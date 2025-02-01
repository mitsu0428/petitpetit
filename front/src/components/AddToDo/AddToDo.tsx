"use client";

import * as React from "react";
import * as CSS from "./AddToDo.css";
import { useAddTodo } from "./useAddTodo";

export const Components = () => {
  const { formik } = useAddTodo();

  return (
    <div className={CSS.Wrap}>
      <h2>タスクを追加する</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="task"
          value={formik.values.task}
          className={CSS.Input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="追加するpetit"
        />
      </form>
      <button
        type="submit"
        className={CSS.Button}
        onClick={() => formik.handleSubmit()}
        disabled={!formik.isValid}
      >
        追加する
      </button>
      {formik.touched.task && formik.errors.task ? (
        <div style={{ color: "red" }}>{formik.errors.task}</div>
      ) : null}
    </div>
  );
};
