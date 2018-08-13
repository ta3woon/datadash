import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StepsItems from 'components/AntComponents/Steps/index'

class StepsPage extends React.Component {
  static defaultProps = {
    pathName: 'Steps',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Buttons" />
        <StepsItems />
      </Page>
    )
  }
}

export default StepsPage
