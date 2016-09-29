import React from 'react'

import SubBoardListItem from '../components/sub_board_list_item'

export default class Board extends React.Component {
  render() {
    const sub_boards = [
      {id: 1, url: 'url1', name: 'Politics', description: 'LoremIspum shit...'},
      {id: 2, url: 'url2', name: 'Drke Mrnde', description: 'LoremIspum shit...'},
      {id: 3, url: 'url4', name: 'Mora Vitas', description: 'LoremIspum shit...'},
      {id: 4, url: 'url3', name: 'Samo za Al Pacina', description: 'LoremIspum shit...'},
    ].map((sub_board) => {
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
