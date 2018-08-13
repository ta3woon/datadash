import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import MessageItems from 'components/AntComponents/Message/index'

class MessagePage extends React.Component {
  static defaultProps = {
    pathName: 'Message',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Message" />
        <MessageItems />
      </Page>
    )
  }
}

export default MessagePage
