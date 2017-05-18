import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password } = this.props;

    this.props.loginUser({ username, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="johndoe@gmail.com"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//Styling
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

//Mapping of state
const mapStateToProps = ({ auth }) => {
  const { username, password, error } = auth;

  return { username, password, error };
};

export default connect(mapStateToProps, {
  usernameChanged, passwordChanged, loginUser
})(LoginForm);