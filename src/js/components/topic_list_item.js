import React from 'react' 
import {Link} from 'react-router'

export default class TopicListItem extends React.Component {
  render() {
    const {sub_board, topic} = this.props
    return (
      <Link to={`/category/${sub_board.slug}/topics/${topic.url}`} className="list-group-item">
        <h4 className="list-group-item-heading">{topic.title}</h4>
        <p className="list-group-item-text">Nemamo content za topica...</p>
      </Link>
    )
  }
}