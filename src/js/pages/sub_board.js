import React from 'react'

import TopicListItem from '../components/topic_list_item'

export default class SubBoard extends React.Component {
  render() {
    const selected_sub_board = {
      id: 19, path: 'path1', name: 'Politics', description: 'LoremIspum shit...'
    }
    return (
      <div className="list-group">
        <h1>{selected_sub_board.name}</h1>
        <h5>{selected_sub_board.description}</h5>
        {this.props.children}
      </div>
    );
  }
}
