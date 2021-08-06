import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../../../api/productAPI";
import { useState } from "react";

const EditProductForm = (props) => {
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await get(id);
      setProduct(data);
      // reset(data);
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    props.onEdit(product);
    setTimeout(() => {
      history.push("/product");
    }, 1000);
  };
  const onClose = () => {
    history.push("/product");
  };
  return (
    <div>
      <h4 className="text-left  font-weight-bold">Cập nhật sản phẩm</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 text-left">
          <label className="form-label ">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={product.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">Field is required</span>
          )}
        </div>
        <div className="mb-3 text-left">
          <label className="form-label">Giá sản phẩm</label>
          <input
            defaultValue={product.price}
            type="number"
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="mb-3 text-left">
          <label className="form-label">Danh mục</label>
          <select
            className="form-control"
            defaultValue={product.status}
            {...register("category")}
          >
            <option value="Danh mục A">Danh mục A</option>
            <option value="Danh mục B">Danh mục B</option>
          </select>
        </div>
        <div className="d-flex">
          <div>
            <button className="btn btn-primary" type="submit">
              Lưu
            </button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <button
              className="btn btn-primary "
              onClick={onClose}
              type="button"
            >
              Quay lại
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditProductForm;
