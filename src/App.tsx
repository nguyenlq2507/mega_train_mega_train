import React, { useState, useEffect } from "react";
import { Modal } from "antd";

import { listProductAPI } from "./components/Services/API";

import { ListProduct } from "./components/ListProduct";
import { AddProductForm } from "./components/AddProductForm";

import "antd/dist/antd.css";
import "./App.css";
import { Product } from "./components/TypeInterFace";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product | null>(null);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const getAllProduct = async () => {
      const { data } = await listProductAPI.getAll();
      setListProduct(data);
    };
    getAllProduct();
  }, []);

  const handleAdd = async (itemProduct: Product) => {
    handleClose();
    try {
      await listProductAPI.add(itemProduct);
      setListProduct([...listProduct, itemProduct]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await listProductAPI.delete(id);
      const list = listProduct.filter((product: Product) => product.id !== id);
      setListProduct(list);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (itemProduct: Product) => {
    setNewProduct(itemProduct);
    setIsModalVisible(true);
  };

  const handleUpdate = async (itemProduct: Product) => {
    const list = listProduct.map((product) => {
      if (product.id === itemProduct.id) {
        return {
          ...itemProduct,
        };
      }
      return product;
    });
    handleClose();
    try {
      await listProductAPI.update(itemProduct.id, itemProduct);
      setListProduct(list);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="App">
      <h2>List product</h2>
      <div className="header-add-user">
        <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
          Add New Product
        </button>
      </div>
      <ListProduct
        list={listProduct}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Modal
        title="Add Product"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <AddProductForm
          newProduct={newProduct}
          onAdd={handleAdd}
          onClose={handleClose}
          onUpdate={handleUpdate}
        />
      </Modal>
    </div>
  );
}

export default App;
