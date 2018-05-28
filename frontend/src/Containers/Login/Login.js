import React, { Component } from "react";
import { connect } from "react-redux";
import { saveAuthor } from "../../Actions";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      newAuthor: ""
    };
  }
  render() {
    const { loggedIn, newAuthor } = this.state;
    const { author } = this.props;

    return (
      <div className="login">
        {loggedIn && (
          <div className="loggedin">
            <div className="loggedintext">Logged in as: {author}</div>
            <button
              className="link"
              type="button"
              onClick={() => {
                this.props.saveAuthor(undefined);
                this.setState({ loggedIn: false });
              }}
            >
              Logout
            </button>
          </div>
        )}
        {!loggedIn && (
          <div>
            <form className="loginform">
              <div className="logininput">
                <input
                  name="author"
                  type="text"
                  placeholder="Your Name"
                  value={author}
                  onChange={event =>
                    this.setState({ newAuthor: event.target.value })
                  }
                />
              </div>
              <div>
                <button
                  className="link"
                  type="button"
                  onClick={() => {
                    this.props.saveAuthor(newAuthor);
                    this.setState({ loggedIn: true });
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { author } = state.login;
  return { author };
};

const mapDispatchToProps = dispatch => ({
  saveAuthor: author => dispatch(saveAuthor(author))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
