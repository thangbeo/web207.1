import React from "react";
import { Link } from "react-router-dom";
export default function Category(props) {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý danh mục</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/category/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm danh mục
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên danh mục</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.category.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.categoryName}</td>
                <td width="150">
                  <div className="d-flex">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => props.onRemove(item.id)}
                    >
                      Xóa danh mục
                    </button>
                    <Link
                      to={`/category/edit/${item.id}`}
                      className="btn btn-primary ms-1 btn-sm"
                    >
                      cập nhật
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
