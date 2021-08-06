import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../../../api/productAPI";
import { useState } from "react";

const DetailProductForm = (props) => {
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
      console.log(data);
      // reset(data);
    };
    getProduct();
  }, []);

  const onClose = () => {
    history.push("/product");
  };
  return (
    <div>
      <h4 className="text-left  font-weight-bold">Chi tiết sản phẩm</h4>

      <div className="mb-3 text-left">
        <label className="form-label ">Tên sản phẩm : {product.name}</label>
      </div>
      <div className="mb-3 text-left">
        <label className="form-label">Giá sản phẩm {product.price}</label>
      </div>
      <div className="mb-3 text-left">
        <label className="form-label">Danh mục: {product.category}</label>
      </div>
      <div className="col-12">
        <div align="end">
          <button className="btn btn-primary " onClick={onClose} type="button">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailProductForm;
