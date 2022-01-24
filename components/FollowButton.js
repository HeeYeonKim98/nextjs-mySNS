import { Button } from "antd";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const FollowButton = () => {
  const { id } = useSelector((state) => state.User.user);
  const onClickFollow = useCallback(() => {}, []);

  return (
    <>
      <Button onClick={onClickFollow}>팔로우</Button>
    </>
  );
};

export default FollowButton;
