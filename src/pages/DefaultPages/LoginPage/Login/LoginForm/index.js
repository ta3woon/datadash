import React from 'react'
import { connect } from 'react-redux'
import { REDUCER, submit } from 'ducks/login'
import { Form, Input, Button } from 'antd'

import { auth } from '../../../../../firebase';

const FormItem = Form.Item;

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

@connect(mapStateToProps)
@Form.create()




class LoginForm extends React.Component {
  static defaultProps = {}
  state = { ...INITIAL_STATE };
  // $FlowFixMe
  onSubmit = (isSubmitForm: ?boolean) => event => {

    const {
      email,
      password,
    } = this.state;

    // const {
    //   history,
    // } = this.props;

    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {

          auth.doSignInWithEmailAndPassword(email, password)
            .then((response) => {
              // console.log('RESPONSE:', response)
              // this.setState({ ...INITIAL_STATE })
              dispatch(submit(values))
            })
            .catch(error => {
              console.log('error', error)
              alert(error)
              this.setState(updateByPropertyName('error', error));
              // alert('wrong password');
            });

        
      })
    }

    // event.preventDefault();
  }

  render() {
    const { form, isSubmitForm } = this.props

    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Please log in</strong>
        </h4>
        <br />
        <div className="mb-2">
          Email: <code>test@estee.com</code>
        </div>
        <div className="mb-4">
          Password: <code>test123</code>
        </div>
        <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
          <FormItem label="Email">
            {form.getFieldDecorator('username', {
              initialValue: 'info@ta3woon.com',
              rules: [
                { type: 'email', message: 'The input is not a valid e-mail address' },
                { required: true, message: 'Please input your e-mail address' },
              ],
            })(<Input size="default" type="email" onChange={event => this.setState(updateByPropertyName('email', event.target.value))} />)}
          </FormItem>
          <FormItem label="Password">
            {form.getFieldDecorator('password', {
              initialValue: 'Apple@123',
              rules: [{ required: true, message: 'Please input your password' }],
            })(<Input size="default" type="password" placeholder="Password" onChange={event => this.setState(updateByPropertyName('password', event.target.value))}/>)}
          </FormItem>
          <div className="mb-2">
            <a href="javascript: void(0);" className="utils__link--blue utils__link--underlined">
              Forgot password
            </a>
          </div>
          <div className="form-actions">
            <Button
              type="primary"
              className="width-150 mr-4"
              htmlType="submit"
              loading={isSubmitForm}
            >
              Login
            </Button>
            <Button className="width-100" htmlType="button">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default LoginForm
