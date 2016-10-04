import React from 'react'
import {observer, inject} from 'mobx-react'

import TopicListItem from '../components/topic_list_item'

@observer(['store'])
export default class Topic extends React.Component {
  render() {
    console.log(this.props.store)
    const topics = this.props.store.topicsStore.topics
      .map((topic) => {
        return <TopicListItem topic={topic} key={topic.id} />
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