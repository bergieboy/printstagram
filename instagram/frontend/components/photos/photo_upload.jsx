import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      imgUrl: null,
      imgFile: null,
      authorId: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.filename = null;
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
    formData.append("photo[img_url]", this.state.imgFile);
    formData.append("photo[author_id]", this.state.authorId);
    this.props.createPhoto(formData)
      .then(() => this.props.history
      .push(`/${this.props.currentUser.username}`));
  }

  render () {
    const {currentUser} = this.props;

    return (
      <div>
        <div className='upload-photo-container'>
          <div className='add-photo-title'>
            <h1>Add Photo</h1>
          </div>
          <div className='upload-photo-form'>
            <form onSubmit={this.handleSubmit}>
              <div className='photo-preview'>
                <img src={this.state.imgUrl}/>
              </div>
              <div className = 'upload-controls'>
                <div className='photo-upload-button'>
                  <input type='file' onChange={this.updateFile}/>
                </div>
                <div className='submit-button'>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}


export default PhotoUpload;
