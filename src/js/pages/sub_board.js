import React from 'react'
import {observer, inject} from 'mobx-react'

import TopicListItem from '../components/topic_list_item'

@observer(['store'])
export default class SubBoard extends React.Component {
  render() {
    const {selected_sub_board} = this.props.store.viewStore
    return (
      <div className="list-group">
        <h1>{selected_sub_board.name}</h1>
        <h5>{selected_sub_board.description}</h5>
        {this.props.children}
      </div>
    );
  }
}
