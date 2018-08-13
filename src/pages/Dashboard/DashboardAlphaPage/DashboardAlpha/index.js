import React from 'react'
import PaymentCard from 'components/CleanComponents/PaymentCard'
import ChartCard from 'components/CleanComponents/ChartCard'
import { Button, Input, Icon, Table, Form, Card, List, Avatar } from 'antd'

import IframeComponent from 'components/CustomComponents/iFrameWidget'
import TitleBar from 'components/CustomComponents/TitleBar'
import TableWidget from 'components/CustomComponents/TableWidget'
import NotesWidget from 'components/CustomComponents/NotesWidget'

import PaymentAccount from 'components/CleanComponents/PaymentAccount'
// import Dragula from 'react-dragula'

import './style.scss'

class DashboardAlpha extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Some comments to go here.',
      // tableData: tableData,
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onTabChange = this.onTabChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // onTabChange(key, type) {
  //   console.log(key, type);
  //   this.setState({ [type]: key });
  // }

  render() {
    return (
      <div>
        {/* SECTION 1 */}
        <div className="utils__title utils__title--flat mb-3">
          <span className="text-uppercase font-size-16">Last Week Statistics</span>
        </div>

        {/* 3 RANDOM PLACE HOLDER MINI BOXES */}
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title={'Field'}
              amount={'1'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [0, 0, 0, 0, 0, 0, 0],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'Field'}
              amount={'2'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [0, 0, 0, 0, 0, 0, 0],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'Field'}
              amount={'3'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [0, 0, 0, 0, 0, 0, 0],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="utils__title utils__title--flat mb-3">
          <span className="text-uppercase font-size-16">Dashboard Reports</span>
          <Button className="ml-3">View All</Button>
        </div>

        {/* 1/2 WIDGET ROW */}
        <div className="row">
          <div className="col-lg-6">
            <TitleBar title="Google DataStudio Render" />
            <IframeComponent url="https://datastudio.google.com/embed/reporting/1JnRiu71a8oY6c5mGm-QxJBr4fK_QXJu7/page/AvLJ" />
          </div>
          <div className="col-lg-6">
            <TitleBar title="Sample Device Control" />
            <Card>
              <NotesWidget />
            </Card>
          </div>
        </div>

        <div className="utils__title utils__title--flat mb-3" style={{ height: '30px' }} />

        {/* FULL WIDGET ROW */}
        <div className="row">
          <div className="col-lg-12">
            <TitleBar title="Sample Device Control" />
            <TableWidget />
          </div>
        </div>
      </div>
    )
  }

  // dragulaDecorator = (componentBackingInstance) => {
  //   if (componentBackingInstance) {
  //     let options = { };
  //     Dragula([componentBackingInstance], options);
  //   }
  // };
}

export default DashboardAlpha
