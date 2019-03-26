
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Comics from "./Comics"

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };



  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
          <div>

              <div className="loginHeader">
                <img id="loginImage"
                src={this.state.picture} alt={this.state.name} />
                <div>
                <p>Welcome back to your comic book selection <strong>{this.state.name}</strong></p>
                <p className="ID"><strong>Facebook User ID:</strong> {this.state.userID}</p>
                  </div>               
              </div>

              <div>
                  <Comics />
              </div>
            
            </div>
      );
    } else {
        
      fbContent = (
          <div className="loginPrompt">
          <div className="loginBox">
        <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}/>
          </div>
          </div>

      );
    }

    return <div>{fbContent}</div>
    
  }
}