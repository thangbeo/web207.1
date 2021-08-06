import React from "react";
import { Link } from "react-router-dom";
export default function Product(props) {
  console.log(props);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/product/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá tiền</th>
              <th scope="col">Danh mục</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td width="300">
                  <div className="d-flex">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => props.onRemove(item.id)}
                    >
                      Xóa sản phẩm
                    </button>
                    <Link
                      to={`/product/edit/${item.id}`}
                      className="btn btn-primary ms-1 btn-sm"
                    >
                      cập nhật
                    </Link>
                    <Link
                      to={`/product/detail/${item.id}`}
                      className="btn btn-primary ms-1 btn-sm"
                    >
                      Chi tiết
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
