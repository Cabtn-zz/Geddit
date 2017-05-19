import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Review.css';


const style = {
  margin: 12,
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//Lots of good stuff happening here
export default class Review extends Component  {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      review: ''
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "blue";
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleReviewChange (e) {
    this.setState({review: e.target.value});
  }
  submitUser () {
    fetch("/api/review", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        review: this.state.review,
      })
    }).then(() => console.log("You have saved it!"))
  }
  render() {
    return (
      <div>
        <RaisedButton onClick={this.openModal} label="Reviews" secondary={true} style={style} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          {/*Need to take in the values from these input*/}
          <h2>Reviews</h2>
            <div className="marginBottom">"This ES6 class taught by Mr.Gutentag really taught me what it's like to code under pressure! - Michelle"</div>
            <div className="marginBottom">"My first exposure to ES6 and I've never learned something to succulent -Max Pazevic"</div>
            <div className="marginBottom">"It's aight... -Falko"</div>
            <div className="marginBottom">"Good instructor, just wish he had a beard -Michael"</div>

          <form>
        <h3>Write a Review</h3>
        <textarea rows="4" cols="50" name="Review" placeholder="Please write here" value={this.state.review} onChange={this.handleReviewChange} />

          <div></div>
            <RaisedButton label="Submit A Review" primary={true} style={style} onClick={this.submitUser} />
          </form>
        </Modal>
      </div>
    );
  }
}
