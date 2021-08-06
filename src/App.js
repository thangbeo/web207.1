import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import { add, getAll, remove, edit } from "./api/productAPI";
import { Add, getListCategory, removeCategory } from "./api/categoryAPI";
import "./App.css";
import "./dashboard.css";
import "./divStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import data from "./data";
function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await getAll();
      setProducts(data);
    };
    getProduct();
  }, []);
  //
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getListCategory();
      setCategory(data);
    };
    getCategory();
  }, []);

  const onHandleRemove = (id) => {
    try {
      remove(id); // hàm xóa item
      const newProduct = products.filter((item) => item.id !== id);
      setProducts(newProduct);
    } catch (error) {}
  };

  const onHandleRemoveCategory = (id) => {
    try {
      removeCategory(id); // hàm xóa item
      const newCategory = category.filter((item) => item.id !== id);
      setCategory(newCategory);
    } catch (error) {}
  };

  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {}
  };
  const onHandleAddCategory = async (item) => {
    try {
      const { data } = await Add(item);
      setCategory([...category, data]);
    } catch (error) {
      console.log("demo");
    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      const newProduct = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProduct);
    } catch (error) {}
  };

  return (
    <Routes
      category={category}
      products={products}
      onRemove={onHandleRemove}
      onHandleRemove={onHandleRemoveCategory}
      onAdd={onHandleAdd}
      onAdd={onHandleAddCategory}
      onEdit={onHandleEdit}
    />
  );
}
export default App;
