import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgUrl: null,
      imgFile: null,
      author_id: this.props.currentUser.id,
    };
  }
}


export default PhotoUpload;
