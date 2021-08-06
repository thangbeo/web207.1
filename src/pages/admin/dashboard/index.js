import React from "react";

export default function dashboard(props) {
  return (
    <>
      <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="row">
          <div align="start" className="col-6">
            <h1 className="h2">Quản lý sản phẩm</h1>
          </div>
          <div className="col-6 pt-10">
            <div className="row">
              <div className="col-4">
                <input label type="text" className="form-control"></input>
              </div>
              <div className="col-4">
                <select className="form-control">
                  {props.category.map((item, index) => (
                    <option key={index} value={item.categoryName}>
                      {item.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <button className="btn btn-primary">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {props.products.map((item, index) => (
            <div key={index} className="col-3">
              <div className="">
                <img
                  width="50%"
                  src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="this is car image"
                />
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
