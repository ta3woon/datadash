import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TreeItems from 'components/AntComponents/Tree/index'

class TreePage extends React.Component {
  static defaultProps = {
    pathName: 'Tree',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Tree" />
        <TreeItems />
      </Page>
    )
  }
}

export default TreePage
