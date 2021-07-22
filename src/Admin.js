import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

function Admin() {
  return (
    <div>
      <h1 style={styles}>Admin</h1>
      <AmplifySignOut />
    </div>
  );
}

const styles = {
  fontWeight: 'normal',
  margin: '0 0 10px 0'
};

export default withAuthenticator(Admin);
