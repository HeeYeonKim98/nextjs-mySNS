import React from "react";
import Link from "next/link";

const PostContent = ({ content }) => {
  //! 정규표현식으로 해시태그 분리
  return (
    <div>
      {content.split(/(#[^\s#]+)/g).map((value, index) => {
        if (value.match(/(#[^\s#]+)/)) {
          return (
            <Link key={index} href={`/hashtag/${value.slice(1)}`}>
              <a>{value}</a>
            </Link>
          );
        }
        return value;
      })}
    </div>
  );
};

export default PostContent;
