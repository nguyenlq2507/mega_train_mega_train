import axios from "axios";
import { Product } from "../TypeInterFace";

export const axiosAPI = axios.create({
  baseURL: "https://6322a261362b0d4e7dd01c04.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const listProductAPI = {
  getAll() {
    const url = `test/`;
    return axiosAPI.get(url);
  },
  add(itemProduct: Product) {
    const url = `test/`;
    axiosAPI.post(url, itemProduct);
  },
  delete(id: string) {
    const url = `test/${id}`;
    axiosAPI.delete(url);
  },
  update(id: string, itemProduct: Product) {
    const url = `test/${id}`;
    axiosAPI.put(url, itemProduct);
  },
  search(name: string, itemProduct: Product) {
    const url = `test/${name}`;
    axiosAPI.put(url, itemProduct);
  },
};
