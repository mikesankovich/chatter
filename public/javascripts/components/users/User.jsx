import React, {Component, PropTypes} from 'react';

class User extends Component {

  render() {
    console.log(this.props.currentUser)
    const { user, currentUser } = this.props;
    const isMe = () => user.username === currentUser.username ? '(me)' : '';
    return (
      <li>
        {`${user.username} ${isMe()}`}
      </li>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;
