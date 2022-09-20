import "./ListProduct.css";
import { Product } from "../TypeInterFace";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './ListProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  list: Product[];
  onDelete: (id: string) => void;
  onEdit: (itemProduct: Product) => void;
}

export const ListProduct: React.FC<Props> = ({ list, onDelete, onEdit }) => {
  return (
    // <div className="ant-list-items">
    //   <div className="ant-list-item">
    //     {list.map((item, index) => (
    //       <div className="ant-list-item-meta" key={index}>
    //         {/* <div className="ant-list-item-meta-avatar">
    //           <span className="ant-image-img">
    //             <img src={item.price} style={{ width: 100 }} />
    //           </span>
    //         </div> */}
    //         <div className="ant-list-item-meta-content">
    //           <h4 className="ant-list-item-meta-title">
    //             <a>{item.name}</a>
    //           </h4>
    //           {/* <div className="ant-list-item-meta-description">
    //             {item.content}
    //           </div> */}
    //         </div>
    //         <div className="ant-list-item-meta-content">
    //           <h4 className="ant-list-item-meta-title">{item.content}</h4>
    //         </div>
    //         <div className="ant-list-item-meta-content">
    //           <h4 className="ant-list-item-meta-title">{item.price}</h4>
    //         </div>
    //         <ul className="ant-list-item-action">
    //           <li>
    //             <a onClick={() => onEdit(item)}>Edit</a>
    //           </li>
    //           <li>
    //             <a onClick={() => onDelete(item.id)}>Remove</a>
    //           </li>
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Content</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.content}</td>
              <td>{item.price}</td>
              <td>
                <Button className="ant-btn ant-btn-warning ant-btn-warning" variant="warning" onClick={() => onEdit(item)}>
                  Edit
                </Button>
                <Button
                  className="mg-l ant-btn ant-btn-primary ant-btn-dangerous"
                  variant="danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
