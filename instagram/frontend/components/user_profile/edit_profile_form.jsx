import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.userFormInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.filename = null;
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.username !== this.props.currentUser.username) {
      this.props.fetchUser(newProps.match.params.username);
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return this.setState({imgUrl: fileReader.result, imgFile: file});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[img_url]", this.state.imgFile);
    formData.append("user[username]", this.state.username);
    formData.append("user[name]", this.state.name);
    formData.append("user[bio]", this.state.bio);
    this.props.updateUser(formData)
      .then(() => this.props.history
      .push(`/${this.props.currentUser.username}`));
  }

  render () {
    const {currentUser} = this.props;

    if (!currentUser) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <div className='edit-user-form'>
          <div className='edit-user-title'>
            <h1>Edit Profile</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='edit-user-profile-pic'>
              <div className='edit-user-pic'>
                <img src={this.state.imgUrl}/>
              </div>
              <div className='edit-form-user-info'>
                <h1>{this.state.username}</h1>
                <div className='edit-profile-pic-link'>
                  Edit Profile Photo
                  <br></br>
                  <input type='file' onChange={this.updateFile}/>
                </div>
              </div>
            </div>
            <div className='edit-user-inputs'>
              <div className='username'>
                <aside>
                  <label htmlFor='username'>Username</label>
                </aside>
                <div className='username-input'>
                  <input
                    id='username'
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </div>
              </div>
              <div className='name'>
                <aside>
                  <label htmlFor='name'>Name</label>
                </aside>
                <div className='name-input'>
                  <input
                    id='name'
                    type='text'
                    value={this.state.name}
                    onChange={this.update('name')}/>
                </div>
              </div>
              <div className='bio'>
                <aside>
                  <label htmlFor='bio'>Bio</label>
                </aside>
                <div className='bio-textarea'>
                  <textarea
                    rows='150'
                    id='bio'
                    value={this.state.bio}
                    onChange={this.update('bio')}/>
                </div>
              </div>
            </div>
            <div className='submit-button'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default EditProfileForm;
