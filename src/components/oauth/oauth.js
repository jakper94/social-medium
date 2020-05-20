import React, { Component } from "react";
import firebase from "../../firebase-config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./oauth.scss";
import Popup from "reactjs-popup";

class Oauth extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div className="isSignedIn">
            <img
              src={firebase.auth().currentUser.photoURL}
              alt={firebase.auth().currentUser.displayName}
            />
            <h4>{firebase.auth().currentUser.displayName}</h4>
            <div
              className="sign-out-button"
              onClick={() => firebase.auth().signOut()}
            >
              Sign out
            </div>
          </div>
        ) : (
          <div className="notSignedIn">
            <h2>Welcome!</h2>
            <Popup
              trigger={<div className="login-button">Log in</div>}
              modal
              closeOnDocumentClick
              position="right center"
            >
              <div className="insidePopUp">
                <h2>To log in to this page use one of the listed option below.</h2>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </Popup>
          </div>
        )}
      </div>
    );
  }
}
export default Oauth;
