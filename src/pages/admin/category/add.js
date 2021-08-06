import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React from "react";

const AddCategoryForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const category = {
      id: Math.random().toString(5).substring(2),
      ...data,
    };
    props.onAdd(category);
    console.log(category);
    setTimeout(() => {
      history.push("/category");
    }, 1000);
  };
  const onClose = () => {
    history.push("/category");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-left  font-weight-bold">Thêm mới danh mục</h4>
      <div className="mb-3 text-left">
        <label className="form-label ">Tên danh mục</label>
        <input
          type="text"
          className="form-control"
          {...register("categoryName", { required: true })}
        />
        {errors.name && (
          <span className="d-block mt-2 text-danger">Field is required</span>
        )}
      </div>

      <div className="d-flex">
        <div>
          <button className="btn btn-primary" type="submit">
            Thêm
          </button>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <button className="btn btn-primary " onClick={onClose} type="button">
            Quay lại
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddCategoryForm;
