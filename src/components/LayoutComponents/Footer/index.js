import React from 'react'
import { Button } from 'antd'
import './style.scss'

class AppFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-9">
              <p>
                <strong>DTIG Data Dashboard</strong>
              </p>
              <p>
                For further documentation, please visit the &nbsp;
                <a href="https://confluence.esteeonline.com/display/DTIG/MAC+Modiface+Dashboard+Documentation#MACModifaceDashboardDocumentation-Xcommands(admin)">
                  Confluence Page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppFooter
