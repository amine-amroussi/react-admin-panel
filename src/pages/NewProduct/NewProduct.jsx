import { Publish } from "@material-ui/icons";
import { TextField, Select, MenuItem } from "@material-ui/core";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductTop">
          <h3 className="subTitle">Image</h3>
          <input type="file" className="uploadInput" id="upload" />
          <label htmlFor="upload" className="uploadBtn">
            <h4>Choose image</h4>
            <Publish className="uploadIcon" />
          </label>
        </div>
        <div className="newProductBottom">
          <h3 className="subTitle">Image</h3>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="number"
          />
          <Select label="Active" value="Yes">
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
