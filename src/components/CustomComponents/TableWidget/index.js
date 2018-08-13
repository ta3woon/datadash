import React from 'react'
import {
  Button,
  Input,
  Icon,
  Table,
  Form,
  Card,
  List,
  Avatar,
  Switch,
  Cascader,
  Select,
  Row,
  Col,
  Tooltip,
  AutoComplete,
  Checkbox,
  Tag,
} from 'antd'

import NotesWidget from 'components/CustomComponents/NotesWidget'

import './style.scss'

class TableWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noTitleKey: 'table',
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }

  onTabChange = (key, type) => {
    console.log(key, type)
    this.setState({ [type]: key })
  }

  render() {
    const dataSource = [
      {
        id: '1',
        alias: '12.9 iPad Pro DTIG',
        device: '11223',
        status: 'Off',
        uses: '104',
        online: 'On',
        appVersion: '1.1.27',
        adni: '29',
        lastActivity: '07/07/2018 17:35:39',
        lastOnline: '07/06/2018 01:17:20',
      },
      {
        id: '2',
        alias: 'DTIG Test iPad Pro 12',
        device: 'F6QTF05FGMW3',
        status: 'Off',
        uses: 'Off',
        online: 'Off',
        appVersion: '1.0',
        adni: '29',
        lastActivity: '07/07/2018 17:35:39',
        lastOnline: '07/06/2018 01:17:20',
      },
    ]

    const columns = [
      {
        title: '#',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Device',
        dataIndex: 'device',
        key: 'device',
      },
      {
        title: 'Alias',
        dataIndex: 'alias',
        key: 'alias',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Uses',
        dataIndex: 'uses',
        key: 'uses',
      },
      {
        title: 'App Version',
        dataIndex: 'appVersion',
        key: 'appVersion',
      },
      {
        title: 'ADNI',
        dataIndex: 'adni',
        key: 'adni',
      },
      {
        title: 'Last Activity',
        dataIndex: 'lastActivity',
        key: 'lastActivity',
      },
      {
        title: 'Last Online',
        dataIndex: 'lastOnline',
        key: 'lastOnline',
      },
    ]

    const tabListNoTitle = [
      {
        key: 'table',
        tab: 'table',
      },
      {
        key: 'settings',
        tab: 'settings',
      },
      {
        key: 'messages',
        tab: 'messages',
      },
    ]

    const TableTab = () => {
      return (
        <div>
          <p>
            <span>Group:</span> 1111
          </p>
          <p>
            <span>Online:</span> <Switch size="small" defaultChecked />
          </p>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      )
    }

    const contentListNoTitle = {
      table: <TableTab />,
      settings: <WrappedSettingsTab />,
      messages: <NotesWidget />,
    }

    return (
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={this.state.noTitleKey}
        onTabChange={key => {
          this.onTabChange(key, 'noTitleKey')
        }}
      >
        {contentListNoTitle[this.state.noTitleKey]}
      </Card>
    )
  }
}

const residences = [
  {
    value: 'Boston',
    label: 'Boston',
    children: [
      {
        value: 'Massachusetts',
        label: 'Massachusetts',
        children: [
          {
            value: 'US',
            label: 'US',
          },
        ],
      },
    ],
  },
  {
    value: 'New York',
    label: 'New York',
    children: [
      {
        value: 'New York',
        label: 'New York',
        children: [
          {
            value: 'New York',
            label: 'New York',
          },
        ],
      },
    ],
  },
]

const settingsDataDummy = {
  title: 'Prudential Center',
  message: 'MAC, Shops at Prudcential Center, 800 Boylston St. Boston, MA',
  group: '12637',
  tags: ['all', 'pilot', 'pilot-group2'],
}

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option

class SettingsTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noTitleKey: 'table',
      confirmDirty: false,
      autoCompleteResult: [],
      editable: false,
      settingsData: settingsDataDummy,
    }
  }

  editToggle = () => {
    console.log('edit toggle')
    this.setState({ editable: !this.state.editable })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  // compareToFirstPassword = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // }

  // validateToNextPassword = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const SettingsTabOptions = () => {
      return (
        <div style={{ float: 'right', textAlign: 'right' }}>
          <p>
            <span>Edit:</span> <Switch onClick={this.editToggle} size="small" />
          </p>
          <p>
            <span>Online:</span> <Switch size="small" defaultChecked />{' '}
          </p>
        </div>
      )
    }

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

    return (
      <div>
        <SettingsTabOptions />
        <Form onSubmit={this.handleSubmit} style={{ clear: 'both', float: 'left' }}>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                Title&nbsp;&nbsp;
                <Tooltip title="Enter the name of the store">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('title', {
              rules: [
                {
                  type: 'text',
                  message: '',
                },
                {
                  required: false,
                  message: '',
                },
              ],
            })(
              <div>
                {this.state.editable === false ? (
                  <span>{this.state.settingsData.title}</span>
                ) : (
                  <Input placeholder={this.state.settingsData.title} />
                )}
              </div>,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Message">
            {getFieldDecorator('message', {
              rules: [
                {
                  required: false,
                },
              ],
            })(
              <div>
                {this.state.editable === false ? (
                  <span>{this.state.settingsData.message}</span>
                ) : (
                  <Input placeholder={this.state.settingsData.message} />
                )}
              </div>,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Group">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: false,
                },
              ],
            })(<Input placeholder="12637" />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                Tags&nbsp;&nbsp;
                <Tooltip title="Separate your tags with commas">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: false, whitespace: true }],
            })(
              <div>
                <Input placeholder="" />
                <Tag>all</Tag>
                <Tag>pilot</Tag>
                <Tag closable>pilot-group2</Tag>
              </div>,
            )}
          </FormItem>

          {/* 
	        <FormItem
	          {...formItemLayout}
	          label="Habitual Residence"
	        >
	          {getFieldDecorator('residence', {
	            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
	            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
	          })(
	            <Cascader options={residences} />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="Alert Style"
	        >
	          {getFieldDecorator('phone', {
	            rules: [{ required: true, message: 'Please input your phone number!' }],
	          })(
	            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="Website"
	        >
	          {getFieldDecorator('website', {
	            rules: [{ required: true, message: 'Please input website!' }],
	          })(
	            <AutoComplete
	              dataSource={websiteOptions}
	              onChange={this.handleWebsiteChange}
	              placeholder="website"
	            >
	              <Input />
	            </AutoComplete>
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="Captcha"
	          extra="We must make sure that your are a human."
	        >
	          <Row gutter={8}>
	            <Col span={12}>
	              {getFieldDecorator('captcha', {
	                rules: [{ required: true, message: 'Please input the captcha you got!' }],
	              })(
	                <Input />
	              )}
	            </Col>
	            <Col span={12}>
	              <Button>Get captcha</Button>
	            </Col>
	          </Row>
	        </FormItem>
	        <FormItem {...tailFormItemLayout}>
	          {getFieldDecorator('agreement', {
	            valuePropName: 'checked',
	          })(
	            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
	          )}
	        </FormItem>
	        */}
          <FormItem {...tailFormItemLayout}>
            <Button type="disabled">Save</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedSettingsTab = Form.create()(SettingsTab)

export default TableWidget
