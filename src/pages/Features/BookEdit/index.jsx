import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import openNotifys from "../../../components/notifys";
import BookForm from "../../../components/modules/BookForm";

function BookEdit() {
  const [bookUrl, setBookUrl] = useState("");
  const books = JSON.parse(localStorage.getItem("books"));
  const { id } = useParams();
  let history = useHistory();
  const currentBook = books.find((item) => item.id === parseInt(id));
  const [tags, setTags] = useState(currentBook.tags);

  const handleImageChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setBookUrl(fileReader.result);
    };
  };

  const handleUpdate = (values) => {
   
    currentBook.name = values.name;
    currentBook.price = values.price;
    currentBook.category = values.category;
    currentBook.quantity = values.quantity;

    currentBook.bookLink = bookUrl ? bookUrl : currentBook.bookLink;
    currentBook.tags = tags;

    localStorage.setItem("books", JSON.stringify(books));
    openNotifys("success", "Updated Book");
    history.push("/book-management");
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

  return (
    <div className="page-edit">
      <h2 className="book-title">Book Edit</h2>
      <BookForm
        onFinish={handleUpdate}
        nameBtn="Update"
        onChange={handleImageChange}
        currentBook={currentBook}
        formName="edit-form"
        formTitle="edit-title"
        title="Edit"
        tags={tags}
        onChangeTag={(newTags) => handleChangeTags(newTags)}
        onClickDeleteTag={(index) => handleClickDeleteTag(index)}
      />
    </div>
  );
}

export default BookEdit;
