import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import TagsInput from "../TagsInput";
function BookForm({
  currentBook,
  nameBtn,
  formName,
  onFinish,
  onChange,
  tags,
  onChangeTag,
}) {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
        className={formName}
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={currentBook.name}
          rules={[
            {
              required: true,
              message: "Please enter book name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {nameBtn === "Add" && (
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="input-file" type="file" onChange={onChange} />
          </Form.Item>
        )}
        {nameBtn === "Update" && (
          <Form.Item label="Image" name="image">
            <Input className="input-file" type="file" onChange={onChange} />
          </Form.Item>
        )}
        <Form.Item
          label="Price"
          name="price"
          initialValue={currentBook.price}
          rules={[
            {
              required: true,
              message: "Please enter book price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          initialValue={currentBook.category}
          rules={[
            {
              required: true,
              message: "Please select book category",
            },
          ]}
        >
          <Select>
            <Select.Option value="Fantasy & Science fiction">
              Fantasy & Science fiction
            </Select.Option>
            <Select.Option value="Thrillers & Horror">
              Thrillers & Horror
            </Select.Option>
            <Select.Option value="Self-help">Self-help</Select.Option>
            <Select.Option value="Short Stories">Short Stories</Select.Option>
            <Select.Option value="Cookbooks">Cookbooks</Select.Option>
            <Select.Option value="History">History</Select.Option>
            <Select.Option value="Romance">Romance</Select.Option>
            <Select.Option value="Essays">Essays</Select.Option>
            <Select.Option value="Mystery">Mystery</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          initialValue={currentBook.quantity}
          rules={[
            {
              required: true,
              message: "Please enter book quantity",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        {(nameBtn === "Add" || nameBtn === "Update") && (
          <Form.Item label="Tags" name="tags" initialValue={currentBook.tags}>
            <TagsInput
              tags={tags}
              onChangeTag={onChangeTag}
            />
          </Form.Item>
        )}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {nameBtn}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default BookForm;
