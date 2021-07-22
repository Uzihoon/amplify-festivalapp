import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div style={styles}>
      <Link to='/admin'>Admins</Link>
    </div>
  );
}

const styles = {
  borderTop: '1px solid #ddd',
  display: 'flex',
  alignItems: 'center',
  padding: 20
};
