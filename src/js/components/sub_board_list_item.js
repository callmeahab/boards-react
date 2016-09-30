import React from 'react'
import {Link} from 'react-router'

export default class SubBoardListItem extends React.Component {
  render() {
    const {sub_board} = this.props
    return (
      <div className="list-group">
        <Link to={`/category/${sub_board.url}/topics`} className="list-group-item active">
          <div className="sub-board">
            <div className="sub-board-name-and-description">
              <h4 className="list-group-item-heading">{sub_board.name}</h4>
              <p className="list-group-item-text">{sub_board.description}</p>
            </div>
            <div className="sub-board-last-post">
              <p className="sub-board-last-post-title"> Last post: </p>
              <p className="sub-board-last-post-user">{sub_board.post}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
