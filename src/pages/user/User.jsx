import "./user.css";

import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";

const User = () => {
  return (
    <div className="userInfo">
      <div className="userTitleContainer">
        <h1>Edit User</h1>
        <Link to="/new-user">
          <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar
              alt="avatar"
              src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <h5 className="userShowTitle">Account Details</h5>
            <div className="userShowInfo">
              <PermIdentity className="useShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="useShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <h5 className="userShowTitle">Contact Details</h5>
            <div className="userShowInfo">
              <PhoneAndroid className="useShowIcon" />
              <span className="userShowInfoTitle">+1 234 567 890</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="useShowIcon" />
              <span className="userShowInfoTitle">annabeck99@email.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="useShowIcon" />
              <span className="userShowInfoTitle">New Work | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <h3 className="userUpdateTitle">Edit</h3>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-Mail</label>
                <input
                  type="email"
                  placeholder="annabeck99@email.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="New Work | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg"
                  alt="upload avatar"
                  className="uploadImage"
                />
                <input type="file" className="uploadInput" id="upload" />
                <label htmlFor="upload" className="uploadBtn">
                  <h4>Choose image</h4>
                  <Publish className="uploadIcon" />
                </label>
              </div>
              <div className="submitBtn">
                <button className="updateBtn" type="submit">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
