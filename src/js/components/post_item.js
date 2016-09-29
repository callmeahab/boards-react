import React from 'react'

export default class PostItem extends React.Component {
  render() {
    const {post} = this.props
    return (
      <li key={post.id}>{post.body}, {} <strong>{post.username}</strong> </li>
    );
  }
}