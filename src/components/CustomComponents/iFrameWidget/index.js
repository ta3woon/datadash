import React from 'react'
import { Button, Input, Icon, Table, Form, Card, List, Avatar } from 'antd'

import Iframe from 'react-iframe'
import './style.scss'

class iFrameWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="iframeContent">
        <div className="iframeBox">
          <Iframe id="iframeTarget" url={this.props.url} style={{ top: '0' }} />
        </div>
      </div>
    )
  }
}

export default iFrameWidget
