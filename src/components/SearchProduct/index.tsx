import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Product } from "../TypeInterFace";

interface Props {
  list: Product[];
  onSearch: (itemProduct: Product) => void;
}
const defaultProps: Product[] = [];

export const SearchProduct: React.FC<Props> = ({ list, onSearch }) => {
  const [product, setProducts]: [Product[], (list: Product[]) => void] =
    React.useState(defaultProps);
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const filter = product.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <div className="col-4 motdong">
    //   <InputGroup>
    //     <FormControl
    //       placeholder="Search"
    //       aria-label="Search"
    //       aria-describedby="basic-addon2"
    //     />
    //     <Button
    //       variant="outline-secondary"
    //       id="button-addon2"
    //       //   onClick={() => onSearch(item.name)}
    //     >
    //       Search
    //     </Button>
    //   </InputGroup>
    // </div>
    <div className="F">
      <ul className="list">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {product.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
