import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  render(){
    return (
      <div className = 'session_form'>
        <div className = 'main_session_box'>
          <div className = 'session_logo_text' >
            <h3>Printstagram</h3>
          </div>
          <div className = 'session_inputs'>
            <h2>{this.props.formHeader}</h2>
            <form onSubmit={this.handleSubmit}>
              <h2></h2>
              <div className = 'username_input'>
                <label>Username:
                  <input
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')} />
                </label>
              </div>
              <div className = 'password_input'>
                <label>Password:
                  <input
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')} />
                </label>
              </div>
              <div>
                <input type='submit' value={this.props.formType} />
              </div>
            </form>
          </div>
          <div className = 'alternative_session_option' >
            <p>{this.props.formAlt}{this.props.navLink}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
