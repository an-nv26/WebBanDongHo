import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";
import { convertDollarsToVnd } from "../../utils/App";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/admin-all-products`, {withCredentials: true}).then((res) => {
        setData(res.data.products);
    })
  }, []);

  const columns = [
    { field: "id", headerName: "Mã sản phẩm", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Tên",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Giá",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Cổ phẩn",
      headerName: "Cổ phẩn",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Bán hết",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Xem trước",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id.slice(item._id.length - 10),
        name: item.name,
        price: convertDollarsToVnd(item.discountPrice) + "vnđ",
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
    </>
  );
};

export default AllProducts;
