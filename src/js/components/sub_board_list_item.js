import React from 'react'
import {Link} from 'react-router'

export default class SubBoardListItem extends React.Component {
  render() {
    const {sub_board} = this.props
    return (
      <div className="list-group">
        <Link to={`/category/${sub_board.url}/topics`} className="list-group-item active">
          <h4 className="list-group-item-heading">{sub_board.name}</h4>
          <p className="list-group-item-text">{sub_board.description}</p>
        </Link>
      </div>
    );
  }
}
