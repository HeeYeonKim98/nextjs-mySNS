import React from "react";
import { Form, Input } from "antd";

const PostForm = ({ text }) => {
  return (
    <Form>
      <Input.TextArea
        value={text}
        maxLength={140}
        placeholder="오늘은 어떤 일이 있었나요?"
      />
    </Form>
  );
};

export default PostForm;
