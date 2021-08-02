import React from "react";
import { List, Comment, Avatar, Card, Divider } from "antd";

const CommentList = ({ post }) => (
  <Card>
    <List
      header={`${post.Comments.length}개의 댓글`}
      itemLayout="horizontal"
      dataSource={post.Comments}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.User.name}
            avatar={<Avatar>{item.User.name[0]}</Avatar>}
            content={item.content}
            datetime={item.date}
          />
          <Divider />
        </li>
      )}
    />
  </Card>
);

export default CommentList;
