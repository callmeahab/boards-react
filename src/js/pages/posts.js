import React from 'react'

import PostItem from '../components/post_item'

export default class Posts extends React.Component {
  render() {
    const selected_topic = {
      id: 1, title: 'Topic Title 1', url: 'url1'
    }
    const selected_sub_board = {
      id: 1, path: 'path1', name: 'Politics', description: 'LoremIspum shit...'
    }
    const posts = [
      {id: 1, body: "Some important message 1", username: "Milovan1"},
      {id: 2, body: "Some important message 2", username: "Milovan2"},
      {id: 3, body: "Some important message 3", username: "Milovan3"},
      {id: 4, body: "Some important message 4", username: "Milovan4"},
      {id: 5, body: "Some important message 5", username: "Milovan5"},
     ].map((post) => {
        return <PostItem key={post.id} post={post} />
     })
    return (
      <div>
        <h3>Posts - {selected_topic.title}</h3>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}