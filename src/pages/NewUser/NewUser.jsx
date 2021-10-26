import "./newUser.css";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john123"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Miloud Pilariss"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="mimoun@gmail.com"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Adress</label>
          <input
            type="text"
            placeholder="New York | USA"
            className="userUpdateInput"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <Select
            value="hello"
            label="active"
            id="active"
            className="fromSelect"
          >
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </div>
        <button type="submit" className="submitBtn">
          Create user
        </button>
      </form>
    </div>
  );
};

export default NewUser;
