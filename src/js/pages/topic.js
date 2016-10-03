import React from 'react'

import TopicListItem from '../components/topic_list_item'

export default class Topic extends React.Component {
  render() {
    const selected_topic = {
      id: 1, title: 'Topic Title 1', url: 'url1'
    }
    const selected_sub_board = {
      id: 1, path: 'path1', name: 'Politics', description: 'LoremIspum shit...'
    }
    const topics = [
      {id: 1, title: 'Topic Title 1', url: 'url1'},
      {id: 2, title: 'Topic Title 2', url: 'url2'},
      {id: 3, title: 'Topic Title 3', url: 'url3'},
      {id: 4, title: 'Topic Title 4', url: 'url4'},
      {id: 5, title: 'Topic Title 5', url: 'url5'},
      {id: 6, title: 'Topic Title 6', url: 'url6'},
    ].map((topic) => {
      return <TopicListItem key={topic.id} topic={topic} sub_board={selected_sub_board}/>
    })
    
    let content = topics
    if (this.props.children !== null) content = this.props.children

    return (
      <div className="container">
        {content}
      </div>
    )
  }
}