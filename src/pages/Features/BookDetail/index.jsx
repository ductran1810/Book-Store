import React from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const items = JSON.parse(localStorage.getItem("books") || []);
  const { id } = useParams();
  const item = items.find((book) => book.id.toString() === id);

  return (
    <div className="page-detail">
      <h2 className="book-title">Book Detail</h2>
      <div className="book-view">
        <div className="book-img">
          <img src={item.bookLink} alt="book-img" />
        </div>
        <div className="book-desc">
          <h4>{item.name}</h4>
          <p>
            Price: <span className="book-price">${item.price}</span>
          </p>
          <p>
            ID: <span>{item.id}</span>
          </p>
          <p>
            Category: <span>{item.category}</span>
          </p>
          <p>
            Quantity: <span>{item.quantity}</span>
          </p>
          <p>
            Tags: <span>{item.tags + ""}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
