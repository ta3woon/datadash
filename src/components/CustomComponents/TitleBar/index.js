import React from 'react'
import { Button, Input, Icon, Table, Form, Card, List, Avatar, Badge } from 'antd'

import './style.scss'

class TitleBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="titleBar">
        <Badge status="success" />
        {this.props.title}
        <div className="titleIcons">
          <i className="fa fa-exclamation-triangle" />
          <i className="fa fa-cog" />
          <i className="fa fa-comments" />
          <i className="fa fa-comments" />
        </div>
      </div>
    )
  }
}

export default TitleBar
