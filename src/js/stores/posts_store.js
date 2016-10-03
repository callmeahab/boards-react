import {observable, action, computed, autorun} from 'mobx'

class Post {
  @observable id
  @observable topic_id
  @observable sub_board_id
  @observable board_id
  @observable user_id
  @observable username_id
  @observable body

  constructor(post) {
    this.id = sub_board.id
    this.board_id = sub_board.board_id
    this.name = sub_board.name
  }
}