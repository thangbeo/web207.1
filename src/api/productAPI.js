import instance from "./instance";

export const getAll = () => {
  const url = "/products";
  return instance.get(url);
};

// danh sách
export const get = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

// xóa
export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
// thêm
export const add = (item) => {
  const url = `/products`;
  return instance.post(url, item);
};
// sửa
export const edit = (item) => {
  const url = `/products/${item.id}`;
  return instance.put(url, item);
};
