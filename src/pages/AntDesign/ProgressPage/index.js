import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ProgressItems from 'components/AntComponents/Progress/index'

class ProgressPage extends React.Component {
  static defaultProps = {
    pathName: 'Progress',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Progress" />
        <ProgressItems />
      </Page>
    )
  }
}

export default ProgressPage
