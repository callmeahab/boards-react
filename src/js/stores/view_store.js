import {observable, computed} from 'mobx'

class ViewStore {
  @observable board_id = 1
  @observable selected_subboard = 19
  @observable selected_topic
}

var viewStore = new ViewStore()
export default viewStore