import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

import { DeleteOutline } from "@material-ui/icons";

import { productRows } from "../../dammyData";

import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="user">
            <img
              src={params.row.image}
              alt="product"
              className="productImage"
            />
            <h4>{params.row.name}</h4>
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="buttons">
            <Link to={`/product/${params.row.id}`}>
              <button className="edit">Edit</button>
            </Link>
            <button
              className="delete"
              onClick={() => deleteProduct(params.row.id)}
            >
              <DeleteOutline className="buttonIcon" />
            </button>
          </div>
        );
      },
    },
  ];

  const deleteProduct = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
