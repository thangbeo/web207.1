import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../api/authAPI";
import { authenticate } from "../../auth";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user) => {
    try {
      const { data } = await signup(user);
      authenticate(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h2>Đăng ký</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Bạn đã đăng ký thành công. Click <Link to="/sigin">vào đây </Link> để
          đăng nhập
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Tên
        </label>
        <input
          type="text"
          className="form-control"
          {...register("username")}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("email", { required: true })}
        ></input>
        {errors.email && (
          <span className="text-danger mt-2 d-block">
            Bắt buộc phải nhập email
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Pass
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        ></input>
        {errors.password && (
          <span className="text-danger mt-2 d-block">
            Bắt buộc phải nhập email
          </span>
        )}
      </div>
      <button className="btn btn-primary">Đăng ký</button>
    </form>
  );
};
export default Signup;
