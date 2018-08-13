import React from 'react'
import { Button } from 'antd'
import ProfileMenu from './ProfileMenu'
import ProjectManagement from './ProjectManagement'
import HomeMenu from './HomeMenu'
import './style.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__left">
          <ProjectManagement />
        </div>
        <div className="topbar__right">
          <HomeMenu />
          <ProfileMenu />
        </div>
      </div>
    )
  }
}

export default TopBar
