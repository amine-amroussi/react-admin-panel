import "./product.css";
import { Link } from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import { productData } from "../../dammyData";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/new-product">
          <button className="createProductBtn">Create Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://phonesdata.com/files/models/Samsung--Galaxy-A21s-180.jpg"
              alt="phone"
              className="productInfoImage"
            />
            <span className="productName">Samsung Galaxy A21 S</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <spna className="productInfoKey">id : </spna>
              <spna className="productInfoValue"> 123 </spna>
            </div>
            <div className="productInfoItem">
              <spna className="productInfoKey">sales : </spna>
              <spna className="productInfoValue"> 1203 </spna>
            </div>
            <div className="productInfoItem">
              <spna className="productInfoKey">active : </spna>
              <spna className="productInfoValue"> Yes </spna>
            </div>
            <div className="productInfoItem">
              <spna className="productInfoKey">in stock : </spna>
              <spna className="productInfoValue"> No </spna>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productInfos">
            <div className="productFormLeft">
              <TextField
                id="filled-helperText"
                label="Name"
                defaultValue="Samsung Galaxy A21 S"
                variant="filled"
                className="input"
              />
              <TextField
                id="filled-helperText"
                label="Stock"
                defaultValue="215"
                variant="filled"
                className="input"
              />
              <TextField
                id="filled-helperText"
                label="Price"
                defaultValue="$215"
                variant="filled"
                className="input"
              />
              <div className="productSelects">
                <div className="selectItem">
                  <label>Active</label>
                  <Select
                    value="Yes"
                    label="Active"
                    id="active"
                    className="fromSelect"
                    defaultValue="Active"
                    className="input select"
                  >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </div>
                <div className="selectItem">
                  <label>In Stock</label>
                  <Select
                    value="No"
                    label="inStock"
                    id="instock"
                    className="fromSelect"
                    defaultValue="Active"
                    className="input select"
                  >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="productFormRight">
              <img
                src="https://phonesdata.com/files/models/Samsung--Galaxy-A21s-180.jpg"
                alt="product"
                className="ProdImage"
              />
              <input type="file" className="uploadInput" id="upload" />
              <label htmlFor="upload" className="uploadBtn">
                <h4>Choose image</h4>
                <Publish className="uploadIcon" />
              </label>
            </div>
          </div>
          <button type="submit" className="updateProduct">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
