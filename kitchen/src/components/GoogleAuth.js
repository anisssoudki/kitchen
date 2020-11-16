// 516836447013-bv47oocaehigg20r1un04d5s2e3nn1un.apps.googleusercontent.com
// const auth = gapi.auth2.getAuthInstance()
// refrence auth in the console auth.isSignedIn auth.signIn() to signin auth.signOut() to signout
//gapi.auth2.getAuthInstance().currentUser will return the current user who is signed in

import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        //load the client:auth2 library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '516836447013-bv47oocaehigg20r1un04d5s2e3nn1un.apps.googleusercontent.com',
                scope: 'profile email'
            })
            
            .then(() =>{
                // setting this.auth equal to gapi auth instance provided by googleapi
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
                
                });
            });
        }
    

        onAuthChange = (isSignedIn) => {
  
            if(isSignedIn) {
               
                this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.le.tt.gV )
                // this.props.createUser({name: this.auth.currentUser.get().tt.Ad, email: this.auth.currentUser.get().tt.$t})
               
            } else {
                this.props.signOut();
            }
         }
    

  
onSignInClick = () => {
    this.auth.signIn();

};

onSignOutClick = () => {
    this.auth.signOut();
};


renderAuthButton() {

    if (this.props.isSignedIn === null) {
        return <div>Loading...</div>
    } else if (this.props.isSignedIn) {
        return (
            <div>
        <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon"/>
        Logout
        </button>
        <p>Welcome {this.auth.currentUser.le.tt.gV}</p>
        </div>
        )
    } else {
        return (
            <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon"/>
            Login with google
            </button>
        )
    }
}

    render() {
return <div className="item">{this.renderAuthButton()}</div>;

    }
}
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut })(GoogleAuth)