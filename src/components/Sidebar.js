import React from 'react';
import './Sidebar.css';
import User from '../containers/User';

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(user => (
        <User user={user} key={user.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
