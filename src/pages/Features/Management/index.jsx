import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import openNotifys from "../../../components/notifys";
import BookTable from "../../../components/modules/BookTable";

function Management() {
  const [bookList, setBookList] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  const [search, setSearch] = useState("");

  /* A hook that is used to store the data in the local storage. */
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  /* A function that is used to search for a book by name. */
  const keyNames = ["name"];
  const queryName = (bookList) => {
    return bookList?.filter((item) =>
      keyNames.some((key) =>
        item[key]?.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  /**
   * When the user clicks the delete button, a modal will pop up asking the user if they are sure they
   * want to delete the book. If the user clicks yes, the book will be deleted from the book list and a
   * success notification will be displayed.
   */
  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure to delete this book ?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setBookList((books) => {
          openNotifys("success", "Deleted Book");
          return books.filter((book) => book.id !== id);
        });
      },
    });
  };

  return (
    <>
      <h2 className="book-title">Book Management</h2>
      <div className="manage-books">
        <NavLink to={`/book-management/add`} className="btn-add">
          <BiPlusCircle className="icon-btn-add" />
          Add Book
        </NavLink>
        <Input
          className="input-search"
          placeholder="Search book ..."
          onChange={(e) => setSearch(e.target.value)}
          suffix={<BiSearch className="search-icon" />}
        />
      </div>
      <BookTable
        bookList={bookList}
        handleDelete={handleDelete}
        queryName={queryName}
        onChangeBookList={(newBooks) => setBookList([...newBooks])}
      />
    </>
  );
}

export default Management;
