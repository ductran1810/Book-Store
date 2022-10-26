import React from "react";
import { useSelector } from "react-redux";

function Account() {

  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);

  return (
    <div className="account-page">
      <div className="user-info">
        <img
          className="user-img"
          src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
          alt="user-avatar"
        />
        <h5>{email}</h5>
        <br />
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default Account;
