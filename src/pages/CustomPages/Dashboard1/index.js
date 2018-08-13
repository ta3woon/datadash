import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
// import Invoice from 'components/CleanComponents/Invoice'
import IframeComponent from 'components/CustomComponents/iFrameWidget'
import TitleBar from 'components/CustomComponents/TitleBar'

class Dashboard1 extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard1',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Dashboard 1" />
        <div className="card">
          <div className="card-body">
            <row>
              <div className="col-lg-6">
                <TitleBar title="Another Dashboard" />
                <IframeComponent url="https://datastudio.google.com/embed/reporting/1JnRiu71a8oY6c5mGm-QxJBr4fK_QXJu7/page/AvLJ" />
              </div>
            </row>
          </div>
        </div>
      </Page>
    )
  }
}

export default Dashboard1
