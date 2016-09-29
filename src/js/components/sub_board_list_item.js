import React, { Component } from 'react';

export default class SubBoardListItem extends Component {
  render() {
    const {sub_board} = this.props
    return (
      <div class="list-group">
        <a href="#" class="list-group-item active">
          <h4 class="list-group-item-heading">{sub_board.name}</h4>
          <p class="list-group-item-text">{sub_board.description}</p>
        </a>
      </div>
    );
  }
}
