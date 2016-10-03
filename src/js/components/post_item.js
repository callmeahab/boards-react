import React from 'react'

export default class PostItem extends React.Component {
  render() {
    const {post} = this.props
    return (
      <div className="post" key={post.id}>
        <div className="post-info">
          <div className="post-info-user">
            <strong>{post.username}</strong>
          </div>
          <div className="post-info-user-image">
            <img className="post-info-user-image" src="http://image.gala.de/v1/cms/rY/al-pacino_8483443-square-04_top_square.jpg?v=11365695"></img>
          </div>
          <div className="post-info-user-topics-count">
            Topics started: 15
          </div>
          <div className="post-info-user-posts-count">
            Number of posts: 123
          </div>
        </div>
        <div className="post-body">
          {post.body}
        </div>
      </div>
    );
  }
}