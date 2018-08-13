import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListItems from 'components/AntComponents/List/index'

class ListPage extends React.Component {
  static defaultProps = {
    pathName: 'List',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List" />
        <ListItems />
      </Page>
    )
  }
}

export default ListPage
