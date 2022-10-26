/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import openNotifys from "../../../components/notifys";
import BookForm from "../../../components/modules/BookForm";
function BookAdd() {
  const [bookLink, setBookLink] = useState("");
  const [bookList, setBookList] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  const [tags, setTags] = useState([]);

  const [isNewBook, setIsNewBook] = useState(false);
  const currentBook = {};
  let history = useHistory();

  /**
   * When the user selects a file, read the file as a data URL and set the state of the bookLink to the
   * data URL.
   */
  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setBookLink(fileReader.result);
    };
  };

  /**
   * "handleAdd" is a function that takes in a value, and then creates a new book object with the
   * value, and then adds that new book object to the bookList array.
   */
  const handleAdd = (values) => {
    const index = Math.floor(Math.random() * 100000);
    const newBook = { ...values, bookLink, id: index, key: index, tags };
    const newBookList = [newBook, ...bookList];
    openNotifys("success", "Added Book");
    setBookList(newBookList);
    setIsNewBook(true);
  };

  /**
   * When the user types in the input field, the value of the input field is added to the tags array.
   */
  const handleChangeTags = (newTags) => {
    setTags(newTags);
  };

  /**
   * When the user clicks on the delete button, the tag is removed from the array of tags.
   */
  const handleClickDeleteTag = (index) => {
    const newTags = tags.filter((item, indexItem) => indexItem !== index);
    setTags([...newTags]);
  };

  /* Setting the bookList to localStorage and then going back to the previous page. */
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
    if (isNewBook) {
      history.goBack();
    }
  }, [bookList, isNewBook]);

  return (
    <div>
      <div className="book-add">
        <h1 className="book-title">Book Add</h1>
        <BookForm
          onFinish={handleAdd}
          required={true}
          nameBtn="Add"
          onChange={handleFileChange}
          currentBook={currentBook}
          tags={tags}
          onChangeTag={(newTags) => handleChangeTags(newTags)}
          onClickDeleteTag={(index) => handleClickDeleteTag(index)}
        />
      </div>
    </div>
  );
}

export default BookAdd;
