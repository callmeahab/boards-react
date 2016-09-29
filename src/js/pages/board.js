import React, { Component } from 'react';

import SubBoardListItem from '../components/sub_board_list_item'

export default class Board extends Component {
  render() {
    const sub_boards = [
      {id: 1, path: 'path1', name: 'Politics', description: 'LoremIspum shit...'},
      {id: 2, path: 'path2', name: 'Drke Mrnde', description: 'LoremIspum shit...'},
      {id: 3, path: 'path3', name: 'Mora Vitas', description: 'LoremIspum shit...'},
      {id: 4, path: 'path4', name: 'Samo za Al Pacina', description: 'LoremIspum shit...'},
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
