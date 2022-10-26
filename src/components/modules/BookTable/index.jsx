import { Space, Table } from "antd";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

function BookTable({ bookList, handleDelete, queryName }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "bookLink",
      className: "book-img",
      key: "image",
      render: (bookLink) => <img src={bookLink} alt="book-img" />,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => <span>${text}</span>,
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        {
          text: " Fantasy & Science fiction",
          value: " Fantasy & Science fiction",
        },
        {
          text: "Thrillers & Horror",
          value: "Thrillers & Horror",
        },
        {
          text: "Self-help",
          value: "Self-help",
        },
        {
          text: "Short Stories",
          value: "Short Stories",
        },
        {
          text: "Cookbooks",
          value: "Cookbooks",
        },
        {
          text: "History",
          value: "History",
        },
        {
          text: "Romance",
          value: "Romance",
        },
        {
          text: "Essays",
          value: "Essays",
        },
        {
          text: "Mystery",
          value: "Mystery",
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Tags",
      key: "tags",
      render: (record) => {
        return record.tags.map((tag) => (
          <span className="tag-item" key={tag}>
            <span className="ant-tag">{tag}</span>
          </span>
        ));
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <NavLink to={`/book-management/${record.id}`}>
              <GrView title="View" className="view-btn action-btn" />
            </NavLink>
            <NavLink to={`/book-management/${record.id}/edit`}>
              <AiFillEdit title="Edit" className="edit-btn action-btn" />
            </NavLink>
            <MdDelete
              title="Delete"
              className="delete-btn action-btn"
              onClick={() => handleDelete(record.id)}
            />
          </Space>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log(pagination, filters, sorter, extra);
  }

  return (
    <>
      <Table
        columns={columns}
        onChange={onChange}
        dataSource={queryName(bookList)}
        pagination={{ defaultPageSize: 5 }}
      />
    </>
  );
}

export default BookTable;
