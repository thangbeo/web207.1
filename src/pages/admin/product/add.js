import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React from "react";

const AddProductForm2 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const product = {
      id: Math.random().toString(5).substring(2),
      ...data,
    };
    props.onAdd(product);
    setTimeout(() => {
      history.push("/product");
    }, 1000);
  };
  const onClose = () => {
    history.push("/product");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-left  font-weight-bold">Thêm mới sản phẩm</h4>
      <div className="mb-3 text-left">
        <label className="form-label ">Tên sản phẩm</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="d-block mt-2 text-danger">Field is required</span>
        )}
      </div>
      <div className="mb-3 text-left">
        <label className="form-label">Giá sản phẩm</label>
        <input type="number" className="form-control" {...register("price")} />
      </div>
      <div className="mb-3 text-left">
        <label className="form-label">Danh mục</label>
        <select className="form-control" {...register("category")}>
          <option value="Danh mục A">Danh mục A</option>
          <option value="Danh mục B">Danh mục B</option>
        </select>
      </div>
      <div></div>
      <div className="d-flex">
        <div>
          <button className="btn btn-primary" type="submit">
            Thêm sản phẩm
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
export default AddProductForm2;
