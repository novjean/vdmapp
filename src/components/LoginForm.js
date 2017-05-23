import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged,
  passwordChanged,
  loginUser,
  forgotCredentials,
  signUp
  } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onLoginPress() {
    const { username, password } = this.props;

    this.props.loginUser({ username, password });
  }
  onSignUpPress() {
    this.props.signUp();
  }
  onForgotCredentialsPress() {
    this.props.forgotCredentials();
  }

  renderLoginButton() {
    if (this.props.loadingLogin) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        Login
      </Button>
    );
  }
  renderSignUpButton() {
    if (this.props.loadingSignUp) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onSignUpPress.bind(this)}>
        Sign Up
      </Button>
    );
  }
  renderForgotCredentialsButton() {
    if (this.props.loadingForgotCreds) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onForgotCredentialsPress.bind(this)}>
        Forgot Credentials
      </Button>
    );
  }

  render() {
    return (
      <Card style={styles.loginCard}>
        <CardSection style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}>
          <Input
            label="Username"
            placeholder="johndoe"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection
          style={{
            backgroundColor: 'transparent',
            paddingBottom: 50,
            borderBottomWidth: 0
          }}
        >
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
          {this.renderLoginButton()}
        </CardSection>

        <CardSection>
          {this.renderSignUpButton()}
        </CardSection>

        <CardSection>
          {this.renderForgotCredentialsButton()}
        </CardSection>
      </Card>
      // Background Image
      // <View style={{ flex: 1 }}>
      //   <Image source={require('../images/login.png')} style={styles.backgroundImage}>
      //   </Image>
      // </View>
    );
  }
}

//Styling
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  loginCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0
  }
};

//Mapping of state to props
const mapStateToProps = ({ auth }) => {
  const { username,
    password,
    error,
    loadingLogin,
    loadingForgotCreds,
    loadingSignUp
  } = auth;

  return { username,
    password,
    error,
    loadingLogin,
    loadingForgotCreds,
    loadingSignUp
  };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser,
  forgotCredentials,
  signUp
})(LoginForm);
