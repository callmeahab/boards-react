import axios from 'axios'
import {observable, action, autorun} from 'mobx'
import API_BASE from './api_base'
import viewStore from './view_store'

class SubBoard {
  @observable id
  @observable board_id
  @observable name
}

class SubBoardStore {
  @observable sub_boards = []

  @action fetchSubBoards() {
    axios
      .get(`${API_BASE}/boards/${viewStore.board_id}/sub_boards`)
      .then((response) => {
        console.log(response)
        this.sub_boards.replace(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

var subBoardStore = new SubBoardStore()
autorun(() => {
  subBoardStore.fetchSubBoards()  
})
export default subBoardStore