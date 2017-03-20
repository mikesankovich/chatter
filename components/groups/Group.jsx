import React, {PropTypes} from 'react';

const Group = (props) => {
  const makeActiveGroup = (e) => {
    e.preventDefault();
    const { setGroup, group } = props;
    setGroup(group);
  }
  const { group, activeGroup, deleteGroup } = props;
  const active = group.name === activeGroup.name ? 'active' : '';

  return (
    <li className={active}>
      <a onClick={makeActiveGroup.bind(this)}>
        {group.name}
      </a>
      <button onClick={deleteGroup.bind(this, group._id)}>X</button>
    </li>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
  setGroup: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  activeGroup: PropTypes.object.isRequired
}

export default Group;
