import _ from "lodash";
import React, { Component } from 'react';

import { auth } from '../../../../firebase';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const SignOutButton = () => 
  <button
    type='button'
    onClick={ auth.doSignOut }
  >
    Sign Out
  </button>



class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit(event) {
    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        // this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        console.log(error);
        // this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>

        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='yellow' textAlign='center'>
              DTIG Data Dashboard
            </Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='yellow' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us 123123? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

export default LoginForm


