import React from "react";
import Link from "next/link";

const PostContent = ({ content }) => (
  //! 정규표현식으로 해시태그 분리
  <div>
    {content.split(/(#[^\s#]+)/g).map((value, index) => {
      if (value.match(/(#[^\s#]+)/)) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Link key={index} href={`/hashtag/${value.slice(1)}`}>
            <a>{value}</a>
          </Link>
        );
      }
      return value;
    })}
  </div>
);
export default PostContent;
