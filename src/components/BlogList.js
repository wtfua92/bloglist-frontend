import React from 'react';
import Blog from './Blog';

function BlogList({ blogs, likeHandler, sortByLikesHandler, blogOrder, deleteItemHandler }) {
  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  };

  return (
    <div>
      <h2>
                List of blogs:
      </h2>
      <button type="button" onClick={sortByLikesHandler}>Sort By Likes ({blogOrder.toUpperCase()})</button>
      <div style={style}>
        {
          blogs && blogs.map((b, i) => (<Blog deleteHandler={deleteItemHandler} likeHandler={likeHandler} blog={b} index={i} key={b.id} />))
        }
      </div>
    </div>
  );
}

export default BlogList;