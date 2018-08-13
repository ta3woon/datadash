import React from 'react'
import { Menu, Dropdown } from 'antd'

class ProjectManagement extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <span className="topbar__dropdownTitle">
          <strong>Device Control</strong>
        </span>
        <Menu.Item>
          <a href="https://mac-modiface-c4d8f.firebaseapp.com/">MAC Dashboard</a>
        </Menu.Item>
        <span className="topbar__dropdownTitle">
          <strong>Resources</strong>
        </span>
        <Menu.Item>
          <a href="http://localhost:3000/#/documentation">Documentation</a>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    )
    return (
      <div className="topbar__dropdown d-inline-block mr-4">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
          <a className="ant-dropdown-link" href="/">
            <i className="icmn-database mr-2 topbar__dropdownIcon" />
            <span className="d-none d-xl-inline">
              <strong>External Links</strong>
            </span>
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default ProjectManagement
