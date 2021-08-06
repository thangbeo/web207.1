import instance from "./instance";

export const getListCategory = () => {
  const url = "/category";
  return instance.get(url);
};
// xóa
export const removeCategory = (id) => {
  const url = `/category/${id}`;
  return instance.delete(url);
};
// thêm
export const Add = (item) => {
  const url = `/category`;
  return instance.post(url, item);
};
// sửa
export const Edit = (item) => {
  const url = `/category/${item.id}`;
  return instance.put(url, item);
};
