import {observable, action, computed, autorun} from 'mobx'
import axios from 'axios'
import API_BASE from './api_base'
import viewStore from './view_store'

class Post {
  @observable id
  @observable topic_id
  @observable sub_board_id
  @observable board_id
  @observable user_id
  @observable username_id
  @observable body

  constructor(post) {
    this.id = post.id
    this.topic_id = post.topic_id
    this.sub_board_id = post.sub_board_id
    this.board_id = post.board_id
    this.user_id = post.user_id
    this.username_id = post.username_id
    this.body = post.body
  }
}

class PostStore {
  @observable posts = []

  @action fetchPosts() {
    axios
      .get(`${API_BASE}/boards/${viewStore.board.id}/sub_boards/${viewStore.selected_sub_board.id}/topics/${viewStore.selected_topic.id}/posts`)
      .then((response) => {
        this.posts.replace(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

var postStore = new PostStore()
autorun(() => {
  postStore.fetchPosts()  
})
export default postStore