import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
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
}

export default EditProfileForm;
