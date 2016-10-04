import {observable, computed} from 'mobx'

class ViewStore {
  @observable board = {
    id: 1,
    name: "Ergonomic Copper Lamp",
    description: "[\"illo\", \"est\", \"quo\"]",
    topics_count: 0,
    posts_count: 0,
    slug: "ergonomic-copper-lamp",
    created_at: "2016-09-30T11:55:45.415Z",
    updated_at: "2016-09-30T11:55:45.415Z"
  }
  @observable selected_sub_board = {
    id: 19,
    board_id: 1,
    name: "Movies & Sports",
    description: "context-sensitive",
    topics_count: 0,
    posts_count: 0,
    slug: "movies-sports",
    created_at: "2016-09-30T11:55:45.498Z",
    updated_at: "2016-09-30T11:55:45.498Z"
  }
  @observable selected_topic = {
    id: 50,
    board_id: 1,
    sub_board_id: 1,
    user_id: 375,
    title: "adapter",
    posts_count: 0,
    slug: "adapter-c24eec9f-cc43-408a-af42-4b63912875b9",
    created_at: "2016-09-30T11:55:57.359Z",
    updated_at: "2016-09-30T11:55:57.359Z",
    username_id: 1101
  }
}

var viewStore = new ViewStore()
export default viewStore