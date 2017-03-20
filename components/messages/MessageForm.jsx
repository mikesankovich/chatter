import React, {Component, PropTypes} from 'react';

class MessageForm extends Component {

  onFormSubmit(e) {
    e.preventDefault();
    const targetNode = this.refs.message;
    const message = targetNode.value;
    // send the message up the pipeline
    this.props.addMessage(message, this.props.activeGroup);
    targetNode.value = '';
  }
  render() {
    let input;
    // Only render the form input if the user has selected a group
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div className="form-group">
          {this.props.activeGroup._id !== undefined && <input
            type="text"
            ref="message"
            className='form-control'
            placeholder="Write Your Message..."
          />}
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  activeGroup: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired,
}

export default MessageForm;