import React from 'react'
import {observer, inject} from 'mobx-react'

import SubBoardListItem from '../components/sub_board_list_item'

@observer(['store'])
export default class Board extends React.Component {
  render() {
    const sub_boards = this.props.store.subBoardStore.sub_boards
      .map((sub_board) => {
        return <SubBoardListItem sub_board={sub_board} key={sub_board.id} />
      })

    return (
      <div>
        <h1>Board Categories</h1>
        {sub_boards}
      </div>
    );
  }
}
