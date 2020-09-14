import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
 
export default class FacebookLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <div>
        <FacebookProvider appId="2397377263900056">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
      </div>
      
    );
  }
}