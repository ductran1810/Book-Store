import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import React, { useEffect, useRef, useState } from "react";
const TagsInput = ({ tags, onChangeTag }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    onChangeTag(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      onChangeTag([...tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <div className="tag-item">
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                }}
              >
                <Tag
                  closable
                  onClose={(e) => {
                    e.preventDefault();
                    handleClose(tag);
                  }}
                >
                  {tag}
                </Tag>
              </span>
            );
          })}
        </div>
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};

export default TagsInput;
