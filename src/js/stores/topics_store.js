import axios from 'axios'
import {observable, action, autorun} from 'mobx'
import API_BASE from './api_base'
import viewStore from './view_store'

class Topic {
  @observable id
  @observable board_id
  @observable sub_board_id
  @observable name
}

class TopicStore {
  @observable topics = []

  @action fetchTopics() {
    axios
      .get(`${API_BASE}/boards/${viewStore.board.id}/sub_boards/${viewStore.selected_sub_board.id}/topics`)
      .then((response) => {
        this.topics.replace(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

var topicStore = new TopicStore()
autorun(() => {
  topicStore.fetchTopics()  
})
export default topicStore