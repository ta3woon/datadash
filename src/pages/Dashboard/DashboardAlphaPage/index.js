import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardAlpha from './DashboardAlpha'

class DashboardAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'Default Dashboard',
    roles: ['developer', 'superadmin'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Default Dashboard" />
        <DashboardAlpha />
      </Page>
    )
  }
}

export default DashboardAlphaPage
