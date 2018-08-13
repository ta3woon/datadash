import React from 'react'
import { Button, Input, Icon, Table, Form, Card, List, Avatar, Spin } from 'antd'

import './style.scss'
import reqwest from 'reqwest'

const FormItem = Form.Item
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

class NotesWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      formLayout: 'horizontal',
      data: [],
    }
  }

  componentDidMount() {
    this.getData(res => {
      this.setState({
        loading: false,
        data: res.results,
      })
    })
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res)
      },
    })
  }

  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    })
    this.getData(res => {
      const data = this.state.data.concat(res.results)
      this.setState(
        {
          data,
          loadingMore: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'))
        },
      )
    })
  }

  render() {
    const { TextArea } = Input
    const { formLayout } = this.state
    const { loading, loadingMore, showLoadingMore, data } = this.state

    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 12, offset: 12 },
          }
        : null

    return (
      <div>
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
              <List.Item.Meta
                avatar={<Avatar>TEST</Avatar>}
                title={<a href="#">{item.name.last}</a>}
                description="Some test message about this dashboard. Typing more here to see how it overflows."
              />
            </List.Item>
          )}
        />

        <Form.Item onSubmit={this.handleSubmit} style={{ background: 'white', marginTop: '25px' }}>
          <label style={{ width: '100%', height: '100%' }}>
            <TextArea value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form.Item>
      </div>
    )
  }
}

export default NotesWidget
