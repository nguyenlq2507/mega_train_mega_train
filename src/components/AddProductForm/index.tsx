import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../TypeInterFace";

interface Props {
  newProduct: Product | null;
  onAdd: (itemProduct: Product) => void;
  onUpdate: (itemProduct: Product) => void;
  onClose: () => void;
}

export const AddProductForm: React.FC<Props> = ({
  newProduct,
  onAdd,
  onUpdate,
  onClose,
}) => {
  const [inputPrice, setInputPrice] = useState(newProduct?.price || "");
  const [inputName, setInputName] = useState(newProduct?.name || "");
  const [inputContent, setInputContent] = useState(newProduct?.content || "");

  const handleSubmit = () => {
    if (newProduct && onUpdate) {
      onUpdate({
        id: newProduct.id,
        name: inputName,
        content: inputContent,
        price: inputPrice,
      });
    } else if (onAdd) {
      onAdd({
        id: uuidv4(),
        name: inputName,
        content: inputContent,
        price: inputPrice,
      });
    }
  };

  return (
    <div>
      <div className="field-input-group">
        <input
          placeholder="Product name"
          type="text"
          className="ant-input"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
      <div className="field-input-group">
        <input
          placeholder="Product description"
          type="text"
          className="ant-input"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
      </div>
      <div className="field-input-group">
        <input
          placeholder="Price"
          type="text"
          className="ant-input"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
      </div>
      <div className="modal-new-user-footer">
        <button className="ant-btn ant-btn-primary" onClick={handleSubmit}>
          Save
        </button>
        <button
          className="ant-btn"
          style={{ marginLeft: 10 }}
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
