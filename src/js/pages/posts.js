import React from 'react'
import {observer, inject} from 'mobx-react'

import PostItem from '../components/post_item'

@observer(['store'])
export default class Posts extends React.Component {
  render() {

     const posts = this.props.store.postsStore.posts
      .map((post) => {
        return <PostItem post={post} key={post.id} />
      })
    return (
      <div>
        <div className="topic-title">
          <h3 className="topic-title">Posts - {selected_topic.title}</h3>
        </div>
        <div className="all-posts">
          {posts}
        </div>
      </div>
    )
  }
}