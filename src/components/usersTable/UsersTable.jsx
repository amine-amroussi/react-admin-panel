import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@material-ui/core";

import { DeleteOutline } from "@material-ui/icons";

import { userRows } from "../../dammyData";

import { Link } from "react-router-dom";

import "./usersTable.css";

export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="user">
            <Avatar src={params.row.avatar} alt="avatar" />
            <h4>{params.row.username}</h4>
          </div>
        );
      },
    },
    { field: "email", headerName: "E-mail", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="buttons">
            <Link to={`/users/${params.row.id}`}>
              <button className="edit">Edit</button>
            </Link>
            <button
              className="delete"
              onClick={() => deleteUser(params.row.id)}
            >
              <DeleteOutline className="buttonIcon" />
            </button>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState(userRows);

  const deleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}
