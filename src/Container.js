import React from 'react';

export default function Container({ children }) {
  return <div style={styles}>{children}</div>;
}

const styles = {
  padding: '30px 40px',
  minHeight: 'clac(100vh - 120px)'
};
